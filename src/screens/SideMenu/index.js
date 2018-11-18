import React, { PureComponent } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

import navigation from 'src/navigation'

import styles from './styles'

class SideMenu extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.containerResetButton}
          onPress={this.resetRoot}
        >
          <Text style={styles.textResetButton}>
            Reset Root
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  resetRoot = () =>
    Navigation.setRoot(navigation.main())
}

export default SideMenu
