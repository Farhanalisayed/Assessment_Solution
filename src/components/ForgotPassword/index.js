import {Component} from 'react'

import './index.css'

class ForgotPassword extends Component {
  state = {
    email: '',
    showEmailError: false,
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onClickReset = async () => {
    const {email} = this.state
    const apiUrl = 'http://localhost:3000/data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const isRegisteredUser = data.some(each => each.email === email)
    if (isRegisteredUser === true) {
      const {history} = this.props
      this.setState({showEmailError: false})
      history.push('/resetPassword')
    } else {
      this.setState({showEmailError: true})
    }
  }

  onClickLoginSignup = () => {
    const {history} = this.props
    history.push('/login')
  }

  render() {
    const {email, showEmailError} = this.state
    return (
      <div className="forgot-pass-container">
        <div className="reset-form">
          <label htmlFor="email" className="forgot-pass-heading">
            Please Provide Your Registered Email id to Reset Password
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email id"
            className="input-bar"
            value={email}
            onChange={this.onChangeEmail}
          />
          <div className="buttons">
            <button className="the-btn" onClick={this.onClickReset}>
              Reset Password
            </button>
            <button className="the-btn" onClick={this.onClickLoginSignup}>
              Login/Signup
            </button>
          </div>
          {showEmailError && (
            <p className="error-message">Email not registered</p>
          )}
        </div>
      </div>
    )
  }
}
export default ForgotPassword
