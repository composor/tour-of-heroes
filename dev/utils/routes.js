import {Routie} from 'webix-routie'
// import fetchHeroes from './fetch-heroes'

export default function(self) {
  routie({
    '': function() {
      self.setState({activeComponent: 'dashboard'})
    },

    '/dashboard': function() {
      const state = self.state
      self.setState({activeComponent: 'dashboard'})
    },

    '/heroes': function() {
      const state = self.state
      self.setState({activeComponent: 'heroes'})
    },

    '/detail/:id': function(id) {
      const state = self.state
      const position = state.heroes.findIndex(person => person.id === id)
      const hero = state.heroes[position]
      hero.originalName = hero.name
      self.setState({activeComponent: 'detail', selectedHero: hero})
    }
  })
}