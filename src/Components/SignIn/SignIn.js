import React from 'react';

class SignIn extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''

    }
  }

  onInputChange = (event) => {
    if (event.target.id === 'email') {
      // console.log(event.target.value);
      this.setState({ email: event.target.value })

    }
    else if (event.target.id === 'password') {
      // console.log(event.target.value);
      this.setState({ password: event.target.value })
    }
  }


  onSubmitButton = (event) => {

    event.preventDefault();         // event.preventDefault() is used to prevent any default behaviours like
    // page refresh on form submit 

    if (this.state.email === 'test@gmail.com' && this.state.password === 'test123') {

      {
        this.props.onRouteChange('home')
        return;
      }

    }
    alert("No such user");
  }

  render() {
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

        <main className="pa4 black-80">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

              <legend className="f1 fw6 ph0 mh0">Sign In</legend>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input onChange={(event) => this.onInputChange(event)} value={this.state.email} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email" />
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input onChange={(event) => this.onInputChange(event)} value={this.state.password} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
              </div>

            </fieldset>
            <div className="">
              <input onClick={this.onSubmitButton} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
            </div>

            <div className="lh-copy mt3">
              <p onClick={() => this.props.onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>

            </div>
            <div className=" f7 white bg-black br3">
              <p>For demo purpose, use these login credentials</p>
              <p>User: test@gmail.com</p>
              <p>Pass: test123</p>
            </div>
          </form>
        </main>

      </article>

    );
  }
}

export default SignIn;