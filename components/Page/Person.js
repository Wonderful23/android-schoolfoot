import React, {Component} from 'react'
import { Text,Icon, Divider } from 'react-native-elements'
import {ScrollView,View,StyleSheet,Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import {Echarts, echarts} from 'react-native-secharts';
import {store} from '../redux/store'
import PersonApis from '../apis/PersonApis'

/**
 * @description Home
 * @constructor
 */
const id = "18039859163"
const userName = "王志远"
option233 = {
  
}
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      grade:{},
      dimensions:{},
      totalScore:'',
      yes:'',
    }
  }
  componentWillMount(){
    var id = store.getState().rootReducer.person.id;
    this.getScores(id)
  }
  componentWillReceiveProps(){
    var id = store.getState().rootReducer.person.id;
    this.getScores(id);
    var yes = this.props.yes+"123";
    this.setState({yes:yes})
  }
  getScores(id){
    const get = PersonApis.score(id);
    get(store.dispatch).then(() => {
      const data = store.getState().rootReducer.scores
      const option3 = {
        title: {
          text: ''
      },
      tooltip: {},
      legend: {
          left:'right',
          data: ['分数', '百分比']
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
              { name: '体育', max: 20},
              { name: '艺术', max: 20},
              { name: '学术', max: 20},
              { name: '工程实践', max: 20},
              { name: '志愿活动', max: 20},
              { name: '社会实践', max: 20}
          ]
      },
      series: [{
          name: '分数 vs 百分比',
          type: 'radar',
          label:{position:'top'},
          // areaStyle: {normal: {}},
          data: [
              {
                  value: data.scores,
                  name: '分数'
              },
              {
                  value: [data.scores[0]+1,data.scores[1]+3,data.scores[2]+5,data.scores[3]+1,data.scores[4]+3,data.scores[5]+4],
                  name: '百分比'
              }
          ]
      }]
      };
      this.setState({
        totalScore:data.total,
        dimensions:option3,
        percents:data.totalPercent
      });
    })
  }
  render(){
    var userName = store.getState().rootReducer.person.name;
    var percents = (1-this.state.percents)*100+""
    percents = percents.substring(0,5)+"%"
    return(
      <View style={{ flex: 1,backgroundColor:"#F8F8F8" }}>
        <View style={{height:height*0.07,marginTop:15}}>
        <View style={{marginLeft:10}}>
          <Text style={{fontSize:20}}>个人主页</Text>
        </View>
        </View>
        <Divider style={{backgroundColor:"#D0D0D0",height:1,marginLeft:10,marginRight:10,marginBottom:5,marginTop:5}}/>
        <View style={{marginTop:15}}>
        	<View style={{marginLeft:20}}>
    <Text style={{fontSize:20}}>Hi! {userName}同学,您的总分为{this.state.totalScore}</Text>
    <Text style={{fontSize:20}}>处于前{percents}</Text>
        	</View>
        </View>
        <View >
        <ScrollView style={{marginBottom: 100,marginTop:20}}>
          <View style={{alignItems:'center',height:400}}>
            <Echarts option={this.state.dimensions} height={300} width={400}/>  
          </View>
      </ScrollView>
    </View>
  </View>)
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginLeft:10,
    marginRight:10
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});