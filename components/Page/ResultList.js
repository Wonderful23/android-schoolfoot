import React, {Component} from 'react'
import { ListItem,Header,Image,Text,Icon, Divider } from 'react-native-elements'
import {ScrollView,View,DeviceEventEmitter,Alert,Dimensions,StyleSheet,ToastAndroid} from 'react-native';
import { InputItem,Carousel } from '@ant-design/react-native';
import Activity from '../Simple/Activity';
import LabelItem from '../Simple/LabelItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActivityApis from '../apis/ActivityApis'
import {store} from '../redux/store'
import Result from '../Simple/Result';
var labelList = [
	{name:'体育',id:1},
	{name:'音乐',id:2},
	{name:'美术',id:3},
	{name:'学术',id:4}
];
var activitylist=[
	{
		uri:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",
		activityName: '在线读书活动',
		activityTime: '2020年5月1日',
		activityAddress: '电院大草坪',
		rating: '95分' 
	},
	{
		uri:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",
		activityName: '在线读书活动',
		activityTime: '2020年5月1日',
		activityAddress: '电院大草坪',
		rating: '95分' 
	},
	{
		uri:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",
		activityName: '在线读书活动',
		activityTime: '2020年5月1日',
		activityAddress: '电院大草坪',
		rating: '95分' 
	}
];
const {height, width} = Dimensions.get('window');
/**
 * @description Home
 * @constructor
 */

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: store.getState().rootReducer.person.id,
      resultList:[],
      yes:''
    }
  }
    getActivity = ()=>{
      const get = ActivityApis.record(this.state.id)
      get(store.dispatch).then(() => {
        const data = store.getState().rootReducer.records
        this.setState({resultList:data.studentRecordsDetails})
      })
    }
    componentWillMount(){
      this.getActivity()
    }
    componentWillReceiveProps(){
      this.getActivity();
      var yes = this.props.yes+"123";
      this.setState({yes:yes})
    }
    render(){
    return(
      <View style={{ flex: 1,backgroundColor:"#F8F8F8" }}>
        <View style={{height:height*0.07,marginTop:15}}>
        <View style={{marginLeft:10}}>
          <Text style={{fontSize:20}}>活动反馈</Text>
        </View>
        </View>
        <View style={{width:width,backgroundColor:'#F8F8F8',flexDirection:'row'}}>
        <View style={{marginLeft:10,
          marginRight:5,
          width:width*0.8,
          backgroundColor:'#ffffff',
          borderRadius:20}}
        >
          <InputItem
            clear
            type="text"
            placeholder="活动名"
          >
            <Icon
              name="search"
              color={"#D0D0D0"}
              size={40}
            />
          </InputItem>
        </View>
        <TouchableOpacity>
          <View style={{borderRadius:5,
            backgroundColor:'#ffffff', 
            borderColor:"#D0D0D0",
            borderWidth:1}}
          >
            <Icon
              name="search"
              color={'#D0D0D0'}
              size={40}
            />
          </View>
        </TouchableOpacity>    
        </View>
        <Divider style={{backgroundColor:"#D0D0D0",height:1,marginLeft:20,marginRight:20,marginBottom:5,marginTop:5}}/>
        <View >
        <ScrollView style={{marginBottom:145}}>
        <View>
          <Text  style={{marginTop:10,
            textAlign:'center',
            fontSize:20,
            color:'#585858'}}>-- 所有活动 --
          </Text>
          <View>
          {
            this.state.resultList.map((item, i) => (
              <Result 
								item={item}
              />
            ))
          }
          </View>
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