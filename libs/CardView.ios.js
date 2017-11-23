import React, { Component } from 'react';
import { View } from 'react-native';

export default class CardView extends Component {
  render() {
    const { cardElevation, cornerRadius = 0 } = this.props;
    if(cardElevation > 0) {
      return(
        <View style={[{
          shadowOffset: {
            width: 0,
            height: cardElevation
          },
          shadowRadius: cardElevation,
          shadowColor: '#00000033',
          borderRadius: cornerRadius,
          shadowOpacity: 5,
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    } else {
      return(
        <View style={[{
          borderRadius: cornerRadius,
        }, this.props.style]}>
          {this.props.children}
        </View>
      );
    }

  }
}
