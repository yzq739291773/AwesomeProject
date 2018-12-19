/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Image, Text,ScrollView,View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WingBlank, Button,DatePicker, List } from 'antd-mobile-rn';

const instructions = Platform.select({
  ios: '我是ios应用 Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    '我是Android 应用 Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: undefined,
    };
  }

  onChange = (value: any) => {
    this.setState({ value });
  }
  onPress=() => {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Details' })
      ],
    }))
  }
  render() {
    return (
      <View>
        <WingBlank
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
       
        <Button type="primary">ghost</Button>
        <Button type="ghost" disabled>
          ghost disabled
        </Button>
        <Button type="ghost" size="small">
          ghost
        </Button>
      </WingBlank>
      <Text>Home Screen</Text>
        <List>
          <DatePicker
            value={this.state.value}
            mode="date"
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD"
          >
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </View>
      
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});
export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
