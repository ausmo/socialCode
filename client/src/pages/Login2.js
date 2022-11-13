import Footer from "../components/Footer";

export default function Login2(params) {
    return(<><h1 class="is-size-1 has-text-centered" id="logo">
    Welcome to socialCode!
  </h1>
  <h3 class="is-size-4 has-text-centered" id="logo2">
    Please log in or create an account to enjoy the site
  </h3>
  
<section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <form class="box">
                <h1 class="is-size-3">console.log(in)</h1>
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" placeholder="e.g. electric@boogaloo.com" class="input" required/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" required/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <button class="button">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form class="box">
                <h1 class="is-size-3">createAccount</h1>
              <div class="field">
                <label class="label">First Name</label>
                <div class="control has-icons-left">
                  <input type="text" placeholder="Electric" class="input" required/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control has-icons-left">
                      <input type="text" placeholder="Boogaloo" class="input" required/>
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                </div>
              </div>
              
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" placeholder="e.g. electric@boogaloo.com" class="input" required/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Address</label>
                <div class="control has-icons-left">
                  <input type="text" placeholder="e.g. Funkytown TX, 75006" class="input"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">LinkedIn</label>
                <div class="control has-icons-left">
                  <input type="url" placeholder="e.g. www.linkedin.com/in/electricboogaloo/" class="input"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">GitHub</label>
                <div class="control has-icons-left">
                  <input type="url" placeholder="e.g. www.github.com/electricboogaloo" class="input"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Employer</label>
                <div class="control has-icons-left">
                  <input type="text" placeholder="e.g. Google" class="input"/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" required/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Verify Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" required/>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <button class="button">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
  )
}