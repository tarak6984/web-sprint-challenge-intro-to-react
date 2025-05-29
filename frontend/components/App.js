import axios from 'axios'
import Character from './Character'
import React, { useState, useEffect } from 'react'
const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    Promise.all([
      axios.get(urlPeople),
      axios.get(urlPlanets)
    ])
    .then(([peopleRes, planetsRes]) => {
      const people = peopleRes.data
      const planets = planetsRes.data

      // Merge each person with their planet data
      const charactersWithHomeWorld = people.map(person => {
        const homeworld = planets.find(planet => planet.id === person.homeworld)
        return {
          ...person,
          homeworld: homeworld // Store the entire planet object
        }
      })
      setCharacters(charactersWithHomeWorld)
    })
    .catch(err => {
      console.error("Error fetching data: ", err)
    })
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {
        /* ❗ Map over the data in state, rendering a Character at each iteration */
        characters.map(character => (
          <Character key={character.id} character={character} />
        ))
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
