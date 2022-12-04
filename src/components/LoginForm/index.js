import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {name: '', password: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {name, password} = this.state

    const details = {name, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',

      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)

    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getUserName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, password} = this.state

    return (
      <div className="form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="picture"
        />
        <div className="form-text-container">
          <form onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-image"
            />
            <br />
            <label htmlFor="username" className="text">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="input"
              placeholder="Username"
              value={name}
              onChange={this.getUserName}
            />
            <br />
            <label htmlFor="password" className="text">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={this.getPassword}
            />
            <br />
            <button type="submit" className="button1">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
