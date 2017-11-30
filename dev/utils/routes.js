import {Routie} from 'webix-routie'
import fetchHeroes from './fetch-heroes'

export default function(self) {
  routie({
    '': function() {
      if (!self.state.heroes.length) {
        fetchHeroes()
          .then(heroes => {
            self.setState({heroes, activeComponent: 'dashboard'})
          })
      }
    },
    '/dashboard': function() {
      const state = self.state
      if (!state.heroes.length) {
        fetchHeroes()
          .then(heroes => {
            self.setState({heroes, activeComponent: 'dashboard'})
          })
      } else {
        self.setState({activeComponent: 'dashboard'})
      }
    },
    '/heroes': function() {
      const state = self.state
      if (!state.heroes.length) {
        fetchHeroes()
          .then(heroes => {
            self.setState({heroes, activeComponent: 'heroes'})
          })
      } else {
        self.setState({activeComponent: 'heroes'})
      }
    },
    '/detail/:id': function(id) {
      const state = self.state
      if (!state.heroes.length) {
        fetchHeroes()
          .then(heroes => {
            const position = heroes.findIndex(person => person.id == id)
            const hero = heroes[position]
            hero.originalName = hero.name
            self.setState({heroes, activeComponent: 'detail', selectedHero: hero})
          })
      } else {
        const position = state.heroes.findIndex(person => person.id === id)
        const hero = state.heroes[position]
        hero.originalName = hero.name
        self.setState({activeComponent: 'detail', selectedHero: hero})
      }
    }
  })
}