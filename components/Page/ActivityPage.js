import React from 'react';
import {View,TouchableOpacity,StyleSheet,Dimensions,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {Image,Text,Divider,Icon,Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {commonStyle} from '../Simple/commonStyle';
import { List,InputItem } from '@ant-design/react-native';
import ActivityApis from '../apis/ActivityApis'
import { store } from '../redux/store'
const Item = List.Item;
const {height, width} = Dimensions.get('window');
/**
 * @description 物品详情组件
 * @constructor
 */
const ActivityPage = (props) =>{
  const id = store.getState().rootReducer.person.id
      const [item,setItem] = React.useState(props.navigation.state.params.item)
      const [code,setCode] = React.useState('')
      const signin = (activityId,studentId,code) => {
        const ok = ActivityApis.sigin(activityId,studentId,code);
        ok(store.dispatch).then(() => {
          const data = store.getState().rootReducer.apis
          if(!data){
            ToastAndroid.show('签到失败',ToastAndroid.SHORT);
            return;
          }
          else{
            ToastAndroid.show('签到成功',ToastAndroid.SHORT);
            return;
          } 
        })
      }
      const hanlder = ()=>{
        if(code == ''){
          ToastAndroid.show('请输入签到码',ToastAndroid.SHORT);
          return;
        }
        signin(item.id,id,code)
      }
      return(
       
        <View style={{flex:1}}>
        <View style={{backgroundColor:"#ffffff",height:height*0.07,marginTop:15,flexDirection:'row'}}>
            <View style={{marginLeft:10,marginRight:10}}>
              <TouchableOpacity>
            <Icon
              name='chevron-left'
              size={30}
              color='#686868'
        /></TouchableOpacity>
            </View>
						<View><Text style={{fontSize:20}}>签到</Text></View>
						</View>
            <ScrollView style={{}}>
              <View>
            <View style={{alignItems:'center',alignContent:'center'}}>
                <Image source={{uri:'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512'}} style={{width:width-20,height:width-20}}/>  
                </View>
                
                <View style={{flexDirection:'row'}}>
									<Text style={{marginLeft:20,fontSize:25}}>{item.activityName}</Text>
                </View>
								<Divider style={{ backgroundColor: '#D0D0D0',height:1,marginLeft:10,marginRight:10,marginBottom:10,marginTop:10 }}/>
								<Text style={{fontSize:17,marginLeft:20}}>活动时间：  {item.activityTime}</Text>
								<Text style={{fontSize:17,marginLeft:20}}>活动地点：  {item.activityDistination}</Text>
								<Text style={{fontSize:17,marginLeft:20,marginRight:20}}>活动详情：  {item.rowdetails}</Text>
                <Divider style={{ backgroundColor: '#f0f0f0',height:1 }}/>
                <View style={{flex:1,flexDirection:'row',height:20,marginBottom:20}}>
									<View style={{flex:0.95}}>
										<InputItem
                      clear
                      placeholder="请输入签到码"
                      onChange={value => {
                        setCode(value)
                      }}
          					>签到码</InputItem>
									</View>
									<View><Button
                    title="提交"
                    onPress={()=>{
                      hanlder()
                    }}
									/></View>
								</View>
                </View>
								</ScrollView>
              
                
							

        </View>
      );
}
/**
 * @description 样式表
 */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: commonStyle.white
    },
    navBar: {
      height: commonStyle.navHeight,
      alignItems: commonStyle.center,
      justifyContent: commonStyle.center,
      borderBottomWidth: commonStyle.lineWidth,
      borderBottomColor: commonStyle.lineColor
    },
    cellStyle: {
      flexDirection: commonStyle.row,
      alignItems: commonStyle.center,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: commonStyle.lineColor
    },
    sectionHeader: {
      height: 40,
      flexDirection: commonStyle.row,
      backgroundColor: commonStyle.bgColor,
      alignItems: commonStyle.center,
    },
    checkBox: {
      width: 40,
      height: 40,
    },
    toolBar: {
      backgroundColor:'#f0f0f0',
      height: commonStyle.cellHeight,
      flexDirection: commonStyle.row,
      alignItems: commonStyle.center
    }
	})
export default ActivityPage;