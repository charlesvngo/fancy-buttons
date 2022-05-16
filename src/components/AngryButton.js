import React from 'react';

function AngryButton() {
  return (
    <button className="AngryButton">
      {/* When the trheshold is not reached */}
      <span>Don't click me too much!</span>
      {/* When the threshold is reached*/}
      <span>Rawr!</span>
    </button>
  )
}

export default AngryButton;