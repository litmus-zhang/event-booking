import React, { Component } from 'react'

export default class Auth extends Component
{
  constructor(props)
  {
    super(props)
    this.emailEl = React.createRef()
    this.passwordEl= React.createRef()
  }
  submitHandler = (e) =>
  {  e.preventDefault()
    const email = this.emailEl.current.value
    const password = this.passwordEl.current.value
    if (email.trim().length === 0 || password.trim().length === 0)
    {
      return;
}
    const requestBody = {
      query: `
      mutation {
        createUser(userInput: {email: "${email}", password: "${password}"}) {
          _id
          email
        }
      }
      `
    }  
    // console.log(email, password);
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      }

    })
  }
  render() {
    return (
      <form className='auth-form' onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={this.emailEl}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className='form-action'>
        <button type='submit'>Submit</button>
        <button type='button'>Swtitch to Signup</button>
        </div>

        <style jsx>{`
        .auth-form {
          width: 25rem;
          max-width: 80%;
          margin: 4rem auto;
        }
        .form-control label, .form-action button {
          width: 100%;
          display: block;
        }
        .form-control{
          margin-bottom: 1rem;
        }
        .form-control label{
          margin-bottom: 0.5rem;
        }
        .form-control input{
          width: 100%;
          padding: 0.5rem;
        }
        .form-action{
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;

        }
        .form-action button{
          background-color: #01d1d1;
          font-family: inherit;
          border: 1px solid #01d1d1;
          border-radius: 0.25rem;
          padding: 0.5rem 1rem;
          margin-right: 1rem;
          box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.1);
          color: #fff;
          cursor: pointer;
        }
        .form-action button:hover, .form-action button:focus, .form-action button:active{
          filter: brightness(.8);
          
        }
        `}</style>

    </form>
    )
  }
}

