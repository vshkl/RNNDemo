import { Navigation } from 'react-native-navigation'

import config from 'src/config/index'
import navigation from 'src/navigation/index'

const init = () => {
  config.navigation.registerScreens()
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(navigation.main())
  })
}

export default {
  init,
}
