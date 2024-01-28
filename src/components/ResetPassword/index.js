import {Component} from 'react'

import './index.css'

class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    showPasswrdError: false,
  }

  onClickReset = () => {
    const {password, confirmPassword} = this.state
    if (password === confirmPassword) {
      const {history} = this.props
      this.setState({showPasswrdError: false})
      history.push('/login')
    } else {
      this.setState({showPasswrdError: true})
    }
  }

  onChangePasswrd = event => {
    this.setState({password: event.target.value})
  }

  onChangeConfirmPasswrd = event => {
    this.setState({confirmPassword: event.target.value})
  }

  render() {
    const {password, confirmPassword} = this.state
    return (
      <div className="forgot-pass-container">
        <div className="reset-form">
          <label htmlFor="password" className="the-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input-bar"
            value={password}
            onChange={this.onChangePasswrd}
          />
          <label htmlFor="confirmPassword" className="the-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="input-bar"
            value={confirmPassword}
            onChange={this.onChangeConfirmPasswrd}
          />
          <button className="the-btn" onClick={this.onClickReset}>
            Reset Password
          </button>
        </div>
      </div>
    )
  }
}
export default ResetPassword
