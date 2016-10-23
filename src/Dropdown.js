//@flow
import React from 'react';
import {TouchableOpacity, View, Text, Modal, ScrollView, TouchableWithoutFeedback} from 'react-native';
import styles from './Dropdown-style';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Option = {
  value: string | number | Object | Function;
  label: string;
}

type Props = {
  onSelect: Function;
  label?: string;
  onShow: Function;
  isShowingOptions: boolean;
  selectedOption: Option;
  options: Array<Option>;
  animationType: 'none' | 'fade' | 'slide';
};

export default function Dropdown(props: Props) {
  return (
    <View style={styles.container}>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={() => props.onShow(true)}>
        <View style={styles.option}>
          <Text style={styles.defaultOptionText}>{props.selectedOption.label}</Text>
          <Icon name="expand-more" style={styles.icon} />
        </View>
      </TouchableOpacity>
      {props.isShowingOptions ? <OptionsModal {...props} /> : null}
    </View>
  );
}

export function OptionsModal(props: Props) {
  return (
    <Modal
      animationType={props.animationType}
      visible={props.isShowingOptions}
      onRequestClose={() => props.onShow(false)}
      transparent={true}
      supportedOrientations={['portrait']}
    >
      <TouchableWithoutFeedback onPress={() => props.onShow(false)}>
        <View style={styles.backdrop}>
          <ScrollView style={styles.scrollViewOption}>
            {props.options.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.optionItem} onPress={() => props.onSelect(item, false)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
