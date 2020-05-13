import React from 'react';
import { Image,Text, Divider} from 'react-native-elements'
import { View,Dimensions } from 'react-native'
import { Card, WhiteSpace, WingBlank,List, Flex } from '@ant-design/react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Item = List.Item;
const data = {
	uri:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",
	activityName: '在线读书活动',
	activityTime: '2020年5月1日',
	activityAddress: '电院大草坪',
	rating: '95分' 
}
const {height, width} = Dimensions.get('window');
const Result = (props) => {
	const {item} = props;
  return(
		<View style={{
			borderColor:"#f0f0f0",
			borderWidth:0.5,
			borderRadius:5,
			marginLeft:15,
			marginRight:15,
			marginBottom:10,
			backgroundColor:'#ffffff'
		}}>
			<View style={{flex:1,flexDirection:'row',marginTop:15}}>
				<View style={{flex:0.38,marginLeft:10}}>
					<Image source={{uri:data.uri}} style={{height:width*0.3,width:width*0.3}}/>
				</View>
				<View style={{flex:0.65}}>
					<Text style={{fontSize:17}}>{item.name}</Text>
					<Divider style={{backgroundColor:"#D0D0D0",height:1,marginBottom:3,marginTop:3}}/>
					<Text style={{fontSize:13}}>时间:  {item.time}</Text>
					<Text style={{fontSize:13}}>地点:  {item.location}</Text>
					<Text style={{fontSize:13}}>评价:  {item.description}</Text>
					<Text style={{fontSize:13}}>分数:  {item.score}</Text>
				</View>
			</View>
			<Divider style={{backgroundColor:"#D0D0D0",height:0.5,marginBottom:15,marginTop:10}}/>
		</View>
	);
}
export default Result;
