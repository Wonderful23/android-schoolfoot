/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *Copyright © 2017年 张宇. All rights reserved.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Echarts, echarts} from 'react-native-secharts';

export default class Test extends Component {
  render() {
    option = {
      tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
          {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: 50, name: '前百分比'}]
          }
      ]
  };
    option3 = {
      title: {
          text: ''
      },
      tooltip: {},
      legend: {
          data: []
      },
      radar: {
          // shape: 'circle',
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
              }
          },
          indicator: [
              { name: '学术', max: 6500},
              { name: '体育', max: 16000},
              { name: '艺术', max: 30000},
              { name: '志愿活动', max: 38000},
              { name: '生活', max: 52000},
              { name: '实践', max: 25000}
          ]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
              {
                  value: [5000, 14000, 28000, 31000, 42000, 21000],
                  name: '实际开销'
              }
          ]
      }]
  };
    return (
      <View style={{alignItems:'center'}}>
        
        <Echarts option={option} height={400}width={400} />
        <Text style={styles.title}>学生多维评定</Text>
        <Echarts option={option3} height={400}width={400} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    textAlign:'center'
  },
  demo:{
    textAlign:'center',
    fontSize:20
  }
});
