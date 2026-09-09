import React from 'react';

export const FilmSprocketStrip: React.FC = () => {
  return (
    <>
      <div className="sprocket-strip sprocket-left hidden lg:block" aria-hidden="true" />
      <div className="sprocket-strip sprocket-right hidden lg:block" aria-hidden="true" />
    </>
  );
};
