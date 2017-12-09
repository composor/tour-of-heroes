import {Routie} from 'webix-routie'

export default function(app) {
  routie({
    '/': function() {
      app.setState({activeComponent: 'dashboard'})
    },

    '/dashboard': function() {
      app.setState({activeComponent: 'dashboard'})
    },

    '/heroes': function() {
      app.setState({activeComponent: 'heroes'})
    },

    '/detail/:id': function(id) {
      const state = app.state
      const position = state.heroes.findIndex(person => person.id === id)
      const hero = state.heroes[position]
      hero.originalName = hero.name
      app.setState({activeComponent: 'detail', selectedHero: hero})
    }
  })
}