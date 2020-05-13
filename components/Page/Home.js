import React, {Component} from 'react'
import { ListItem,Header,Image,Text,Icon, Divider } from 'react-native-elements'
import {ScrollView,View,DeviceEventEmitter,Alert,Dimensions,StyleSheet,ToastAndroid} from 'react-native';
import { InputItem,Carousel } from '@ant-design/react-native';
import Activity from '../Simple/Activity';
import LabelItem from '../Simple/LabelItem';
import ActivityApis from '../apis/ActivityApis'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {store} from '../redux/store'
var labelList = [
	{name:'体育',id:1},
	{name:'音乐',id:2},
	{name:'美术',id:3},
	{name:'学术',id:4}
];
var wellList = [
	{
		coverPicUrl: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
		activityId: 2
	},
	{
		coverPicUrl: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
		activityId: 3
	},
	{
		coverPicUrl: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
		activityId: 4
	},
]
const {height, width} = Dimensions.get('window');
/**
 * @description Home
 * @constructor
 */
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      activities: [],
      label: '全部',
      yes:''
    }
  }
    getActivity(){
      const get = ActivityApis.get()
      get(store.dispatch).then(() => {
        const data = store.getState().rootReducer.activities
        if(data){
          var list = data.groupTableDetails
           var result = [];
           for(var i=0;i<list.length;i++){
             var details = list[i].description
             if(list[i].description.length>13){
               details = list[i].description.substring(0,13)+"..."
             }
             var item = {
              coverPicUrl: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
              activityName: list[i].name,
              activityTime: list[i].time,
              activityDistination: list[i].location,
              rowdetails: list[i].description,
              mindetails: details,
              currentdetails: details,
              basicScore: list[i].basicScore,
              type:list[i].type,
              id: list[i].id
             }
             result.push(item)
           }
           this.setState({activities:result})
        }
      })
    }
    componentWillMount(){
      this.getActivity()
    }
    componentWillReceiveProps(){
      this.getActivity()
      var yes = this.props.yes+"123";
      this.setState({yes:yes,label:'全部'})
    }
		handleLabel = (name)=>{
			this.setState({label:name})
    }
    render(){
    return(
      <View style={{ flex: 1,backgroundColor:"#F8F8F8" }}>
        <View style={{height:height*0.07,marginTop:15}}>
        <View style={{marginLeft:10}}>
          <Text style={{fontSize:20}}>活动列表</Text>
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
        {<View style={{marginLeft:20,flexDirection:'row'}}>
          <LabelItem labelList={labelList} handle={this.handleLabel} />
          <View style={{marginTop:6}}>
            <Icon
              name='chevron-right'
              size={20}
              color={"#000000"}
            />
          </View>
          <Text style={{fontSize:15,marginLeft:5,marginTop:5}}>{this.state.label}</Text> 
					</View>}
        <Divider style={{backgroundColor:"#D0D0D0",height:1,marginLeft:20,marginRight:20,marginBottom:5,marginTop:5}}/>
        <View >
        <ScrollView style={{marginBottom:145}}>
        <View>
				<Text  style={{marginTop:10,
            textAlign:'center',
            fontSize:20,
            color:'#585858',
            marginBottom:10}}>-- 推荐活动 --
          </Text>
        <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            {
              wellList.map((item,i)=>{
                return(
									<View key={i}style={{backgroundColor:"#F8F8F8"}}>
                  	<TouchableOpacity style={{marginLeft:width*0.2}}>
                    	<Image source={{uri:item.coverPicUrl}} style={{height:width*0.5,width:width*0.5}}/>
                  	</TouchableOpacity>
									</View>
                );
              })
            }
          </Carousel>
          <Text  style={{marginTop:10,
            textAlign:'center',
            fontSize:20,
            color:'#585858'}}>-- 所有活动 --
          </Text>
          <View>
          {
            this.state.activities.map((item, i) => (
              <Activity navigation={this.props.navigation}
								item={item}
              />
            ))
          }
          </View>
        </View>
      </ScrollView>
    </View>
  </View>)}
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