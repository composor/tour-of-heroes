import {h, Component} from 'composi'

export default function HeroList({heroes, deleteItem, addHero}) {

  return (
    <div>
      <p class='form--add-hero'>
        <label htmlFor="add-hero">Hero name: </label>
        <input id='add-hero' type="text"/>
        <button onclick={addHero}>Add</button>
      </p>
      <ul class="heroes">
        {
          heroes.map(hero => (
            <li>
              <a href={`#/detail/${hero.id}`}>
                <span class="badge">{hero.id}</span> 
                <span class='hero-link'>{hero.name}</span>
              </a>
              <button data-id={hero.id} class="delete" title="delete hero"
              onclick={(e) => deleteItem(e)}>x</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}