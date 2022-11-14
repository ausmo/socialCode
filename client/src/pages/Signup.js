import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    linkedin: "",
    github: "",
    employer: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input"
                      placeholder="Electric"
                      name="firstname"
                      type="text"
                      value={formState.firstname}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Last Name</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input"
                      placeholder="Boogaloo"
                      name="lastname"
                      type="text"
                      value={formState.lastname}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input"
                      placeholder="electric@boogaloo.com"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input"
                      placeholder="********"
                      name="password"
                      type="email"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>


                <div class="field">
                  <label class="label">Address</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input input"
                      placeholder="e.g. Funkytown TX, 75006"
                      name="address"
                      type="text"
                      value={formState.address}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">LinkedIn</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input input"
                      placeholder="e.g. www.linkedin.com/in/electricboogaloo"
                      name="linkedin"
                      type="text"
                      value={formState.linkedin}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">GitHub</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input input"
                      placeholder="e.g. www.github.com/electricboogaloo"
                      name="github"
                      type="text"
                      value={formState.github}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Employer</label>
                  <div class="control has-icons-left">
                    <input
                      className="form-input input"
                      placeholder="e.g. Google"
                      name="employer"
                      type="text"
                      value={formState.employer}
                      onChange={handleChange}
                    />

                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Sign Up
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

export default Signup;
