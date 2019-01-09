import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './styles'

class ModalTwo extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.container}
          onPress={this.dismissAll}
        >
          <Text style={styles.text}>
            Reset Two Modals
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  dismissAll = () =>
    Navigation.dismissAllModals()
}

export default ModalTwo
