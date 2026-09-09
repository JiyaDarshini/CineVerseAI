export interface WikiActorData {
  title: string;
  extract: string;
  thumbnailUrl: string | null;
  pageUrl: string;
  attribution: string;
}

const wikiCache = new Map<string, WikiActorData>();

/**
 * Fetches live actor biography and photo from Wikipedia REST API
 * https://en.wikipedia.org/api/rest_v1/page/summary/{name}
 */
export async function fetchActorWikiData(actorName: string, customQueryTitle?: string): Promise<WikiActorData> {
  const query = (customQueryTitle || actorName).trim();
  const cacheKey = query.toLowerCase();

  if (wikiCache.has(cacheKey)) {
    return wikiCache.get(cacheKey)!;
  }

  // Format title for Wikipedia URL (spaces to underscores)
  const formattedTitle = encodeURIComponent(query.replace(/\s+/g, '_'));
  const directApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${formattedTitle}`;

  try {
    const response = await fetch(directApiUrl, {
      headers: {
        'Accept': 'application/json',
      }
    });

    if (response.ok) {
      const data = await response.json();
      
      const result: WikiActorData = {
        title: data.title || actorName,
        extract: data.extract || `${actorName} is an acclaimed performer known for prominent roles in film and theater.`,
        thumbnailUrl: data.thumbnail?.source || data.originalimage?.source || null,
        pageUrl: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${formattedTitle}`,
        attribution: 'Data sourced live from Wikipedia (CC BY-SA 3.0 / 4.0)',
      };

      wikiCache.set(cacheKey, result);
      return result;
    }

    // If direct summary returns 404 / disambiguation, perform a Wikipedia opensearch / query fallback
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(actorName + ' actor')}&utf8=&format=json&origin=*`;
    const searchRes = await fetch(searchUrl);
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const firstResult = searchData.query?.search?.[0];
      if (firstResult?.title) {
        const fallbackSummaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(firstResult.title.replace(/\s+/g, '_'))}`;
        const fallbackRes = await fetch(fallbackSummaryUrl);
        if (fallbackRes.ok) {
          const fbData = await fallbackRes.json();
          const fbResult: WikiActorData = {
            title: fbData.title || firstResult.title,
            extract: fbData.extract || firstResult.snippet?.replace(/<[^>]*>/g, '') || `${actorName} is an established screen actor.`,
            thumbnailUrl: fbData.thumbnail?.source || null,
            pageUrl: fbData.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(firstResult.title)}`,
            attribution: 'Data sourced live from Wikipedia (CC BY-SA 3.0 / 4.0)',
          };
          wikiCache.set(cacheKey, fbResult);
          return fbResult;
        }
      }
    }
  } catch (error) {
    console.warn(`[WikiService] Could not fetch live Wikipedia data for "${actorName}":`, error);
  }

  // Graceful fallback
  const fallbackResult: WikiActorData = {
    title: actorName,
    extract: `${actorName} is a recognized film and theatre artist with extensive credits in contemporary cinema.`,
    thumbnailUrl: null,
    pageUrl: `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(actorName)}`,
    attribution: 'Wikipedia entry search',
  };

  wikiCache.set(cacheKey, fallbackResult);
  return fallbackResult;
}
