# react-native-modal-select-option

react-native dropdown select option with modal

## install package from [npm](https://www.npmjs.com/)

`$ npm install --save react-native-modal-select-option`

## link material icons use [rnpm](https://github.com/rnpm/rnpm)

`$ rnpm link react-native-vector-icons`

## example of usage

```

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Dropdown from 'react-native-modal-select-option';

const propsDropdown = {
  defaultValue: 'Kebumen',
  options: ['Bandung', 'Surabaya', 'Palembang', 'Jakarta'],
  label: 'Your City',
  animationType: 'none',
};

type State = {
  selectedOption: string,
  isShowingOptions: boolean;
};

export default class DropdownDemo extends Component {
  state: State;
  constructor() {
    super(...arguments);
    this.state = {
      selectedOption: propsDropdown.defaultValue || 'Pilih Kota',
      isShowingOptions: false,
    };
  }

  render() {
    let {isShowingOptions, selectedOption} = this.state;
    return (
      <View style={{flex: 1, padding: 10, paddingTop: 50}}>
        <Dropdown {...propsDropdown}
          onSelect={this._onSelect.bind(this)}
          onShow={this._onShow.bind(this)}
          isShowingOptions={isShowingOptions}
          selectedOption={selectedOption}
        />
      </View>
    );
  }
  _onShow(value: boolean): void {
    this.setState({
      isShowingOptions: value,
    });
  }
  _onSelect(item: string, isShow: boolean): void {
    this.setState({
      isShowingOptions: isShow,
      selectedOption: item,
    });
  }
}

AppRegistry.registerComponent('SandboxRn', () => DropdownDemo);


```
