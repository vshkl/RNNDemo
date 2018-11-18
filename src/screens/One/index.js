import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

import SwipableItem from 'src/components/SwipableItem'

import styles from './styles'

class One extends Component {
  state = {
    isSideMenuEnabled: true,
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={this.onToggleSideMenuPress}
        >
          <Text>
            {this.toggleButtonText()}
          </Text>
        </TouchableOpacity>
        <SwipableItem/>
      </View>
    )
  }

  onToggleSideMenuPress = () =>
    this.setState(
      (state) => ({ isSideMenuEnabled: !state.isSideMenuEnabled }),
      () => this.toggleSideMenuEnabled(this.state.isSideMenuEnabled)
    )

  toggleSideMenuEnabled = enabled =>
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: enabled,
        },
      },
    })

  toggleButtonText = () =>
    this.state.isSideMenuEnabled
      ? 'Disable Side Menu'
      : 'Enable Side Menu'
}

export default One
