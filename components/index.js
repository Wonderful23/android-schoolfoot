import React, {Component} from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import ActivityPage from './Page/ActivityPage';
import Home from './Page/Home';
import ResultList from './Page/ResultList';
import Person from './Page/Person';
import { defaultProps } from '@ant-design/react-native/lib/search-bar/PropsType';
export default class NavigatorBar extends Component {
	constructor(props){
    super(props);
    this.state={
      yes:"",
      selectedTab:'shouye',
    }
}
  /*初始化state*/
    /**
     * 公共组件方法
     * @param selectedTab 选中的tab
     * @param title
     * @param icon
     * @param selectedIcon
     * @param imageStyle  选中时渲染图标的颜色
     * @param mark  角标
     * @param viewContent  页面内容
     * @returns {*}
     */
  tabNavigatorItems(selectedTab,title,icon,selectedIcon,imageStyle,mark,component){
		return (
        
          <TabNavigator.Item
              selected={selectedTab === this.state.selectedTab }
              title={title}
              renderIcon={()=> <Image style={styles.myImage} source={icon}/> }
              renderSelectedIcon={()=> <Image style={[styles.myImage,{tintColor:imageStyle}]} source={selectedIcon}/> }
              badgeText={mark}
              onPress={()=> {
                var yes = this.state.yes+"123"; 
                this.setState({selectedTab:selectedTab,yes:yes})} }>
                {component}
          </TabNavigator.Item>
      )
  }
  render(){
    return (
      <View style={styles.container}>
         <TabNavigator>
            {this.tabNavigatorItems('shouye',"首页",require('../images/shouye.jpg'),require("../images/shouye1.jpg"),'#6ebef3',"",<Home navigation={this.props.navigation} yes={this.state.yes}/>)}
            {this.tabNavigatorItems('dingdan',"反馈",require('../images/dingdan.jpg'),require("../images/dingdan1.jpg"),'#6ebef3',"",<ResultList navigation={this.props.navigation} yes={this.state.yes}/>)}
            {this.tabNavigatorItems('user',"我的",require('../images/user.jpg'),require("../images/yonghu.jpg"),'#6ebef3',"",<Person navigation={this.props.navigation} yes={this.state.yes}/>)}
         </TabNavigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    myImage:{
        width:22,
        height:22,
    }
});