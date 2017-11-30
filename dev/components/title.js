import {h, Component} from 'composi'

export default new Component ({
  container: 'header',
  state: 'Tour of Heroes',
  render: (message) => <h1><a href="/">{message}</a></h1>
})
