import { MovieProject } from '../types';

export const SAMPLE_PROJECTS: MovieProject[] = [
  {
    id: 'proj-thirai-01',
    title: 'Thirai: Echoes of Eternity',
    tagline: 'When time fractures in Chennai, the past becomes the ultimate crime scene.',
    genre: 'Sci-Fi Neo-Noir Thriller',
    language: 'Tamil & Multilingual',
    targetIndustry: 'Tamil Cinema (Kollywood)',
    targetAudience: 'Global cinema connoisseurs, 18-45, fans of intricate non-linear storytelling',
    estimatedBudgetRange: '₹45 Cr - ₹65 Cr ($6M - $8M USD)',
    productionType: 'Feature Film',
    createdAt: '2026-08-15T10:00:00Z',
    updatedAt: '2026-09-08T18:30:00Z',
    rawScreenplayText: `EXT. CHENNAI HARBOR - MIDNIGHT (RAINING)
The monolithic shipping cranes look like iron dinosaurs against the electric blue storm clouds.
VASAN (48), a weathered acoustic forensics researcher with scarred hands, presses a vintage Nagra reel-to-reel tape recorder against a rusted copper anchor.

VASAN
(whispering into comms)
The sound signature isn't traveling through air. It's vibrating from twenty-seven years ago.

Inside the warehouse, AARANYA (32), laser-focused theoretical physicist in a soaked trenchcoat, watches chromatic aberrations ripple across her quantum oscilloscope.

AARANYA
Get out of there, Vasan. If the acoustic waveform locks, the tide doesn't just reverse—the harbor disappears.

Suddenly, a heavy chrome cane strikes the wet asphalt. DEVARAJ (58), dressed in immaculate dark khadi silk, emerges from the fog with an unsettling, serene smile.

DEVARAJ
Time isn't a river, my dear Vasan. It's a recorded tape. And I hold the magnetic eraser.`,
    storyAnalysis: {
      logline: 'An acoustic forensics investigator and an astrophysicist discover that an antique sound wave buried beneath the Bay of Bengal can rewrite historical events, putting them in the crosshairs of a ruthless shipping tycoon.',
      synopsis: 'Set across the neon-drenched monsoon nights of Chennai and the ancient stone temples of Thanjavur, Thirai blends hard science fiction with Tamil cultural depth. When sound archives from 1999 start bleeding into modern police dispatch frequencies, Vasan discovers a corporate conspiracy that murdered his family. Alongside Aaranya, he must race against time—literally—to decrypt the frequency before Devaraj triggers a localized reality collapse.',
      genre: ['Sci-Fi', 'Neo-Noir', 'Psychological Mystery', 'Techno-Thriller'],
      themes: ['Acoustic memory', 'Grief and reconciliation', 'Corporate oligarchy vs Truth', 'The physics of karma'],
      emotionalTone: 'Moody, cerebral, intense, with poetic philosophical undertones and escalating adrenaline',
      pacing: 'Slow-burn investigative first act accelerating into a pulse-pounding, time-bending climax',
      targetAudience: 'Lovers of Inception, Vikram, Interstellar, and Mani Ratnam-style visual aesthetics',
      marketPotential: 'High pan-Indian and international festival appeal with strong OTT theatrical hybrid upside',
    },
    characters: [
      {
        id: 'char-vasan',
        name: 'Vasanth "Vasan" Ramamoorthy',
        role: 'Protagonist',
        ageRange: '45 - 55',
        gender: 'Male',
        archetype: 'Obsessive Forensic Detective / Broken Father',
        personalityTraits: ['Methodical', 'Acoustically gifted', 'Guilt-ridden', 'Quietly rebellious', 'Resilient'],
        motivation: 'To find out the truth behind his daughter\'s disappearance during the 1999 Chennai cyclone and undo the silence that broke his life.',
        castingRequirements: 'Intense eyes, rugged lived-in screen gravitas, master of restrained grief and explosive desperation.',
        characterJourney: 'Transitions from an isolated, near-suicidal acoustic archivist into an audacious rebel who weaponizes sound against an untouchable empire.',
        sceneCountEstimated: 64,
        emotionalArcIntensity: 'High',
        recommendations: [
          {
            id: 'rec-vasan-1',
            name: 'Kamal Haasan',
            wikiQueryName: 'Kamal Haasan',
            rank: 1,
            matchPercentage: 96,
            rubric: {
              actingStyleMatch: 24, // out of 25
              ageAppearance: 14, // out of 15
              genreExperience: 15, // out of 15
              emotionalRange: 15, // out of 15
              previousRoleSimilarity: 14, // out of 15
              screenPresence: 10, // out of 10
              marketFit: 4, // out of 5
            },
            reasoning: 'CineVerse found supreme alignment between Vasan\'s acoustic obsessions and Kamal Haasan\'s peerless mastery of intellectual, multi-layered characters (akin to Nayakan, Hey Ram, and Vettaiyaadu Vilaiyaadu). His deep resonant voice and micro-expression capability bring unmatched emotional authenticity to the sound-driven narrative.',
            strengths: ['Unmatched craft in portraying intellectual vulnerability and grief', 'Global box office & festival brand equity', 'Voice modulation elevates sound-design focus'],
            potentialChallenge: 'High budget demand and scheduling availability requires locked pre-production dates.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Vettaiyaadu Vilaiyaadu', 'Nayakan', 'Vikram', 'Hey Ram'],
          },
          {
            id: 'rec-vasan-2',
            name: 'Vikram (actor)',
            wikiQueryName: 'Vikram (actor)',
            rank: 2,
            matchPercentage: 93,
            rubric: {
              actingStyleMatch: 23,
              ageAppearance: 15,
              genreExperience: 14,
              emotionalRange: 14,
              previousRoleSimilarity: 13,
              screenPresence: 9,
              marketFit: 5,
            },
            reasoning: 'Vikram possesses the fierce physical commitment and transformative intensity needed for Vasan\'s descent into acoustic obsession (proven in Anniyan, Mahan, and Iru Mugan). He thrives in gritty, atmospheric neo-noir landscapes.',
            strengths: ['Immense physical dedication to nuanced character traits', 'Tremendous empathy generation from audiences', 'Comfort with high-stamina night shoots'],
            potentialChallenge: 'Requires careful directorial containment to keep the performance hyper-grounded rather than theatrical.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Mahaam', 'Anniyan', 'Thangalaan', 'Deiva Thirumagal'],
          },
          {
            id: 'rec-vasan-3',
            name: 'Fahadh Faasil',
            wikiQueryName: 'Fahadh Faasil',
            rank: 3,
            matchPercentage: 89,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 12,
              genreExperience: 14,
              emotionalRange: 15,
              previousRoleSimilarity: 12,
              screenPresence: 9,
              marketFit: 3,
            },
            reasoning: 'Fahadh\'s legendary eye-acting and internal simmering energy make him an electrifying contender for a slightly younger, hyper-eccentric iteration of Vasan. His unpredictability keeps the audience on edge.',
            strengths: ['World-class micro-acting and realistic nuance', 'Universal pan-Indian critical acclaim', 'Extreme versatility in psychological dramas'],
            potentialChallenge: 'Age profile is slightly below the 48-year-old anchor, requiring subtle aging makeup.',
            industry: 'Malayalam Cinema (Mollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Kumbalangi Nights', 'Vikram', 'Malik', 'Aavesham'],
          },
          {
            id: 'rec-vasan-4',
            name: 'Prakash Raj',
            wikiQueryName: 'Prakash Raj',
            rank: 4,
            matchPercentage: 84,
            rubric: {
              actingStyleMatch: 21,
              ageAppearance: 14,
              genreExperience: 12,
              emotionalRange: 13,
              previousRoleSimilarity: 12,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Prakash Raj delivers unmatched naturalism and effortless fatherly warmth mingled with weary cynical wisdom, making the emotional core of the father-daughter loss deeply poignant.',
            strengths: ['Effortless dialogue delivery in multilingual takes', 'High emotional believability', 'Reliable production collaborator'],
            potentialChallenge: 'Frequently seen in father/mentor roles; requires a distinct physical styling to feel completely fresh.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Iruvar', 'Abhiyum Naanum', 'Kanchivaram', 'Santhosh Subramaniam'],
          },
          {
            id: 'rec-vasan-5',
            name: 'Pasupathy (actor)',
            wikiQueryName: 'Pasupathy (actor)',
            rank: 5,
            matchPercentage: 81,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 15,
              genreExperience: 11,
              emotionalRange: 13,
              previousRoleSimilarity: 10,
              screenPresence: 7,
              marketFit: 3,
            },
            reasoning: 'Pasupathy brings raw, unpolished, organic realism that would ground the sci-fi elements into the salt-and-sweat reality of the North Chennai coastline.',
            strengths: ['Extraordinary earthy realism and grit', 'High budget efficiency', 'Deep theater background'],
            potentialChallenge: 'Lower commercial pre-release distribution leverage compared to superstar tier.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Mid-Career',
            budgetImpact: 'Low',
            notablePastRoles: ['Sarpatta Parambarai', 'Virumaandi', 'E', 'Veyil'],
          }
        ]
      },
      {
        id: 'char-aaranya',
        name: 'Dr. Aaranya Swaminathan',
        role: 'Deuteragonist',
        ageRange: '28 - 36',
        gender: 'Female',
        archetype: 'Pragmatic Quantum Physicist / Rebel Academic',
        personalityTraits: ['Analytical', 'Sharp-witted', 'Uncompromising', 'Secretly empathetic', 'High-speed thinker'],
        motivation: 'To prove that her father\'s banned acoustic tensor theory was valid and prevent its weaponization by corporate oligarchs.',
        castingRequirements: 'Radiant intellectual sharpness, effortless technical terminology fluency, dynamic presence opposite senior actors.',
        characterJourney: 'Starts as an aloof academic relying purely on mathematical proofs, but evolves into a courageous frontline operative who trusts acoustic intuition.',
        sceneCountEstimated: 48,
        emotionalArcIntensity: 'High',
        recommendations: [
          {
            id: 'rec-aaranya-1',
            name: 'Samantha Ruth Prabhu',
            wikiQueryName: 'Samantha Ruth Prabhu',
            rank: 1,
            matchPercentage: 94,
            rubric: {
              actingStyleMatch: 23,
              ageAppearance: 15,
              genreExperience: 14,
              emotionalRange: 14,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 5,
            },
            reasoning: 'Samantha combines modern intellectual poise with proven high-intensity action and emotional vulnerability (evidenced in Citadel: Honey Bunny and The Family Man 2). She gives Aaranya immediate contemporary charisma.',
            strengths: ['High pan-Indian star power across South & North markets', 'Superb physical agility and screen sharpness', 'Strong emotional connect with youth demographics'],
            potentialChallenge: 'Competitive shooting calendar across national OTT and feature commitments.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['The Family Man', 'Super Deluxe', 'Mahanati', 'Citadel: Honey Bunny'],
          },
          {
            id: 'rec-aaranya-2',
            name: 'Trisha (actress)',
            wikiQueryName: 'Trisha (actress)',
            rank: 2,
            matchPercentage: 91,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 14,
              genreExperience: 14,
              emotionalRange: 14,
              previousRoleSimilarity: 13,
              screenPresence: 9,
              marketFit: 5,
            },
            reasoning: 'Trisha commands regal intelligence and effortless screen authority (as seen in Ponniyin Selvan & Leo), providing an elegant counterweight to Vasan\'s rugged world.',
            strengths: ['Immense marquee value and timeless audience adoration', 'Flawless diction and magnetic gaze', 'Natural chemistry with veteran co-stars'],
            potentialChallenge: 'Needs bespoke costume and styling design to project academic grit over glamor.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Ponniyin Selvan', '96', 'Leo', 'Ghilli'],
          },
          {
            id: 'rec-aaranya-3',
            name: 'Aishwarya Rajesh',
            wikiQueryName: 'Aishwarya Rajesh',
            rank: 3,
            matchPercentage: 88,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 15,
              genreExperience: 12,
              emotionalRange: 14,
              previousRoleSimilarity: 11,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Aishwarya brings uncompromising authenticity and fierce naturalism (proven in Kaaka Muttai and Kanaa) that makes Aaranya feel like an authentic, hard-working Chennai researcher.',
            strengths: ['Exceptional natural performance style', 'Strong relatability and realism', 'Budget-optimized casting choice'],
            potentialChallenge: 'Moderate theatrical pull outside core South Indian theatrical circuits.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Kanaa', 'Kaaka Muttai', 'Farhana', 'Vada Chennai'],
          },
          {
            id: 'rec-aaranya-4',
            name: 'Sai Pallavi',
            wikiQueryName: 'Sai Pallavi',
            rank: 4,
            matchPercentage: 86,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 14,
              genreExperience: 11,
              emotionalRange: 15,
              previousRoleSimilarity: 10,
              screenPresence: 9,
              marketFit: 5,
            },
            reasoning: 'Sai Pallavi\'s incandescent emotional sincerity and expressive minimalism would elevate the moral questioning of the script into pure cinema.',
            strengths: ['Deep organic emotional resonance', 'Massive cross-cultural admiration in all South states', 'Zero-filter authenticity'],
            potentialChallenge: 'Has traditionally prioritized human-drama roles over hard sci-fi action.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Gargi', 'Premam', 'Shyam Singha Roy', 'Virata Parvam'],
          },
          {
            id: 'rec-aaranya-5',
            name: 'Andrea Jeremiah',
            wikiQueryName: 'Andrea Jeremiah',
            rank: 5,
            matchPercentage: 83,
            rubric: {
              actingStyleMatch: 21,
              ageAppearance: 14,
              genreExperience: 14,
              emotionalRange: 12,
              previousRoleSimilarity: 12,
              screenPresence: 7,
              marketFit: 3,
            },
            reasoning: 'As an actual professional singer and musician, Andrea\'s intuitive relationship with acoustics and sound makes her casting as a sound-theorist organically authentic.',
            strengths: ['Real musical and acoustic understanding', 'Edgy urban screen presence', 'Experience with mystery/thriller genres (Pisasu II, Vada Chennai)'],
            potentialChallenge: 'Niche theatrical footprint compared to A-list leads.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Mid-Career',
            budgetImpact: 'Low',
            notablePastRoles: ['Vada Chennai', 'Aayirathil Oruvan', 'Taramani', 'Vishwaroopam'],
          }
        ]
      },
      {
        id: 'char-devaraj',
        name: 'Devaraj Chidambaram',
        role: 'Antagonist',
        ageRange: '52 - 65',
        gender: 'Male',
        archetype: 'Cultured Corporate Titan / Philosophical Nihilist',
        personalityTraits: ['Charming', 'Philosophical', 'Ruthless', 'Soft-spoken', 'Aesthetically refined'],
        motivation: 'To monopolize the acoustic time-collapse frequency to erase maritime financial debts and rewrite state port contracts to his benefit.',
        castingRequirements: 'Aristocratic charisma, chilling stillness, ability to deliver terrifying threats in a polite, conversational whisper.',
        characterJourney: 'Maintains an unshakeable facade of philanthropic benevolence until the final act when his absolute obsession with controlling fate explodes.',
        sceneCountEstimated: 36,
        emotionalArcIntensity: 'Medium',
        recommendations: [
          {
            id: 'rec-devaraj-1',
            name: 'Vijay Sethupathi',
            wikiQueryName: 'Vijay Sethupathi',
            rank: 1,
            matchPercentage: 97,
            rubric: {
              actingStyleMatch: 25,
              ageAppearance: 14,
              genreExperience: 15,
              emotionalRange: 15,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 5,
            },
            reasoning: 'Vijay Sethupathi is India\'s gold standard for magnetic, casually menacing antagonists (Master, Vikram, Jawan). His effortless conversational delivery and chilling comedic undertones make Devaraj unforgettable.',
            strengths: ['Phenomenal natural charisma that disarms and terrifies', 'Massive box office pull across India', 'Exceptional dialogue delivery'],
            potentialChallenge: 'High demand across multiple regional industries necessitates early contract locking.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Vikram', 'Master', 'Super Deluxe', 'Merry Christmas'],
          },
          {
            id: 'rec-devaraj-2',
            name: 'S. J. Suryah',
            wikiQueryName: 'S. J. Suryah',
            rank: 2,
            matchPercentage: 94,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 15,
              genreExperience: 14,
              emotionalRange: 14,
              previousRoleSimilarity: 14,
              screenPresence: 8,
              marketFit: 5,
            },
            reasoning: 'SJ Suryah\'s eccentric, theatrical brilliance and electrifying intensity (Maanaadu, Jigarthanda DoubleX, Mark Antony) make him a tour-de-force villain who commands every frame.',
            strengths: ['Supreme theatrical energy and meme-worthy dialogue delivery', 'Beloved by modern cinephiles for flamboyant villainy', 'Strong comic-dark timing'],
            potentialChallenge: 'Needs careful directorial tuning to preserve the subtle quiet menace of the script.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Maanaadu', 'Jigarthanda DoubleX', 'Mark Antony', 'Mersal'],
          },
          {
            id: 'rec-devaraj-3',
            name: 'Nassar (actor)',
            wikiQueryName: 'Nassar (actor)',
            rank: 3,
            matchPercentage: 86,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 15,
              genreExperience: 13,
              emotionalRange: 13,
              previousRoleSimilarity: 11,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Nassar represents classical Tamil cinematic royalty with immense dramatic depth (Baahubali, Bombay, Kuruthipunal), giving Devaraj a venerable aristocratic pedigree.',
            strengths: ['Impeccable classical diction and aristocratic poise', 'Mastery of nuanced villainy', 'Extremely dependable production asset'],
            potentialChallenge: 'Leans more classical than modern techno-corporate.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Low',
            notablePastRoles: ['Baahubali', 'Bombay', 'Kuruthipunal', 'Roja'],
          },
          {
            id: 'rec-devaraj-4',
            name: 'Arvind Swamy',
            wikiQueryName: 'Arvind Swamy',
            rank: 4,
            matchPercentage: 85,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 14,
              genreExperience: 12,
              emotionalRange: 12,
              previousRoleSimilarity: 13,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Arvind Swamy redefined sophisticated, suave villainy in Thani Oruvan. He would bring effortless multinational CEO polish to Devaraj\'s corporate operations.',
            strengths: ['Elite urbane sophistication', 'Chic styling and corporate authenticity', 'Cult following among thriller audiences'],
            potentialChallenge: 'Selective about feature commitments and script revisions.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Thani Oruvan', 'Roja', 'Bombay', 'Bogan'],
          },
          {
            id: 'rec-devaraj-5',
            name: 'Arjun Sarja',
            wikiQueryName: 'Arjun Sarja',
            rank: 5,
            matchPercentage: 80,
            rubric: {
              actingStyleMatch: 20,
              ageAppearance: 14,
              genreExperience: 12,
              emotionalRange: 11,
              previousRoleSimilarity: 11,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'The Action King brings physical intimidation and mature presence (as demonstrated in Irumbu Thirai and Leo), making Devaraj formidable in both boardrooms and fistfights.',
            strengths: ['Physical action believability', 'Strong South Indian legacy brand', 'Commanding baritone voice'],
            potentialChallenge: 'More suited for physically confrontational roles than purely cerebral ones.',
            industry: 'Tamil Cinema (Kollywood)',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Irumbu Thirai', 'Leo', 'Gentleman', 'Mudhalvan'],
          }
        ]
      }
    ],
    relationships: [
      {
        id: 'rel-1',
        fromCharacterId: 'char-vasan',
        toCharacterId: 'char-aaranya',
        relationType: 'Father / Mentor',
        emotionalTension: 'Medium',
        arcSummary: 'Initially clash due to Vasan\'s acoustic intuition versus Aaranya\'s rigid quantum models, but forge an unbreakable surrogate father-daughter bond grounded in mutual grief and scientific defiance.',
        keyTurningPoint: 'When Aaranya plays her late father\'s hidden recording in Scene 42, Vasan reveals the frequency matches his daughter\'s heartbeat, sealing their alliance.'
      },
      {
        id: 'rel-2',
        fromCharacterId: 'char-vasan',
        toCharacterId: 'char-devaraj',
        relationType: 'Rivalry / Antagonism',
        emotionalTension: 'High',
        arcSummary: 'Vasan previously worked under Devaraj\'s acoustic research division before being framed and blacklisted. Their confrontation is deeply personal and ideological—the honest researcher versus the commodifier of time.',
        keyTurningPoint: 'The midnight standoff at the Chennai port warehouse where Devaraj reveals he orchestrated the 1999 cyclone rescue failure.'
      },
      {
        id: 'rel-3',
        fromCharacterId: 'char-aaranya',
        toCharacterId: 'char-devaraj',
        relationType: 'Betrayal / Friction',
        emotionalTension: 'High',
        arcSummary: 'Devaraj funded Aaranya\'s university fellowship under the guise of philanthropy, only to secretly patent her quantum acoustic patents for military surveillance.',
        keyTurningPoint: 'Aaranya hacks Devaraj\'s cloud vault in Scene 58 and uncovers the encrypted shipping manifests.'
      }
    ],
    budget: {
      totalEstimatedBudgetUsd: 7200000,
      scaleBadge: 'Medium',
      complexityParagraph: 'CineVerse Budget Intelligence estimates a medium-to-high production scale driven by complex acoustic VFX rendering, practical night shoots during heavy rain simulations in Chennai harbor, and dual-location logistics between urban Chennai and heritage temple complexes in Thanjavur.',
      items: [
        {
          category: 'Cast & Talent Lead Pool',
          percentage: 32,
          estimatedAmountUsd: 2304000,
          scaleLevel: 'High',
          description: 'A-list lead cast remunerations, character look tests, dubbing in 5 languages, and stunt doubles.',
          costDrivers: ['Top-tier lead ensemble compensation', 'Multilingual dubbing artists', 'Specialized intimacy and stunt coordinators']
        },
        {
          category: 'VFX & Acoustic Time Distortion Effects',
          percentage: 22,
          estimatedAmountUsd: 1584000,
          scaleLevel: 'High',
          description: 'Chromatic reality ripple simulation, acoustic soundwave visualization shaders, and 1999 harbor reconstruction.',
          costDrivers: ['Custom CGI time-freeze sequences', 'Digital environment extensions for 1999 Chennai', 'High-frame-rate phantom camera rentals']
        },
        {
          category: 'Location & Art Department (Sets)',
          percentage: 16,
          estimatedAmountUsd: 1152000,
          scaleLevel: 'Medium',
          description: 'Custom quantum acoustic laboratory set at Chennai film city, dock warehouse retrofitting, and Thanjavur temple permits.',
          costDrivers: ['Historical prop fabrication (vintage Nagra reels)', 'Water tank staging for storm climax', 'Archaeological site security permits']
        },
        {
          category: 'Principal Photography & Camera Package',
          percentage: 14,
          estimatedAmountUsd: 1008000,
          scaleLevel: 'Medium',
          description: 'Arri Alexa Mini LF paired with anamorphic lenses for neo-noir contrast, technocrane rigs, and monsoon rain rigs.',
          costDrivers: ['Industrial rain machine arrays', 'Extensive night shift labor surcharges', 'High-end anamorphic glass rentals']
        },
        {
          category: 'Sound Design & Atmos Mix',
          percentage: 8,
          estimatedAmountUsd: 576000,
          scaleLevel: 'High',
          description: 'Signature acoustic sound engineering, Dolby Atmos multi-bed mastering, live Foley orchestra in Budapest/Chennai.',
          costDrivers: ['Bespoke acoustic frequency recording expeditions', 'Dolby Atmos 9.1.6 theatrical mix', 'Live acoustic orchestra scoring']
        },
        {
          category: 'Marketing & Pan-Indian Release Campaign',
          percentage: 8,
          estimatedAmountUsd: 576000,
          scaleLevel: 'Medium',
          description: 'Teaser campaign, IMAX remastering, city tour events in Chennai, Hyderabad, Mumbai, Kochi, and Bengaluru.',
          costDrivers: ['Immersive 3D audio teaser installations', 'Digital influencer push', 'Print and billboard media in metro belts']
        }
      ]
    },
    locations: [
      {
        id: 'loc-1',
        name: 'Chennai Port Container Terminal',
        type: 'Outdoor',
        setting: 'Industrial shipping dock, heavy monsoon storm, midnight neon lighting',
        sceneCount: 14,
        estimatedDays: 9,
        permitComplexity: 'Permit Intensive / Restricted',
        notes: 'Requires central Port Trust clearances, night shooting protocols, and specialized electrical waterproofing.',
        realWorldAlternatives: ['Ennore Port Outer Yard', 'Cochin Shipyard Auxiliary Dock', 'Studio Water Lot with Green Screen Backing']
      },
      {
        id: 'loc-2',
        name: 'Vasan\'s Acoustic Archive & Listening Den',
        type: 'Indoor',
        setting: 'Subterranean basement lined with thousands of magnetic tapes, vintage oscilloscopes, acoustic baffling',
        sceneCount: 18,
        estimatedDays: 12,
        permitComplexity: 'Simple',
        notes: 'Best constructed as a practical soundstage set in EVP Film City to ensure complete acoustic control.',
        realWorldAlternatives: ['Heritage colonial godown in George Town, Chennai', 'Old All India Radio archival vault']
      },
      {
        id: 'loc-3',
        name: 'Brihadisvara Temple Acoustic Corridors',
        type: 'Hybrid',
        setting: '1000-year-old Chola granite corridors where resonance frequencies are measured at dawn',
        sceneCount: 6,
        estimatedDays: 4,
        permitComplexity: 'Permit Intensive / Restricted',
        notes: 'Archaeological Survey of India (ASI) strict non-intrusive shooting permissions required.',
        realWorldAlternatives: ['Gangaikonda Cholapuram', 'Darasuram Airavatesvara Temple', 'Detailed set recreation']
      },
      {
        id: 'loc-4',
        name: 'Devaraj Sky Penthouse & Boardroom',
        type: 'Indoor',
        setting: 'Minimalist glass-and-marble penthouse overlooking the Bay of Bengal coastline',
        sceneCount: 11,
        estimatedDays: 6,
        permitComplexity: 'Moderate',
        notes: 'High-end architectural residential rental on East Coast Road (ECR).',
        realWorldAlternatives: ['Luxury ECR beach villa', 'Commercial tower in OMR tech corridor']
      }
    ],
    timeline: {
      totalWeeks: 38,
      complexityScore: 78,
      complexityBadge: 'Complex',
      phases: [
        {
          phase: 'Pre-Production',
          durationWeeks: 12,
          keyMilestones: [
            'Final screenplay acoustic cue lock & storyboard animatic approval',
            'Lead cast contract finalization and specialized look tests',
            'Port trust and ASI location permits clearance',
            'Acoustic sound design library pre-recording'
          ],
          criticalRisks: ['Delays in Port Trust clearances', 'VFX pre-visualization iteration turnaround']
        },
        {
          phase: 'Principal Photography',
          durationWeeks: 14,
          keyMilestones: [
            'Block 1: EVP Studio acoustic lab set (3 weeks)',
            'Block 2: Chennai Port night monsoon sequences (4 weeks)',
            'Block 3: Thanjavur heritage schedule (2 weeks)',
            'Block 4: ECR Penthouse & car pursuit climax (5 weeks)'
          ],
          criticalRisks: ['Monsoon weather disruptions during real harbor shoots', 'Night shift actor fatigue']
        },
        {
          phase: 'Post-Production',
          durationWeeks: 10,
          keyMilestones: [
            'Assembly cut & director\'s offline edit lock',
            'Acoustic distortion CGI and chromatic shader compositing',
            'Dolby Atmos spatial sound design and live orchestral score recording',
            'Multilingual dubbing and color grading (ACES workflow)'
          ],
          criticalRisks: ['High rendering turnaround for complex quantum particle VFX']
        },
        {
          phase: 'Festival & Distribution',
          durationWeeks: 2,
          keyMilestones: [
            'Premiere submission to International Film Festival circuit',
            'Pan-Indian theatrical release in 5 languages across 3,200 screens'
          ],
          criticalRisks: ['Theatrical release date clashes with holiday tentpoles']
        }
      ],
      highCostFlags: [
        {
          sceneDescription: 'Scene 1: Chennai Harbor midnight time-fracture in torrential rain with shipping crane collapse',
          reason: 'Night Shoots',
          costImpact: 'High',
          mitigationSuggestion: 'Stage crane collapse using digital asset extension and shoot practical water spray on a controlled stage.'
        },
        {
          sceneDescription: 'Scene 74: Climax time-reversal sequence across Marina Beach where 10,000 festival goers freeze in place',
          reason: 'Crowd Sequence',
          costImpact: 'Critical',
          mitigationSuggestion: 'Use motion control camera pass with 150 real extras and procedural 3D crowd replication.'
        },
        {
          sceneDescription: 'Scene 42: Quantum acoustic chamber resonance shatter with flying glass shards in slow motion',
          reason: 'VFX Heavy',
          costImpact: 'Medium',
          mitigationSuggestion: 'Shoot high-speed phantom pass with sugar-glass practicals supplemented by CGI physics simulations.'
        }
      ]
    },
    aiInsights: [
      'The protagonist Vasan has a profound, high-empathy character arc transitioning from grief-paralysis to proactive scientific rebellion.',
      'Extensive night schedules (62% of principal photography) and rain rigs will increase operational lighting and crew safety budgets by ~15%.',
      'The casting of Dr. Aaranya requires an actor with strong multilingual diction to convincingly deliver quantum tensor dialogue without losing emotional warmth.',
      'ASI location restrictions at Thanjavur can be mitigated by shooting non-invasive dawn drone plates and constructing corridor interiors on soundstages.',
      'Sound design represents a primary storytelling weapon; allocating 8% of the budget directly to bespoke acoustic design will yield outsized festival recognition.'
    ]
  },
  {
    id: 'proj-kala-02',
    title: 'Kala Gulab (The Black Rose)',
    tagline: 'In the underworld of South Bombay, innocence is the rarest counterfeit.',
    genre: 'Psychological Crime Noir',
    language: 'Hindi & Urdu',
    targetIndustry: 'Bollywood',
    targetAudience: 'Adult drama, crime thriller enthusiasts, fans of Gangs of Wasseypur and Sacred Games',
    estimatedBudgetRange: '₹28 Cr - ₹40 Cr ($3.5M - $5M USD)',
    productionType: 'Feature Film',
    createdAt: '2026-07-10T14:00:00Z',
    updatedAt: '2026-09-02T11:20:00Z',
    rawScreenplayText: `INT. DONGRI ANTIQUE SHOP - DUSK
Dust motes float in the amber rays cutting through Victorian stained glass.
INSPECTOR SURAJ (50), sunken eyes behind thick horn-rimmed glasses, watches an antique gramophone spin silently.

BEGUM ROSHANARA (46), draped in an austere black silk saree, pours lukewarm jasmine tea with surgical precision.

SURAJ
Twenty years ago, you vanished with thirty kilograms of rough diamonds and the chief justice's confession. Why come back now, Begum?

ROSHANARA
Because, Inspector, the men who bought that silence are running for parliament tomorrow. And I am tired of living in the dark.`,
    storyAnalysis: {
      logline: 'A retired crime branch detective is pulled back into the shadows of South Mumbai when an enigmatic former underworld matriarch returns with evidence capable of toppling the state government.',
      synopsis: 'An intense game of psychological chess between two aging legends on opposite sides of the law, unfolding over 72 hours across the docks, colonial mansions, and rain-slicked alleys of South Mumbai.',
      genre: ['Crime Drama', 'Noir', 'Psychological Thriller'],
      themes: ['Power and betrayal', 'The erosion of justice', 'Aging in a violent world'],
      emotionalTone: 'Tense, poetic, cynical, emotionally searing',
      pacing: 'Methodical suspense that tightens like a vise',
      targetAudience: 'Cinematic drama lovers, streaming subscriber base, prestige festival audiences',
      marketPotential: 'High OTT acquisition value and strong critical awards trajectory',
    },
    characters: [
      {
        id: 'char-suraj',
        name: 'Inspector Suraj Trivedi',
        role: 'Protagonist',
        ageRange: '48 - 56',
        gender: 'Male',
        archetype: 'Weary Cynical Investigator',
        personalityTraits: ['Observant', 'Morally conflicted', 'Exhausted', 'Unyielding'],
        motivation: 'To close the only unsolved case of his career and redeem his soul before terminal health issues take over.',
        castingRequirements: 'Deeply expressive eyes, understated delivery, effortless Hindi/Urdu cadence.',
        characterJourney: 'Reclaims his moral spine after decades of bureaucratic compromise.',
        sceneCountEstimated: 52,
        emotionalArcIntensity: 'High',
        recommendations: [
          {
            id: 'rec-suraj-1',
            name: 'Manoj Bajpayee',
            wikiQueryName: 'Manoj Bajpayee',
            rank: 1,
            matchPercentage: 97,
            rubric: {
              actingStyleMatch: 25,
              ageAppearance: 15,
              genreExperience: 15,
              emotionalRange: 15,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 4,
            },
            reasoning: 'Manoj Bajpayee is India\'s foremost practitioner of world-weary investigative realism (The Family Man, Gali Guleiyan, Satya). His ability to convey decades of moral weight through a simple sigh is unmatched.',
            strengths: ['Supreme realistic dialogue and emotional micro-expressions', 'Critical darling with global prestige cachet', 'Deep script immersion'],
            potentialChallenge: 'Requires an uncompromising, non-commercial shooting schedule to deliver his best.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['The Family Man', 'Gangs of Wasseypur', 'Satya', 'Bhosle', 'Sirf Ek Bandaa Kaafi Hai'],
          },
          {
            id: 'rec-suraj-2',
            name: 'Jaideep Ahlawat',
            wikiQueryName: 'Jaideep Ahlawat',
            rank: 2,
            matchPercentage: 94,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 14,
              genreExperience: 15,
              emotionalRange: 14,
              previousRoleSimilarity: 14,
              screenPresence: 8,
              marketFit: 5,
            },
            reasoning: 'Jaideep\'s breakthrough work in Paatal Lok and Jaane Jaan proves his mastery of raw, unglamorous police cynicism and deep human vulnerability.',
            strengths: ['Towering physical screen presence combined with tender pathos', 'Immense resonance with OTT thriller audiences', 'Flawless dialect work'],
            potentialChallenge: 'High demand across national streaming productions.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Paatal Lok', 'Jaane Jaan', 'An Action Hero', 'Raazi'],
          },
          {
            id: 'rec-suraj-3',
            name: 'Kay Kay Menon',
            wikiQueryName: 'Kay Kay Menon',
            rank: 3,
            matchPercentage: 90,
            rubric: {
              actingStyleMatch: 23,
              ageAppearance: 15,
              genreExperience: 14,
              emotionalRange: 13,
              previousRoleSimilarity: 13,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Kay Kay Menon brings razor-sharp intellectual intensity and aristocratic sarcasm (Special OPS, Haider, Black Friday) that turns every police interrogation into a psychological thriller.',
            strengths: ['Supreme theatrical command and sharp vocal cadence', 'Intimidating cerebral screen aura', 'Reliable collaborator'],
            potentialChallenge: 'Can tilt towards cold intellectualism; needs emphasis on domestic vulnerability.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Special OPS', 'Haider', 'Black Friday', 'The Railway Men'],
          },
          {
            id: 'rec-suraj-4',
            name: 'Pankaj Tripathi',
            wikiQueryName: 'Pankaj Tripathi',
            rank: 4,
            matchPercentage: 87,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 14,
              genreExperience: 13,
              emotionalRange: 14,
              previousRoleSimilarity: 12,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Pankaj Tripathi\'s legendary deadpan warmth and effortless philosophical humor would give Suraj an unforgettable, disarmingly relatable charm.',
            strengths: ['Unrivaled audience affection across all demographics', 'Effortless improvisation', 'Organic dialogue delivery'],
            potentialChallenge: 'Audience familiarity with his signature mannerisms requires distinct character styling.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Mirzapur', 'Criminal Justice', 'Stree', 'Sacred Games'],
          },
          {
            id: 'rec-suraj-5',
            name: 'Nawazuddin Siddiqui',
            wikiQueryName: 'Nawazuddin Siddiqui',
            rank: 5,
            matchPercentage: 84,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 13,
              genreExperience: 14,
              emotionalRange: 14,
              previousRoleSimilarity: 11,
              screenPresence: 7,
              marketFit: 3,
            },
            reasoning: 'Nawazuddin brings raw, jittery existential desperation (Raman Raghav 2.0, Sacred Games) that would portray a detective teetering on the edge of breakdown.',
            strengths: ['Unpredictable, volcanic emotional outbursts', 'Indie credibility', 'Cult international following'],
            potentialChallenge: 'Frequently cast in dark crime roles; requires fresh narrative framing.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Sacred Games', 'Gangs of Wasseypur', 'Raman Raghav 2.0', 'The Lunchbox'],
          }
        ]
      },
      {
        id: 'char-roshanara',
        name: 'Begum Roshanara',
        role: 'Antagonist',
        ageRange: '42 - 50',
        gender: 'Female',
        archetype: 'Fallen Queen / Strategic Underworld Matriarch',
        personalityTraits: ['Regal', 'Calculating', 'Traumatized', 'Unforgiving', 'Cultured'],
        motivation: 'To dismantle the political syndicate that destroyed her family and leave Mumbai on her own terms.',
        castingRequirements: 'Timeless poise, piercing intelligence, mastery of Urdu poetry and lethal psychological manipulation.',
        characterJourney: 'Transforms from an elusive ghost of Bombay past into the ultimate executioner of systemic corruption.',
        sceneCountEstimated: 42,
        emotionalArcIntensity: 'High',
        recommendations: [
          {
            id: 'rec-roshanara-1',
            name: 'Tabu (actress)',
            wikiQueryName: 'Tabu (actress)',
            rank: 1,
            matchPercentage: 98,
            rubric: {
              actingStyleMatch: 25,
              ageAppearance: 15,
              genreExperience: 15,
              emotionalRange: 15,
              previousRoleSimilarity: 14,
              screenPresence: 10,
              marketFit: 4,
            },
            reasoning: 'Tabu is universally acclaimed as the queen of layered, morally complex, aristocratic noir figures (Maqbool, Haider, Andhadhun, Khufiya). Her gaze alone communicates decades of aristocratic tragedy.',
            strengths: ['Incomparable screen gravity and regal melancholy', 'Impeccable Urdu/Hindi diction', 'Pan-Indian box office and critical dominance'],
            potentialChallenge: 'High demand across prestige commercial and indie projects.',
            industry: 'Bollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Andhadhun', 'Maqbool', 'Haider', 'Khufiya', 'Drishyam'],
          },
          {
            id: 'rec-roshanara-2',
            name: 'Shefali Shah',
            wikiQueryName: 'Shefali Shah',
            rank: 2,
            matchPercentage: 93,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 14,
              genreExperience: 14,
              emotionalRange: 15,
              previousRoleSimilarity: 13,
              screenPresence: 8,
              marketFit: 5,
            },
            reasoning: 'Shefali Shah brings visceral, raw, heart-stopping intensity and emotional ferocity (Delhi Crime, Darlings, Jalsa). She would make Roshanara terrifyingly grounded.',
            strengths: ['Peerless realistic acting and emotional power', 'Emmy-nominated prestige pedigree', 'Relentless dedication to character truth'],
            potentialChallenge: 'Requires careful costume and poise design to emphasize the aristocratic underworld heritage.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Delhi Crime', 'Darlings', 'Jalsa', 'Monsoon Wedding'],
          },
          {
            id: 'rec-roshanara-3',
            name: 'Radhika Apte',
            wikiQueryName: 'Radhika Apte',
            rank: 3,
            matchPercentage: 87,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 13,
              genreExperience: 14,
              emotionalRange: 13,
              previousRoleSimilarity: 12,
              screenPresence: 8,
              marketFit: 5,
            },
            reasoning: 'Radhika Apte possesses a fierce modern intelligence and international thriller experience (Sacred Games, Monica O My Darling, Ghoul).',
            strengths: ['Contemporary, sharp edge and fearless choices', 'Global festival familiarity', 'Great chemistry with investigative leads'],
            potentialChallenge: 'Age profile is slightly young for a 20-year case backstory.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Sacred Games', 'Andhadhun', 'Monica, O My Darling', 'Parched'],
          },
          {
            id: 'rec-roshanara-4',
            name: 'Huma Qureshi',
            wikiQueryName: 'Huma Qureshi',
            rank: 4,
            matchPercentage: 85,
            rubric: {
              actingStyleMatch: 21,
              ageAppearance: 14,
              genreExperience: 13,
              emotionalRange: 13,
              previousRoleSimilarity: 12,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Huma commands strong screen confidence and fiery political presence (Maharani, Gangs of Wasseypur, Monica O My Darling).',
            strengths: ['Loud, commanding presence when required', 'Strong political drama experience', 'Rich voice'],
            potentialChallenge: 'Leans more populist than the quiet gothic noir tone of Begum Roshanara.',
            industry: 'Bollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Maharani', 'Gangs of Wasseypur', 'Tarla', 'Double XL'],
          },
          {
            id: 'rec-roshanara-5',
            name: 'Vidya Balan',
            wikiQueryName: 'Vidya Balan',
            rank: 5,
            matchPercentage: 82,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 14,
              genreExperience: 12,
              emotionalRange: 14,
              previousRoleSimilarity: 9,
              screenPresence: 8,
              marketFit: 3,
            },
            reasoning: 'Vidya Balan is a titan of Indian cinema with radiant warmth and magnetic charm (Kahaani, Jalsa, Sherni). Casting her against type as a ruthless underworld mastermind would be a major talking point.',
            strengths: ['Massive mainstream credibility', 'Incredible emotional sincerity', 'Master of subversion'],
            potentialChallenge: 'Less frequently cast in cold, dark villainous roles.',
            industry: 'Bollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Kahaani', 'Jalsa', 'The Dirty Picture', 'Sherni'],
          }
        ]
      }
    ],
    relationships: [
      {
        id: 'rel-k1',
        fromCharacterId: 'char-suraj',
        toCharacterId: 'char-roshanara',
        relationType: 'Rivalry / Antagonism',
        emotionalTension: 'High',
        arcSummary: 'A 20-year obsession where detective and suspect evolved an unspoken mutual respect. Their dialogues mirror high-stakes interrogation and psychological seduction.',
        keyTurningPoint: 'Scene 60 in the abandoned Ballard Estate warehouse when Roshanara hands Suraj the audio tape that incriminates his own former commissioner.'
      }
    ],
    budget: {
      totalEstimatedBudgetUsd: 4200000,
      scaleBadge: 'Medium',
      complexityParagraph: 'Kala Gulab operates on a tight, character-driven budget structure prioritizing atmospheric location production in heritage South Mumbai districts and a master-class ensemble cast.',
      items: [
        {
          category: 'Cast & Key Talent',
          percentage: 36,
          estimatedAmountUsd: 1512000,
          scaleLevel: 'High',
          description: 'Ensemble cast, dialect coaching, period styling.',
          costDrivers: ['Prestige lead duo package', 'Veteran supporting character actors']
        },
        {
          category: 'Location Permits & South Bombay Heritage Logistics',
          percentage: 20,
          estimatedAmountUsd: 840000,
          scaleLevel: 'High',
          description: 'Ballard Estate, Fort colonial streets, Sassoon Docks, and Crawford Market night shoots.',
          costDrivers: ['BMC & Mumbai Police heritage location fees', 'Traffic diversions in Fort precinct']
        },
        {
          category: 'Production Design & Period Noir Sets',
          percentage: 18,
          estimatedAmountUsd: 756000,
          scaleLevel: 'Medium',
          description: 'Antique shop set build, retro-styled police interrogation room, vintage vehicles.',
          costDrivers: ['Authentic antique prop rentals', 'Atmospheric haze and lighting setups']
        },
        {
          category: 'Cinematography & Lighting Package',
          percentage: 12,
          estimatedAmountUsd: 504000,
          scaleLevel: 'Medium',
          description: 'Sony Venice 2 low-light sensor package, vintage Cooke Panchro primes for creamy shadow rolloff.',
          costDrivers: ['Low-light camera body package', 'Mobile LED crane rigs for dock sequences']
        },
        {
          category: 'Post-Production, Music & Sound Mix',
          percentage: 8,
          estimatedAmountUsd: 336000,
          scaleLevel: 'Medium',
          description: 'Atmospheric noir jazz/Indian classical fusion score, 7.1 surround sound mix.',
          costDrivers: ['Live sarangi and cello recordings', 'Foley and dialogue ADR cleaning']
        },
        {
          category: 'Festival & Marketing Run',
          percentage: 6,
          estimatedAmountUsd: 252000,
          scaleLevel: 'Low',
          description: 'National film festival submissions, curated press junkets.',
          costDrivers: ['Curated digital premiere screenings', 'Print media critic screenings']
        }
      ]
    },
    locations: [
      {
        id: 'loc-k1',
        name: 'Ballard Estate Colonial Alleyways',
        type: 'Outdoor',
        setting: 'Gothic cobblestone streets, rain-dampened yellow sodium vapor lights, midnight silence',
        sceneCount: 16,
        estimatedDays: 7,
        permitComplexity: 'Permit Intensive / Restricted',
        notes: 'Requires weekend night clearances from Mumbai Heritage Conservation Committee.',
        realWorldAlternatives: ['Kala Ghoda art precinct', 'Old Goa Portuguese quarters']
      },
      {
        id: 'loc-k2',
        name: 'Sassoon Docks Fish Market',
        type: 'Outdoor',
        setting: 'Gritty pre-dawn fish auction, trawler boats, wet reflective concrete',
        sceneCount: 9,
        estimatedDays: 4,
        permitComplexity: 'Moderate',
        notes: 'Crowd management needed during 3:00 AM to 6:00 AM auction rush.',
        realWorldAlternatives: ['Bhaucha Dhakka (Ferry Wharf)', 'Versova Koliwada Jetty']
      },
      {
        id: 'loc-k3',
        name: 'Dongri Antique & Gramophone Vault',
        type: 'Indoor',
        setting: 'Claustrophobic antique shop with stacked vinyl records and dusty clocks',
        sceneCount: 15,
        estimatedDays: 8,
        permitComplexity: 'Simple',
        notes: 'Studio set build recommended to allow removable walls for long tracking shots.',
        realWorldAlternatives: ['Chor Bazaar real antique shop', 'Goregaon Film City soundstage']
      }
    ],
    timeline: {
      totalWeeks: 28,
      complexityScore: 58,
      complexityBadge: 'Moderate',
      phases: [
        {
          phase: 'Pre-Production',
          durationWeeks: 8,
          keyMilestones: ['Script dialogue polish', 'Heritage site shoot approvals', 'Cooke vintage lens tests'],
          criticalRisks: ['Delays in Mumbai municipal heritage permissions']
        },
        {
          phase: 'Principal Photography',
          durationWeeks: 9,
          keyMilestones: ['South Bombay night block (4 weeks)', 'Studio interior dialogues (3 weeks)', 'Docks shoot (2 weeks)'],
          criticalRisks: ['Traffic management in South Bombay during shoots']
        },
        {
          phase: 'Post-Production',
          durationWeeks: 9,
          keyMilestones: ['Color timing for shadow-rich noir grade', 'Live score mixing with sarangi master', 'Sound design lock'],
          criticalRisks: ['Audio sync for bustling live dock audio tracks']
        },
        {
          phase: 'Festival & Distribution',
          durationWeeks: 2,
          keyMilestones: ['Busan & MAMI festival premieres', 'Direct OTT platform premiere or limited theatrical release'],
          criticalRisks: ['OTT acquisition negotiations']
        }
      ],
      highCostFlags: [
        {
          sceneDescription: 'Scene 28: Standoff at Sassoon Docks during morning high tide with 200 fish auction workers',
          reason: 'Crowd Sequence',
          costImpact: 'Medium',
          mitigationSuggestion: 'Shoot in the mid-week lull window with 40 staged extras augmenting real fishermen.'
        },
        {
          sceneDescription: 'Scene 88: Extended vintage car chase through torrential rain in Ballard Estate',
          reason: 'Night Shoots',
          costImpact: 'High',
          mitigationSuggestion: 'Utilize specialized low-profile tracking camera cars and precision stunt drivers.'
        }
      ]
    },
    aiInsights: [
      'The dramatic core rests upon dialogue timing between Suraj and Roshanara; allocating adequate rehearsal time will pay massive dividends.',
      'Low-light digital cameras (Sony Venice 2 / Alexa Mini LF) are essential to capture the authentic deep shadows of Mumbai noir.',
      'A compact 28-week production schedule makes this a highly cost-efficient prestige project with great ROI potential.',
      'The film has high potential for international festival recognition in competitive Asian cinema showcases.'
    ]
  },
  {
    id: 'proj-neon-03',
    title: 'Neon Protocol',
    tagline: 'When artificial memories bleed into reality, the code becomes the crime.',
    genre: 'Cyberpunk Action Mystery',
    language: 'English',
    targetIndustry: 'Hollywood',
    targetAudience: 'Global sci-fi fans, 18-35, fans of Blade Runner 2049, Ex Machina, and Cyberpunk: Edgerunners',
    estimatedBudgetRange: '$80M - $110M USD',
    productionType: 'Feature Film',
    createdAt: '2026-06-01T09:00:00Z',
    updatedAt: '2026-09-05T16:00:00Z',
    rawScreenplayText: `EXT. NEO-SEATTLE - SECTOR 9 - NIGHT (PERPETUAL DRIZZLE)
Holographic koi fish swim through the bioluminescent smog between thousand-foot carbon-fiber skyscrapers.
KALE (38), cybernetic retrieval specialist with ocular chrome implants, crouches on a gargoyle ledge.

KALE
(into neural link)
I've got the extraction target in sight. But her memory signature... it's identical to the girl who drowned in Lake Washington twenty years ago.

MAYA (V.O.)
That's impossible, Kale. That girl was me.`,
    storyAnalysis: {
      logline: 'A cynical memory extraction specialist in a rain-drowned cyberpunk metropolis discovers that his latest corporate target holds the encrypted consciousness of his deceased childhood friend.',
      synopsis: 'Neon Protocol is a high-octane visual spectacle grounded in deep philosophical questions about human consciousness, grief, and synthetic identity in a world dominated by memory-synthesizing mega-corporations.',
      genre: ['Cyberpunk', 'Sci-Fi Action', 'Mystery', 'Neo-Noir'],
      themes: ['Authenticity of memory', 'Transhumanism and grief', 'Corporate hegemony over identity'],
      emotionalTone: 'Visually dazzling, melancholic, adrenaline-fueled, philosophical',
      pacing: 'Rapid kinetic action sequences interspersed with haunting, intimate character investigations',
      targetAudience: 'Global blockbuster theatrical & IMAX audience',
      marketPotential: 'Massive global box office upside with franchise and gaming spin-off potential',
    },
    characters: [
      {
        id: 'char-kale',
        name: 'Kale Thorne',
        role: 'Protagonist',
        ageRange: '35 - 45',
        gender: 'Male',
        archetype: 'Hardboiled Synthetic Detective / Wounded Veteran',
        personalityTraits: ['Cynical', 'Hyper-vigilant', 'Haunted', 'Lethal', 'Quietly compassionate'],
        motivation: 'To uncover the truth behind his synthetic memory wipes and protect Maya from corporate extermination.',
        castingRequirements: 'Haunting gaze, physical action capability, brooding emotional stillness.',
        characterJourney: 'Breaks free from corporate conditioning to reclaim authentic human feeling.',
        sceneCountEstimated: 75,
        emotionalArcIntensity: 'High',
        recommendations: [
          {
            id: 'rec-kale-1',
            name: 'Cillian Murphy',
            wikiQueryName: 'Cillian Murphy',
            rank: 1,
            matchPercentage: 96,
            rubric: {
              actingStyleMatch: 25,
              ageAppearance: 14,
              genreExperience: 15,
              emotionalRange: 15,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 4,
            },
            reasoning: 'Cillian Murphy\'s piercing gaze, Oscar-winning gravitas (Oppenheimer, Inception, Peaky Blinders), and mastery of internal torment make him the ultimate cyberpunk lead.',
            strengths: ['Unmatched ocular intensity and emotional containment', 'Global Oscar prestige and marquee drawing power', 'Experience with high-concept sci-fi'],
            potentialChallenge: 'Requires clear stunt coordination to balance heavy action set-pieces.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Oppenheimer', 'Peaky Blinders', 'Inception', '28 Days Later'],
          },
          {
            id: 'rec-kale-2',
            name: 'Oscar Isaac',
            wikiQueryName: 'Oscar Isaac',
            rank: 2,
            matchPercentage: 93,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 15,
              genreExperience: 15,
              emotionalRange: 14,
              previousRoleSimilarity: 13,
              screenPresence: 8,
              marketFit: 4,
            },
            reasoning: 'Oscar Isaac brings magnetic grit, physical stamina, and immense emotional versatility (Dune, Ex Machina, Moon Knight, Inside Llewyn Davis).',
            strengths: ['Phenomenal physical action execution', 'Deep intelligence and genre fluency', 'High charisma'],
            potentialChallenge: 'Busy franchise schedule.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Dune', 'Ex Machina', 'Moon Knight', 'Inside Llewyn Davis'],
          },
          {
            id: 'rec-kale-3',
            name: 'Ryan Gosling',
            wikiQueryName: 'Ryan Gosling',
            rank: 3,
            matchPercentage: 91,
            rubric: {
              actingStyleMatch: 23,
              ageAppearance: 15,
              genreExperience: 15,
              emotionalRange: 13,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 2,
            },
            reasoning: 'Having defined modern cyberpunk in Blade Runner 2049 and Drive, Gosling\'s quiet stoicism is custom-built for Kale\'s synthetic isolation.',
            strengths: ['Iconic cyberpunk aesthetic and stoic charisma', 'Massive worldwide star power', 'Superb action choreography'],
            potentialChallenge: 'Close thematic similarity to Officer K in Blade Runner 2049 requires distinct character choices.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Blade Runner 2049', 'Drive', 'First Man', 'The Gray Man'],
          },
          {
            id: 'rec-kale-4',
            name: 'Steven Yeun',
            wikiQueryName: 'Steven Yeun',
            rank: 4,
            matchPercentage: 88,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 14,
              genreExperience: 13,
              emotionalRange: 15,
              previousRoleSimilarity: 11,
              screenPresence: 7,
              marketFit: 4,
            },
            reasoning: 'Steven Yeun delivers explosive, layered human emotion and relatable vulnerability (Beef, Minari, Nope, Burning).',
            strengths: ['Fresh, unexpected casting choice with phenomenal emotional range', 'Emmy and Oscar nominated pedigree', 'High audience empathy'],
            potentialChallenge: 'Less traditional action blockbuster history.',
            industry: 'Hollywood',
            experienceLevel: 'Established Lead',
            budgetImpact: 'Medium',
            notablePastRoles: ['Beef', 'Nope', 'Minari', 'Burning'],
          },
          {
            id: 'rec-kale-5',
            name: 'Keanu Reeves',
            wikiQueryName: 'Keanu Reeves',
            rank: 5,
            matchPercentage: 85,
            rubric: {
              actingStyleMatch: 20,
              ageAppearance: 12,
              genreExperience: 15,
              emotionalRange: 12,
              previousRoleSimilarity: 15,
              screenPresence: 10,
              marketFit: 1,
            },
            reasoning: 'The undisputed legend of The Matrix and Cyberpunk 2077 brings instant mythic scale and unrivaled action credibility.',
            strengths: ['Living god of cyberpunk cinema', 'Unstoppable international box office loyalty', 'Elite gun-fu / stunt mastery'],
            potentialChallenge: 'Age profile skews older than the core 38-year-old draft.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['The Matrix', 'John Wick', 'Cyberpunk 2077', 'Constantine'],
          }
        ]
      },
      {
        id: 'char-maya',
        name: 'Dr. Maya Lin / Unit 7',
        role: 'Deuteragonist',
        ageRange: '26 - 34',
        gender: 'Female',
        archetype: 'Synthetic Anomaly / The Living Key',
        personalityTraits: ['Fierce', 'Fragile', 'Electrifying', 'Searching', 'Deadly'],
        motivation: 'To discover if her childhood memories are real or manufactured by the corporation that cloned her.',
        castingRequirements: 'Ethereal yet combat-capable, extraordinary emotional nuance, commanding presence.',
        characterJourney: 'Evolves from a fugitive product into an autonomous being who chooses her own destiny.',
        sceneCountEstimated: 58,
        emotionalArcIntensity: 'High',
        recommendations: [
          {
            id: 'rec-maya-1',
            name: 'Florence Pugh',
            wikiQueryName: 'Florence Pugh',
            rank: 1,
            matchPercentage: 97,
            rubric: {
              actingStyleMatch: 25,
              ageAppearance: 15,
              genreExperience: 14,
              emotionalRange: 15,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 5,
            },
            reasoning: 'Florence Pugh is one of the most electric performers of her generation (Oppenheimer, Dune: Part Two, Midsommar, Black Widow). She infuses every frame with volcanic emotional truth and physical grit.',
            strengths: ['Unmatched raw emotional power and screen electricity', 'Massive global youth appeal', 'Superb physical and dramatic range'],
            potentialChallenge: 'Extremely tight shooting schedule across Marvel and prestige features.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Dune: Part Two', 'Oppenheimer', 'Midsommar', 'Black Widow', 'Little Women'],
          },
          {
            id: 'rec-maya-2',
            name: 'Ana de Armas',
            wikiQueryName: 'Ana de Armas',
            rank: 2,
            matchPercentage: 94,
            rubric: {
              actingStyleMatch: 23,
              ageAppearance: 15,
              genreExperience: 15,
              emotionalRange: 14,
              previousRoleSimilarity: 14,
              screenPresence: 9,
              marketFit: 4,
            },
            reasoning: 'Ana de Armas combined heartbreak and synthetic poignancy as Joi in Blade Runner 2049, paired with jaw-dropping action chops in No Time To Die and Ballerina.',
            strengths: ['Established iconic cyberpunk resonance', 'Exceptional action training', 'Magnetic vulnerability'],
            potentialChallenge: 'Risk of direct comparison to previous cyberpunk roles.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Blade Runner 2049', 'Knives Out', 'No Time to Die', 'Blonde', 'Ballerina'],
          },
          {
            id: 'rec-maya-3',
            name: 'Zendaya',
            wikiQueryName: 'Zendaya',
            rank: 3,
            matchPercentage: 90,
            rubric: {
              actingStyleMatch: 23,
              ageAppearance: 15,
              genreExperience: 14,
              emotionalRange: 14,
              previousRoleSimilarity: 12,
              screenPresence: 9,
              marketFit: 3,
            },
            reasoning: 'Zendaya brings unparalleled modern fashion aesthetics, emotional mystery, and immense cultural star power (Dune, Euphoria, Challengers).',
            strengths: ['Unsurpassed cultural icon status among Gen Z/Millennials', 'Captivating, subtle gaze and posture', 'Tremendous box office equity'],
            potentialChallenge: 'A-list top-tier salary requirements.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Dune', 'Euphoria', 'Challengers', 'Spider-Man'],
          },
          {
            id: 'rec-maya-4',
            name: 'Sonoya Mizuno',
            wikiQueryName: 'Sonoya Mizuno',
            rank: 4,
            matchPercentage: 86,
            rubric: {
              actingStyleMatch: 24,
              ageAppearance: 14,
              genreExperience: 15,
              emotionalRange: 12,
              previousRoleSimilarity: 13,
              screenPresence: 6,
              marketFit: 2,
            },
            reasoning: 'Sonoya Mizuno\'s iconic turns in Ex Machina, Devs, and House of the Dragon give her a legendary pedigree in high-concept transhumanist drama.',
            strengths: ['Physical precision and dance background', 'Deep sci-fi cult following', 'Budget-efficient casting'],
            potentialChallenge: 'Lower commercial marquee name recognition.',
            industry: 'Hollywood',
            experienceLevel: 'Mid-Career',
            budgetImpact: 'Medium',
            notablePastRoles: ['Ex Machina', 'Devs', 'House of the Dragon', 'Maniac'],
          },
          {
            id: 'rec-maya-5',
            name: 'Anya Taylor-Joy',
            wikiQueryName: 'Anya Taylor-Joy',
            rank: 5,
            matchPercentage: 84,
            rubric: {
              actingStyleMatch: 22,
              ageAppearance: 14,
              genreExperience: 13,
              emotionalRange: 14,
              previousRoleSimilarity: 12,
              screenPresence: 8,
              marketFit: 1,
            },
            reasoning: 'Anya Taylor-Joy brings otherworldly eyes, gothic intensity, and relentless stamina (Furiosa, The Queen\'s Gambit, The Northman).',
            strengths: ['Unique, striking facial geometry suited for sci-fi', 'Tremendous screen charisma', 'Deep dedication to immersive roles'],
            potentialChallenge: 'High scheduling constraints.',
            industry: 'Hollywood',
            experienceLevel: 'Superstar / A-List',
            budgetImpact: 'Premium',
            notablePastRoles: ['Furiosa: A Mad Max Saga', 'The Queen\'s Gambit', 'Dune: Part Two', 'The Menu'],
          }
        ]
      }
    ],
    relationships: [
      {
        id: 'rel-n1',
        fromCharacterId: 'char-kale',
        toCharacterId: 'char-maya',
        relationType: 'Love Interest / Romance',
        emotionalTension: 'High',
        arcSummary: 'A tragic romance entangled with existential dread—Kale cannot determine if his feelings for Maya are authentic or implanted code designed to control him.',
        keyTurningPoint: 'Scene 67 at the neon rainfall sky-bridge when Maya uploads her raw sensory stream into Kale\'s neural link, proving her consciousness is real.'
      }
    ],
    budget: {
      totalEstimatedBudgetUsd: 95000000,
      scaleBadge: 'High',
      complexityParagraph: 'A tier-1 Hollywood sci-fi blockbuster budget requiring state-of-the-art virtual production LED volume stages (StageCraft), extensive motion-capture sequences, heavy stunt rigging, and top-tier talent packages.',
      items: [
        {
          category: 'CGI, VFX & Virtual Production Volume',
          percentage: 34,
          estimatedAmountUsd: 32300000,
          scaleLevel: 'High',
          description: 'Industrial Light & Magic (ILM) StageCraft volume stages, holographic shaders, photorealistic synthetic cityscapes.',
          costDrivers: ['LED volume stage rental & Unreal Engine 5 asset pipeline', 'Over 2,100 photorealistic VFX shots']
        },
        {
          category: 'Cast & Key Creatives',
          percentage: 26,
          estimatedAmountUsd: 24700000,
          scaleLevel: 'High',
          description: 'A-list lead ensemble, visionary director, stunt doubles, and vocal performers.',
          costDrivers: ['Top-tier lead compensation packages', 'Specialized martial arts & wire stunt coordinators']
        },
        {
          category: 'Physical Production & Stage Construction',
          percentage: 16,
          estimatedAmountUsd: 15200000,
          scaleLevel: 'High',
          description: 'Pinewood Studios London / Leavesden stages, cybernetic armor fabrication, custom futuristic vehicles.',
          costDrivers: ['Multi-level modular city set builds', 'Bespoke mechanical prosthetics & lighting props']
        },
        {
          category: 'Cinematography & Special Camera Rigs',
          percentage: 10,
          estimatedAmountUsd: 9500000,
          scaleLevel: 'Medium',
          description: 'Arri Alexa 65 Large Format IMAX cameras, customized Master Anamorphic lenses, technocrane motion control.',
          costDrivers: ['IMAX certified camera packages', 'High-speed motion control rigs for bullet-time memory extractions']
        },
        {
          category: 'Post-Production Sound & Orchestral Synth Score',
          percentage: 6,
          estimatedAmountUsd: 5700000,
          scaleLevel: 'Medium',
          description: 'Hans Zimmer / Ludwig Göransson hybrid analog-modular synth and 90-piece orchestra score at Abbey Road.',
          costDrivers: ['Abbey Road live symphonic recording', 'Dolby Atmos IMAX theatrical mix']
        },
        {
          category: 'Worldwide Marketing & Trailer Tour',
          percentage: 8,
          estimatedAmountUsd: 7600000,
          scaleLevel: 'Medium',
          description: 'San Diego Comic-Con activation, interactive web ARG, global premiere tour.',
          costDrivers: ['Interactive holography promotional pop-ups in Tokyo, NY, London', 'Super Bowl trailer spot']
        }
      ]
    },
    locations: [
      {
        id: 'loc-n1',
        name: 'Neo-Seattle Skybridge & Rooftop Canyon',
        type: 'Special VFX / Studio',
        setting: 'Suspended carbon fiber bridge 1,000 feet above the city, perpetual acidic neon drizzle',
        sceneCount: 22,
        estimatedDays: 14,
        permitComplexity: 'Permit Intensive / Restricted',
        notes: 'Filmed on 360-degree LED Volume StageCraft stage in London.',
        realWorldAlternatives: ['Vancouver skyscraper rooftops (augmented)', 'Pinewood soundstages']
      },
      {
        id: 'loc-n2',
        name: 'Aethelgard Corp Neural Server Core',
        type: 'Indoor',
        setting: 'Sub-zero subterranean cryogenic data vault with submerged glowing coolant pipes',
        sceneCount: 14,
        estimatedDays: 8,
        permitComplexity: 'Moderate',
        notes: 'Constructed as practical set with refrigerated ambient atmosphere for real actor breath vapor.',
        realWorldAlternatives: ['Decommissioned nuclear cooling tower interior', 'Industrial data center']
      }
    ],
    timeline: {
      totalWeeks: 56,
      complexityScore: 92,
      complexityBadge: 'Highly Complex',
      phases: [
        {
          phase: 'Pre-Production',
          durationWeeks: 18,
          keyMilestones: ['Unreal Engine 5 virtual art department pre-vis lock', 'Cast wire stunt & cybernetic fight rehearsals', 'Volume stage calibration'],
          criticalRisks: ['Virtual asset optimization turnaround in UE5']
        },
        {
          phase: 'Principal Photography',
          durationWeeks: 16,
          keyMilestones: ['Volume StageCraft schedule (8 weeks)', 'Practical stunt set schedule (6 weeks)', 'Tokyo second-unit plates (2 weeks)'],
          criticalRisks: ['Complex wirework stunt safety protocols']
        },
        {
          phase: 'Post-Production',
          durationWeeks: 20,
          keyMilestones: ['2,100 VFX shot pipeline delivery across ILM & Wētā', 'Abbey Road synth-orchestral score recording', 'IMAX 70mm & digital grade lock'],
          criticalRisks: ['VFX shot crunch in final 6 weeks before theatrical deadline']
        },
        {
          phase: 'Festival & Distribution',
          durationWeeks: 2,
          keyMilestones: ['Venice / TIFF special screening', 'Worldwide IMAX theatrical release in 4,800 screens'],
          criticalRisks: ['Global summer blockbuster competitive calendar']
        }
      ],
      highCostFlags: [
        {
          sceneDescription: 'Scene 14: Skybridge gunfight with shattering holographic koi and freefall zip-line jump',
          reason: 'VFX Heavy',
          costImpact: 'Critical',
          mitigationSuggestion: 'Perform pre-vis stunt mapping on Volume stage and capture practical wire descent in single continuous gimbal move.'
        },
        {
          sceneDescription: 'Scene 92: Shinjuku neon market car chase with 1,000 synthetic android extras',
          reason: 'Crowd Sequence',
          costImpact: 'High',
          mitigationSuggestion: 'Combine 80 choreographed stunt performers with Houdini crowd simulations.'
        }
      ]
    },
    aiInsights: [
      'Neon Protocol represents a high-risk, ultra-high-reward tier-1 sci-fi property with extraordinary visual franchise potential.',
      'Using LED Volume StageCraft will reduce real-world weather delays by an estimated 3 weeks compared to physical exterior shoots.',
      'The emotional resonance relies heavily on the chemistry between Kale and Maya; cast attachment must be secured simultaneously.',
      'Sound design with modular synthesis will be critical to establishing the world\'s auditory identity alongside the visual neon palette.'
    ]
  }
];
