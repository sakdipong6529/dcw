/*import React from 'react';
import firebase from 'firebase';
import config from './config'

firebase.initializelogin(config);

const auth = firebase.auth

const provider = new firebase.auth.FacebookAuthProvider();

class login extends Component {
  constructor(props){
    super(props);
    this.state = {user:null}
  }
   
  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout = () => {
    var that = this;
    auth().signOut().then(function() {
      that.setState({user: null});
    }).catch(function(error) {
    });
  }
  renderName = () => {
    const {user} = this.state
    if(user)
      return (<div><img src={`${user.photoURL}`} />{user ? `Hi, ${user.displayName}!` : 'Hi!'}</div>)
  }
  render() {
    return (
      <div className="App">
          {this.renderName()}
          <button onClick={this.login}>
            Login with Facebook
          </button>
          <button onClick={this.logout}>
            Logout
          </button>
      </div>
    );
  }
}
export default login