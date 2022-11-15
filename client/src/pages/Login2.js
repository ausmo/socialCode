import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_PROFILE } from '../utils/mutations';
import { ADD_PROFILE } from "../utils/mutations";

import Auth from '../utils/auth';





const Login2 = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
    return(<><h1 className="is-size-1 has-text-centered" id="logo">
    Welcome to socialCode!
  </h1>
  <h3 className="is-size-4 has-text-centered" id="logo2">
    Please log in or create an account to enjoy the site
  </h3>
  
<section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-4-widescreen">
            <form className="box" onSubmit={handleFormSubmit}>
                <h1 className="is-size-3">console.log(in)</h1>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input type="email" placeholder="e.g. electric@boogaloo.com" className="input" name="email" id="email" onChange={handleChange} required/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input type="password" placeholder="*******" className="input" name="password" id="password" onChange={handleChange} required/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <button className="button">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-5-widescreen">
            <form className="box">
                <h1 className="is-size-3">createAccount</h1>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control has-icons-left">
                  <input type="text" placeholder="Electric" className="input" required/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
                <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control has-icons-left">
                      <input type="text" placeholder="Boogaloo" className="input" required/>
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                </div>
              </div>
              
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input type="email" placeholder="e.g. electric@boogaloo.com" className="input" required/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Address</label>
                <div className="control has-icons-left">
                  <input type="text" placeholder="e.g. Funkytown TX, 75006" className="input"/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">LinkedIn</label>
                <div className="control has-icons-left">
                  <input type="url" placeholder="e.g. www.linkedin.com/in/electricboogaloo/" className="input"/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">GitHub</label>
                <div className="control has-icons-left">
                  <input type="url" placeholder="e.g. www.github.com/electricboogaloo" className="input"/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Employer</label>
                <div className="control has-icons-left">
                  <input type="text" placeholder="e.g. Google" className="input"/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input type="password" placeholder="*******" className="input" required/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Verify Password</label>
                <div className="control has-icons-left">
                  <input type="password" placeholder="*******" className="input" required/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <button className="button">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Login2;




export const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

