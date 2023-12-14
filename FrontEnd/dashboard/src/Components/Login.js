import React from 'react'

function Login() {
  return (
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
            <label for="user-email" style={{paddingTop:13+'px'}}>
                &nbsp;E-mail
              </label>
            <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required />
            <div className="form-border"></div>
            <label for="user-password" style={{paddingTOP:22+'px'}}>&nbsp;Password
              </label>
            <input id="user-password" className="form-content" type="password" name="password" required />
            <div className="form-border"></div>
            <a href="#">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
          </form>
        </div>
      </div>
  )
}

export default Login
