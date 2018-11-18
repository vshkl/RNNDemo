import { Navigation } from 'react-native-navigation'

import screens from 'src/screens'

const components = [
  { name: 'screen.Four', component: () => screens.Four },
  { name: 'screen.One', component: () => screens.One },
  { name: 'screen.SideMenu', component: () => screens.SideMenu },
  { name: 'screen.Three', component: () => screens.Three },
  { name: 'screen.Two', component: () => screens.Two },
]

const registerScreens = () => {
  components.forEach(component => Navigation.registerComponent(component.name, component.component))
}

export default {
  registerScreens,
}
