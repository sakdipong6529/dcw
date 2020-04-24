import React from 'react'
import auth from '../firebase'
import InputForm from '../CRUD-FORM/InputForm'
import ProductList from '../CRUD-FORM/ProductList'
import ProductList_Admin from '../CRUD-FORM/ProductList_Admin'

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
          <button onClick={this.logout}>Logout</button>
          
        </div>
      )
    }
    if (currentUser==null) {
      return (
        <div>
          <p><ProductList/></p>
          
          <section className="section container">
        <div className="columns is-centered">
          <div className="column is-one-fifth">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                </div>
              </div><br/>

              {message ? <p className="help is-danger">{message}</p> : null}

              <div className="columns is-centered">
                <div className="control">
                  <button className="button is-link">Login</button>
                </div>
                <div className="control">
                  
                </div><br/>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
      )
    }
}
}

export default LoginForm
