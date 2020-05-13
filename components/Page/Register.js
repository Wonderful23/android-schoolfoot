import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image,Text } from 'react-native-elements';
import {View,StyleSheet,KeyboardAvoidingView,ImageBackground,Dimensions,ToastAndroid} from'react-native';
import { InputItem, Button } from '@ant-design/react-native';
const {height, width} = Dimensions.get('window');
import PersonApis from '../apis/PersonApis'
import { store } from '../redux/store'
/**
 * Login
 * @constructor
 */
const Login = (props) =>{
    const [phone,setPhone] = React.useState('');
		const [password,setPassword] = React.useState('');
		const [username,setUsername] = React.useState('');
    const [doublepassword,setDoublePassword] = React.useState('');
    const submit = () => {
      const submitOne = PersonApis.register(phone,username,password)
      submitOne(store.dispatch).then(() => {
        const data = store.getState().rootReducer.apis 
        if(data){
          ToastAndroid.show('注册成功',ToastAndroid.SHORT);
          props.navigation.navigate('Login',{})
          return;
        }
        else{
          ToastAndroid.show('注册失败',ToastAndroid.SHORT);
          return;
        }
      })
    }
    const handler = ()=>{
      if(username == ''){
        ToastAndroid.show('用户名不能为空',ToastAndroid.SHORT);
        return;
      }
      if(phone == ''){
        ToastAndroid.show('手机号不能为空',ToastAndroid.SHORT);
        return;
      }
      if(password == ''){
        ToastAndroid.show('密码不能为空',ToastAndroid.SHORT);
        return;
      }
      if(doublepassword == ''){
        ToastAndroid.show('确认密码不能为空',ToastAndroid.SHORT);
        return;
      }
      if(password != doublepassword){
        ToastAndroid.show('两次输入密码不相等',ToastAndroid.SHORT);
        return;
      }
      submit()
    }
    return(
      <View>
        <ImageBackground
                style={{width:width,height:height}}
                source={require('../../images/denglu.jpg')}
        >
        <KeyboardAvoidingView  behavior="position" keyboardVerticalOffset="35" enabled="true"> 
          <View style={{marginTop:60,alignItems:'center'}}>
            <Icon
              name='user'
              size={80}
              color='#f0f0f0'
            />
          </View>
          <View style={{marginTop:20}}>
            <Text h3 style={{textAlign:'center',
              fontFamily:"Times New Roman",
              color:'#f0f0f0'}}>School Foot Print
            </Text>
          </View>
          <View>
          <View>
					<View style={styles.input} > 
              <InputItem
                clear
                type="text"
                placeholder="用户名"
                onChange={value => {
                  setUsername(value)
                }}
              >
                <Image
                  source={require('../../images/user.jpg')}
                  style={{ width: 30, height: 30 }}
                />
              </InputItem>
            </View>  
            <View style={styles.input} > 
              <InputItem
                clear
                placeholder="手机号"
                onChange={value => {
                  setPhone(value)
                }}
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
                onChange={value => {
                  setPassword(value)
                }}
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
                onChange={value => {
                  setDoublePassword(value)
                }}
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
                  onPress={()=>{
                    handler()
                  }}
                  type="ghost"
                >注册
                </Button>
              </View>
            </View>
						</View>
		</View>
        </KeyboardAvoidingView>
        </ImageBackground>
      </View>
      
    );
  
  }
export default Login;
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