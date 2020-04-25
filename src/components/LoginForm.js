import React from 'react'
import auth from '../firebase'
import InputForm from '../CRUD-FORM/InputForm'
import ProductList from '../CRUD-FORM/ProductList'
import ProductList_Admin from '../CRUD-FORM/ProductList_Admin'
import './LoginForm.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  render() {
    const { message, currentUser } = this.state

    if (currentUser) {
      return (
        <div>
          <p><ProductList_Admin/></p>
          <p><InputForm/></p>
          Hi ! : {currentUser.email}<br/>
          <button class="button button3" onClick={this.logout}>Logout</button><br/><br/>
          
        </div>
      )
    }
    if (currentUser==null) {
      return (
        <div>
          <p><ProductList/></p>      
          <h1 className='fo'>___________ADMIN___________</h1>
            <form onSubmit={this.onSubmit}>             
                <label className="label">Email :</label>             
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                  />
                <span> </span>
                <label className="label">Password :</label>           
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />                    
                {message ? <p className="help is-danger">{message}</p> : null}
                <br/><button class="button button1">Login</button>             
            </form>
          </div>    
      )
    }
  }
}
export default LoginForm;