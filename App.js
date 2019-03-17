import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';
import WebView from 'react-native-android-fullscreen-webview-video';
const width = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    playing: 0
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* headline */}
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.welcome}>React Native Webview Example</Text>

        {/* video embed */}
        <ScrollView
          style={{
            backgroundColor: 'black',
            height: (width - 30) / 1.77777777778,
            width: width - 30,
            margin: 0,
            padding: 0
          }}
        >
          <WebView
            useWebKit={true}
            source={{
              // uri: this.props.videoSource
              uri: 'https://www.youtube.com/embed/_sZH-psg9yE'
            }}
            style={{
              //   backgroundColor: this.state.webviewBackgroundColor,
              flex: 1,
              height: (width - 30) / 1.77777777778,
              width: width - 30,
              opacity: this.state.webviewBackgroundColor
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
        </ScrollView>

        {/* buttons */}
        <View style={{ height: 100 }}>
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
              flexDirection: 'row'
            }}
          >
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
        </View>

        {/* instructions */}
        <View>
          <Text style={styles.instructions}>
            Press a button above to play each video
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    margin: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    margin: 10
  },
  loginScreenButton: {
    backgroundColor: 'blue',

    width: '30%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
