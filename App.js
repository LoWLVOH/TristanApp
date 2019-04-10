import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import ConnectScreen from './screens/ConnectScreen';
import Spinner from 'react-native-loading-spinner-overlay';

//firebase
import base from './base'
import 'firebase/auth'
import firebase from 'firebase/app'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      pswd: '',
      isLoadingComplete: false,
      isLog: false,
      spinner: true
    };
  }
  

  componentDidMount () {
    const ctx = this
    firebase.auth().onAuthStateChanged(function(user) {
      const spinner = false
      if (user) {
        // User is signed in.
        let email = user.email
        ctx.setState({  isLog: true, email, spinner })
      } else {
        ctx.setState({ spinner })
      }
    });
  }

  componentDidUpdate () {
    
  }


handleChangeEmail = value => {
  let email = value
this.setState({ email })
} 

handleChangePswd = value => {
  let pswd = value
this.setState({ pswd })
} 

handleSignUp = () => {
  this.setState({ spinner: true })
  const spinner = false
  const ctx = this
  let email = this.state.email
  let password = this.state.pswd
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      ctx.setState({ isLog: true, spinner })

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    ctx.setState({ isLog: false, spinner })
    console.log(errorCode+' / '+ errorMessage);
  });
} 

handleLogin = () => {
  this.setState({ spinner: true })
  const spinner = false
  const ctx = this
  let email = this.state.email
  let password = this.state.pswd
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      ctx.setState({ isLog: true, spinner })
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    ctx.setState({ isLog: false, spinner })
    console.log(errorCode+' / '+ errorMessage);
  });
} 
  
  

  render() {
    let isConnect
    if (this.state.spinner) {
      isConnect = null
    } else {
      if (!this.state.isLog) {
        isConnect = <ConnectScreen
        handleChangeEmail={this.handleChangeEmail}
        handleChangePswd={this.handleChangePswd}
        handleSignUp={this.handleSignUp}
        handleLogin={this.handleLogin}
        email={this.state.email}
        pswd={this.state.pswd}
       />
      } else {
        isConnect = <AppNavigator />
      }
    }
    

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {isConnect}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
