import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import WebView from 'react-native-android-fullscreen-webview-video';

export default class App extends Component {
  state = {
    playing: 0
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Webview example!
        </Text>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => navigate('HomeScreen')}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>YouTube</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => navigate('HomeScreen')}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>Vimeo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => navigate('HomeScreen')}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>DailyMotion</Text>
          </TouchableOpacity>
        </View>

        <View>
          {/* <Text>Video area</Text> */}

          <WebView
            useWebKit={true}
            source={{
              uri: this.props.videoSource
            }}
            style={{
              // marginVertical: 20,
              // zIndex: -1,
              // elevation: -1,
              //   backgroundColor: this.state.webviewBackgroundColor,
              flex: 1,
              height: (width - 25) / 1.77777777778,
              width: width - 25,
              opacity: this.state.webviewBackgroundColor
              //   backgroundColor: '#000'
            }}
            onLoadStart={() => {
              this.setState({ webviewBackgroundColor: 0 });
            }}
            onLoadEnd={() => {
              setTimeout(() => {
                this.setState({ webviewBackgroundColor: 100 });
              }, 1000);

              //   this.opacity = 100;
              //   this.setState(() => {
              //     return {
              //       webviewBackgroundColor: 100 // override container's backgroundColor
              //     };
            }}
          />
        </View>

        <Text style={styles.instructions}>
          Press a button above to play each video
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    marginVertical: 100
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5
  // },
  loginScreenButton: {
    // marginRight: 40,
    // marginLeft: 40,
    // marginTop: 10,
    // paddingTop: 10,
    // paddingBottom: 10,
    backgroundColor: 'blue',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#fff',
    // width: '100%'
    alignSelf: 'stretch',
    height: 60,
    // textAlign: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
    // paddingLeft: 10,
    // paddingRight: 10
  }
});
