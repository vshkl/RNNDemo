import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Swipeable from 'react-native-swipeable-row'

import styles from './styles'

class SwipableItem extends PureComponent {
  render() {
    return (
      <Swipeable
        style={styles.container}
        rightButtons={this.renderDummyRightButtons()}
        rightActionActivationDistance={10}
      >
        <View style={styles.containerButton}>
          <Text>
            {`<<<<< Swipe me if you can! <<<<<`}
          </Text>
        </View>
      </Swipeable>
    )
  }

  renderDummyRightButtons = () => ([
    <View/>,
    <View/>,
  ])
}

export default SwipableItem
