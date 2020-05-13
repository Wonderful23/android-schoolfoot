import React from 'react';
 
import { View, Text,DeviceEventEmitter } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Icon} from 'react-native-elements'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
/**
 * @constructor 商店列表排序组件
 * @description
 */
const LabelItem = (props) => {
	const {labelList,handle} = props;
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
  /**
   * @description 点击获取默认的列表
   */
  const hideMenu = () => {
    this._menu.hide();
  };
  /**
   * 展示出menu
   */
  showMenu = () => {
    this._menu.show();
  };
  return (
    <Menu
      ref={this.setMenuRef}
      button={
			<View style={{marginTop:4}}>
      	<TouchableOpacity onPress={this.showMenu}>
        	<Text style={{fontSize:16}}>类别</Text>
      	</TouchableOpacity>
			</View>
			}
    >
			{labelList.map((item, i) => (
        <View>	
					<MenuItem onPress={()=>{
						hideMenu()
						handle(item.name)
					}}>{item.name}</MenuItem>
					<MenuDivider />
				</View>
				))
      }
    </Menu>
    );
}
export default LabelItem;