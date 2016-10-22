//@flow
const {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dropdown, {OptionsModal} from '../Dropdown';

describe('Dropdown tests', () => {
  let onSelect = createSpy();
  let onShow = createSpy();
  let dropProps = {
    defaultValue: 'Jakarta',
    options: ['Bandung', 'Surabaya', 'Palembang'],
    selectedOption: 'Bandung',
    isShowingOptions: true,
    onSelect,
    onShow,
    label: 'Kota Anda',
    animationType: 'none',
  };

  it('should renders Dropdown', () => {
    let wrapper = shallow(<Dropdown {...dropProps} />);
    expect(wrapper.find(Text).length).toBe(2);
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Icon).length).toBe(1);

    let dropdownWrapper = wrapper.find(OptionsModal).shallow().find(ScrollView).children();
    expect(dropdownWrapper.length).toBe(3);
    expect(dropdownWrapper.at(0).props().children.props.children).toBe('Bandung');
    expect(dropdownWrapper.at(1).props().children.props.children).toBe('Surabaya');
    expect(dropdownWrapper.at(2).props().children.props.children).toBe('Palembang');

    expect(onShow).toNotHaveBeenCalled();
    wrapper.find(TouchableOpacity).first().simulate('press');
    expect(onShow).toHaveBeenCalled();
    expect(onShow.calls[0].arguments[0]).toBe(true);

    expect(onSelect).toNotHaveBeenCalled();
    dropdownWrapper.at(0).simulate('press');
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect.calls[0].arguments[0]).toBe('Bandung');
    expect(onSelect.calls[0].arguments[1]).toBe(false);

    dropProps = {
      defaultValue: 'Jakarta',
      options: ['Bandung', 'Surabaya', 'Palembang'],
      selectedOption: 'Surabaya',
      isShowingOptions: true,
      onSelect,
      onShow,
      animationType: 'none',
    };
    wrapper = shallow(<Dropdown {...dropProps} />);
    expect(wrapper.find(Text).at(0).props().children).toBe('Surabaya');
  });
});
