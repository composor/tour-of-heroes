import {h, Component} from 'composi'

export default new Component({
  container: 'section',
  state: true,
  render: (data) => {
    return (
      <nav>
        <ul>
          <li><a href="#/dashboard">Dashboard</a></li>
          <li><a href="#/heroes">Heroes</a></li>
        </ul>
      </nav>
    )
  }
})