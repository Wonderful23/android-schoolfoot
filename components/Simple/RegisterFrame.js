import React from 'react';
import { Image } from 'react-native-elements';
import {View,StyleSheet} from'react-native';
import { InputItem,Button } from '@ant-design/react-native';
/**
 * @description Registry
 * @constructor
 */
const Registry = () =>{
    return(
			<View>
            <View style={styles.input2} > 
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
                placeholder="密码"
              >
                <Image
                  source={require('../../images/password.jpg')}
                  style={{ width: 30, height: 30 }}
                />
              </InputItem>     
            </View>
            <View style={styles.input}>
              <InputItem
                clear
                type="password"
                placeholder="确认密码"
              >
                <Image
                  source={require('../../images/password.jpg')}
                  style={{ width: 30, height: 30 }}
                />
              </InputItem>     
            </View>    
            <View style={{marginLeft:30,marginRight:30,marginTop:10}}>
              <View style={{marginBottom:30}}>
                <Button
                  type="ghost"
                >注册
                </Button>
              </View>
            </View>
						</View>
    );
}
export default Registry;
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
  input2:{
		marginTop:15,
    borderRadius:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:"#f0f0f0"
  },
  input1:{
    marginTop:10,
    borderRadius:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:"#f0f0f0",
    flexDirection:'row',

  },
  textfooter:{
    flex:1,
    flexDirection:'row',
    marginTop:10,
    marginLeft:30,
  }
})