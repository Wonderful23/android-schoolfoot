import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image,Text } from 'react-native-elements';
import {View,StyleSheet,KeyboardAvoidingView,ImageBackground,Dimensions} from'react-native';
import { InputItem, Button } from '@ant-design/react-native';
const {height, width} = Dimensions.get('window');
/**
 * Login
 * @constructor
 */
const SiginFrame = (props) =>{
    return(  
			<View>
          <View style={styles.input} > 
            <InputItem
              clear
              type="phone"
              placeholder="手机号"
            >
              <Image
                source={require('../../images/shouji.jpg')}
                style={{ width: 30, height: 30 }}
              />
            </InputItem>
          </View>
          <View style={styles.input}>
            <InputItem
              clear
              type="password"
              onChange={value => {
              }}
              placeholder="密码"
            >
              <Image
                source={require('../../images/password.jpg')}
                style={{ width: 30, height: 30 }}
              />
            </InputItem>     
          </View>
          <View style={{marginLeft:30,marginRight:30,marginTop:10,borderRadius:15}}>
            <Button type="ghost" 
              activeStyle={{ backgroundColor: '#f0f0f0' }}
              onPress={()=>{
                props.navigation.navigate('HomePage',{})
              }}
            >登 录
            </Button>
          </View>
		</View>
    );
}
export default SiginFrame;
const styles = StyleSheet.create({
  image:{
    marginTop:30,
    alignItems:'center'
  },
  title:{
    marginTop:30
    
  },
  input:{
    marginTop:10,
    borderRadius:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:"#f0f0f0"
  },
  textfooter:{
    flexDirection:'row',
    marginTop:10,
    marginLeft:30,
  }
})