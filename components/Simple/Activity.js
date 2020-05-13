import React from 'react';
import { Image,Text} from 'react-native-elements'
import { View } from 'react-native'
import { Card, WhiteSpace, WingBlank,List,Button } from '@ant-design/react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Item = List.Item;
const Activity = (props) => {
	const { item,navigation } = props;
	const coverPicUrl = item.coverPicUrl;
	type = "-1"
	switch(item.type){
		case "0":{
			type = "体育"
			break;
		}
		case "1":{
			type = "艺术"
			break
		}
		case "2":{
			type = "学术"
			break
		}
		case "3":{
			type = "工程实践"
			break
		}
		case "4":{
			type = "志愿活动"
			break
		}
		case "5":{
			type = "社会实践"
			break
		}
	}
	const [Information,setInformation] = React.useState(item);
  return(
		<View>
      <WingBlank>
        <View style={{backgroundColor:'#ffffff'}}>
        <Card>
					<TouchableOpacity 
						onPress={()=>{
              navigation.navigate('Activity',{item:item})
            }}>
            <Card.Header
              title={<View style={{marginLeft:5}}><Text style={{fontSize:15}}>{Information.activityName}</Text></View>}
              thumbStyle={{ width: 40, height: 40 }}
              thumb={<Image source={{uri:coverPicUrl}} style={{width:40,height:40}}/>}
              extra={<View style={{flexDirection:'row-reverse'}}><Text style={{color:"#A0A0A0",fontSize:13}}>{''}</Text></View>}
            />
					</TouchableOpacity>
            <Card.Body>
							<View style={{marginLeft:15,marginRight:15}}>
								<View style={{flexDirection:'row'}}>
					<Text style={{marginTop:5}}>活动类型：  </Text><Button type='ghost' size='small'>{type}</Button>
								</View>
								<Text>活动时间：  {Information.activityTime}</Text>
								<Text>活动地点：  {Information.activityDistination}</Text>
								<Text>活动分数：  {Information.basicScore}</Text>
								</View>
								<Item onPress={()=>{
									let temp = {
										overPicUrl: Information.coverPicUrl,
										activityName: Information.activityName,
										activityTime: Information.activityTime,
										activityDistination: Information.activityDistination,
										rowdetails: Information.rowdetails,
										mindetails: Information.mindetails,
										currentdetails: Information.currentdetails,
										basicScore:Information.basicScore
									}
									if(temp.currentdetails === Information.mindetails){
										temp.currentdetails = Information.rowdetails
									}
									else{
										temp.currentdetails = Information.mindetails
									}
									setInformation(temp)
									console.log(Information)
								}}>
									{<Text>活动详情：  {Information.currentdetails}</Text>}  
                </Item>
							
            </Card.Body>
          </Card></View>
        </WingBlank>
        <WhiteSpace /></View>
	);
}
export default Activity;
