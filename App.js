import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';
import WebView from 'react-native-android-fullscreen-webview-video';

// get the width of the current device
const width = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    uri: 'https://www.youtube.com/embed/O9IN4nAOhRM',
    opacity: 0
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* headline */}
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.welcome}>React Native Webview Example</Text>
        </View>

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
              uri: this.state.uri
            }}
            style={{
              flex: 1,
              height: (width - 30) / 1.77777777778,
              width: width - 30,
              opacity: this.state.opacity
            }}
            onLoadStart={() => {
              this.setState({ opacity: 0 });
            }}
            onLoadEnd={() => {
              setTimeout(() => {
                this.setState({ opacity: 100 });
              }, 500);
            }}
          />
        </ScrollView>

        {/* buttons */}
        <View style={{ height: 70 }}>
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                this.state.uri.includes('you') && {
                  backgroundColor: 'gray'
                }
              ]}
              onPress={() =>
                this.setState({
                  uri: 'https://www.youtube.com/embed/O9IN4nAOhRM'
                })
              }
            >
              <Text style={styles.buttonText}>YouTube</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                this.state.uri.includes('vimeo') && {
                  backgroundColor: 'gray'
                }
              ]}
              onPress={() =>
                this.setState({
                  uri: 'https://player.vimeo.com/video/192511901'
                })
              }
            >
              <Text style={styles.buttonText}>Vimeo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                this.state.uri.includes('daily') && {
                  backgroundColor: 'gray'
                }
              ]}
              onPress={() =>
                this.setState({
                  uri: 'https://www.dailymotion.com/embed/video/x72cxzt'
                })
              }
            >
              <Text style={styles.buttonText}>DailyMotion</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* instructions */}
        <View>
          <Text style={styles.instructions}>Choose a video source</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
    fontWeight: 'bold'
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    margin: 10
  },
  button: {
    backgroundColor: 'blue',
    width: '32%',
    height: 38,
    marginVertical: 20,
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
