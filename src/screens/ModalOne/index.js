import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

import navigation from 'src/navigation'

class ModalOne extends PureComponent {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  componentDidAppear() {
    Navigation.showModal(navigation.modalTwo())
  }

  render() {
    return (
      <View>
        <Text>
          Modal One
        </Text>
      </View>
    )
  }
}

export default ModalOne
