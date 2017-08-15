import Home from '../home/home.component.jsx'
import About from '../about/about.component.jsx'

const Routes = [
  {
    'path': '/',
    'component': Home,
    'exact': true
  },
  {
    'path': '/about',
    'component': About
  },
  {
    'path': '/market',
    'component': null
  }
]

export default Routes
