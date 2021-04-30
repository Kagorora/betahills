import React from "react";
import "./bootstrap.min.css";
import FormContainer from './components/reusable/FormContainer';

import { useState, useEffect } from "react";

const App = () => {

  const [buttonClicked, setButtonClicked] = useState(false);
  // const [email, setEmail] = useState("");

  const handleOTP = () => {

    setButtonClicked(true)
 }

useEffect(() => {
  if(buttonClicked && buttonClicked === true) {
      if ('OTPCredential' in window) {
        window.addEventListener('DOMContentLoaded', e => {
          const input = document.querySelector('input[autocomplete="one-time-code"]');
          console.log('!!!!!!!!!! input !!!!!!!!!!', input);
          if (!input) return;
          const ac = new AbortController();
          console.log('!!!!!!!!!! ac !!!!!!!!!!', ac);
          const form = input.closest('form');
          console.log('!!!!!!!!!! form !!!!!!!!!!', form);
          if (form) {
            form.addEventListener('submit', e => {
              ac.abort();
            });
          }
          navigator.credentials.get({
            otp: { transport:['sms'] },
            signal: ac.signal
          }).then(otp => {
            input.value = otp.code;
            console.log('!!!!!!!!!! input.value !!!!!!!!!!', input.value);
            if (form) form.submit();
          }).catch(err => {
            console.log(err);
          });
        });
      }
    }
}, [buttonClicked])


  return (
    <>
      <div className="mt-5">
        <FormContainer>
          <div className="mb-3">
            <label for="exampleDropdownFormEmail2" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="email@example.com" />
          </div>

          <div className="mb-3">
            <label for="exampleDropdownFormEmail2" className="form-label">PassWord</label>
            <input type="password" className="form-control" id="password" placeholder="*********" />
          </div>

          <div className="mb-3">
            <button onClick={handleOTP} type="button" className="btn btn-primary btn-block rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</button>
          </div>

        </FormContainer>

        {
          buttonClicked && buttonClicked === true ? (
            <>
              {/* <FormContainer>
                <div className="mb-5">
                  <label for="exampleDropdownFormEmail2" className="form-label">OTP</label>
                  <input type="text" autocomplete="one-time-code" inputmode="numeric" />
                </div>
              </FormContainer> */}
              <FormContainer>
                <div className="mb-5">
                  <form>
                    <input autocomplete="one-time-code" className="form-control" required />
                    <input type="submit" />
                  </form>
                </div>
              </FormContainer>
            </>
          ) : ''
        }

      </div>
    </>
  );
};

export default App;
