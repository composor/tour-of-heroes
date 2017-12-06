import {h, render, Component} from 'composi'
import HeroDashboard from './hero-dashboard'
import HeroList from './hero-list'
import HeroDetail from './hero-detail'
import setupRoutes from '../utils/routes'
import fetchHeroes from '../utils/fetch-heroes'

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.container = 'section'
    this.state = {
      activeComponent: 'dashboard',
      heroes: [],
      selectedHero: '',
      searchResults: []
    }
  }

  render(state) {

    return (
      <div class="app-root">
        {
          state.activeComponent === 'dashboard' && 
            <HeroDashboard 
              heroes={this.state.heroes}
              search={this.search.bind(this)}
              searchResults={this.state.searchResults} 
              blurSearchInput={this.blurSearchInput.bind(this)} />
        }
        {
          state.activeComponent === 'heroes' && 
            <HeroList 
              heroes={this.state.heroes} 
              deleteItem={this.deleteItem.bind(this)} 
              addHero={this.addHero.bind(this)} />
        }
        {
          state.activeComponent === 'detail' && 
            <HeroDetail 
              hero={this.state.selectedHero} 
              deleteItem={this.deleteItem}
              onHeroNameChange={this.onHeroNameChange.bind(this)} 
              resetName={this.resetName.bind(this)} 
              saveName={this.saveName.bind(this)} />
        }
      </div>
    )
  }

  componentWasCreated() {
    // Fetch data for heroes:
    fetchHeroes()
      .then(heroes => {
        this.setState({heroes})
      })
    // Setup routes:
    setupRoutes(this)
  }

  deleteItem(e) {
    const id = e.target.dataset.id
    const heroes = this.state.heroes
    const position = heroes.findIndex(hero => id == hero.id)
    heroes.splice(position, 1)
    this.setState({heroes})
  }

  onHeroNameChange(e) {
    const value = e.target.value
    if (value) {
      const selectedHero = this.state.selectedHero
      selectedHero.name = value
      this.setState({selectedHero})
    }
  }

  resetName(e) {
    const selectedHero = this.state.selectedHero
    selectedHero.name = selectedHero.originalName
    this.setState({selectedHero})
  }

  saveName(e) {
    window.location.hash = '#/heroes'
  }

  addHero(e) {
    const input = e.target.parentNode.querySelector('#add-hero')
    const value = input.value
    if (value) {
      const lastId = this.state.heroes[this.state.heroes.length -1].id
      const newHero = {id: String(parseInt(lastId) + 1), name: value}
      const heroes = this.state.heroes
      heroes.push(newHero)
      this.setState({heroes})
      input.value = ''
    }
  }

  search(e) {
    const input = e.target
    const value = input.value
    const heroes = this.state.heroes
    const searchResults = heroes.filter(hero => {
      const name = hero.name.toLowerCase()
      return name.match(value.toLowerCase())
    })
    this.setState({searchResults: searchResults})
  }

  blurSearchInput(e) {
    const searchResults = this.state.searchResults
    setTimeout(() => {
      this.setState({searchResults: []})
    }, 250)
  }
}