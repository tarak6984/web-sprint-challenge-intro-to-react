import React, { useState } from 'react'

function Character({ character }) { // ❗ Add the props
  const { name, birth_year, homeworld } = character
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeWorld, setShowHomeWorld] = useState(false);

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeWorld(!showHomeWorld)
  }

  return (
    <div className='character-card' onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{name}</h3>
      <p>Birth Year: {birth_year}</p>
      
      {showHomeWorld && (
        <p className='character-planet'>HomeWorld: {homeworld.name}</p>
      )}
    </div>
  )
}
export default Character
