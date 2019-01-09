import { Navigation } from 'react-native-navigation'

import screens from 'src/screens'

const components = [
  { name: 'screen.Main', component: () => screens.Main },
  { name: 'screen.ModalOne', component: () => screens.ModalOne },
  { name: 'screen.ModalTwo', component: () => screens.ModalTwo },
]

const registerScreens = () => {
  components.forEach(component => Navigation.registerComponent(component.name, component.component))
}

export default {
  registerScreens,
}
