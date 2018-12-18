import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { connect } from "@tarojs/redux-h5";
import './index.scss';

import { add, minus, asyncAdd } from './../../actions/counter';

export default @connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return <View className="index">
        <AtButton onClick={this.props.add}>+</AtButton>
        <AtButton onClick={this.props.dec}>-</AtButton>
        <AtButton onClick={this.props.asyncAdd}>async</AtButton>
        <View>{this.props.counter.num}</View>
      </View>;
  }

  componentDidMount() {}

  componentDidShow() {}

}