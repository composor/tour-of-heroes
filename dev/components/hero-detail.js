import {h, Component} from 'composi'

export default function HeroDetail({hero, onHeroNameChange, resetName, saveName}) {
  return (
    <div id='hero-detail'>
      <h2>{hero.name} details!</h2>
      <div><label>id:</label> {hero.id}</div>
      <div>
        <label for='update-name'>name: </label>
        <input id='update-name' placeholder={hero.name} oninput={(e) => onHeroNameChange(e)} />
      </div>
      <p class='hero-detail--buttons'>
        <button onclick={resetName}>Reset</button>
        <button onclick={saveName}>Save</button>
      </p>
    </div>
  )
}
