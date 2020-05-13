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
    const submit = () => {
      const submitOne = PersonApis.login(phone,password)
      submitOne(store.dispatch).then(() => {
        const data = store.getState().rootReducer.person
        if(!data.succeed){
          ToastAndroid.show('登录失败',ToastAndroid.SHORT);
          return;
        }
        else{
          ToastAndroid.show('登录成功',ToastAndroid.SHORT);
          props.navigation.navigate('Home',{})
          return;
        } 
      })
    }
    const handler = ()=>{
      if(phone == '') {
        ToastAndroid.show('手机号不能为空',ToastAndroid.SHORT);
        return;
      }
      if(password == '') {
        ToastAndroid.show('密码不能为空',ToastAndroid.SHORT);
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
        <KeyboardAvoidingView  behavior="position" keyboardVerticalOffset="50" enabled="true"> 
          <View style={{marginTop:80,alignItems:'center'}}>
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
              onChange={value => {
                setPassword(value)
              }}
              placeholder="密码"
            >
              <Image
                source={require('../../images/password.jpg')}
                style={{ width: 30, height: 30 }}
              />
            </InputItem>     
          </View>
          <View style={styles.textfooter}>
          <View style={{marginLeft:20}}>
              <Button size='small'
                type='ghost' 
                onPress={()=>{props.navigation.navigate('Register',{})}}>注册
              </Button>
            </View>
           
          </View>
          <View style={{marginLeft:30,marginRight:30,marginTop:10,borderRadius:15}}>
            <Button type="ghost" 
              activeStyle={{ backgroundColor: '#f0f0f0' }}
              onPress={()=>{
                handler()
              }}
            >登 录
            </Button>
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