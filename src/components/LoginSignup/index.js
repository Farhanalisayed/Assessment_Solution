import {Component} from 'react'

import LoginForm from '../LoginForm'
import SignUpForm from '../SignUpForm'
import './index.css'

class LoginSignup extends Component {
  state = {
    isLoginClicked: true,
  }

  onClickLogin = () => {
    const {history} = this.props
    this.setState({isLoginClicked: true})
    history.replace('/login')
  }

  onClickSignup = () => {
    const {history} = this.props
    this.setState({isLoginClicked: false})
    history.replace('/register')
  }

  render() {
    const {isLoginClicked} = this.state

    return (
      <div>
        <div className="upper-bar"></div>
        <div className="page-form">
          <div className="btn-container">
            <button
              className={isLoginClicked ? 'active-btn' : 'normal-btn'}
              onClick={this.onClickLogin}
            >
              LOGIN
            </button>
            <button
              className={isLoginClicked ? 'normal-btn' : 'active-btn'}
              onClick={this.onClickSignup}
            >
              SIGNUP
            </button>
          </div>
          {isLoginClicked ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    )
  }
}
export default LoginSignup
