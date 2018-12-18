import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.scss'

import { add, minus, asyncAdd } from './../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch => ({
  add() {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
})))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <AtButton onClick={this.props.add}>+</AtButton>
        <AtButton onClick={this.props.dec}>-</AtButton>
        <AtButton onClick={this.props.asyncAdd}>async</AtButton>
        <View>{this.props.counter.num}</View>
      </View>
    )
  }
}

