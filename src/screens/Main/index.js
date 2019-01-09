import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Navigation } from 'react-native-navigation'

import navigation from 'src/navigation'

import styles from './styles'

class Main extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.container}
          onPress={this.showModals}
        >
          <Text style={styles.text}>
            Show Two Modal Subsequently
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  showModals = () =>
    Navigation.showModal(navigation.modalOne())
}

export default Main
