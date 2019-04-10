import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from 'react-native';


export default class ConnectScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  constructor(props) {
    super(props);
    this.state = { 
        
    };
  }

  componentDidMount () {
    
  }



  handleTest = () => {
      this.setState({ test: 'ok' })
  }
  

  render() {
    const { handleChangeEmail, handleChangePswd, handleSignUp, handleLogin, email, pswd } = this.props


    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 30, padding: 10}}
        placeholder= 'E-mail'
        onChangeText={(value) => handleChangeEmail(value)}
        name='email'
        value={email}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 30, padding: 10}}
        placeholder= 'Mot de passe'
        onChangeText={(value) => handleChangePswd(value)}
        name='pswd'
        value={pswd}
      />
      <Text style={{margin: 50}}>Créer un compte</Text>
      <Button 
        title= 'Submit'
        onPress={handleSignUp}
        />
      <Text style={{margin: 50}}>Connectez-vous</Text>
      <Button 
        title= 'Submit'
        onPress={handleLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
