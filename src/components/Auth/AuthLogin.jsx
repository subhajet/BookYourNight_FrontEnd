import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { loginHandler } from "../../Services";
import { useAuth } from "../../context";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();
  console.log({password, number});


  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Number is invalid");
    }
  };
  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid password");
    }
  };

  const hadleFormSubmit = async(e) => {
    e.preventDefault();
    if (isNumberValid && password) {
      const {accessToken, username} = await loginHandler(number,password)
      authDispatch({
        type:"SET_ACCESS_TOKEN",
        payload:accessToken
      })
      authDispatch({
        type:"SET_USER_NAME",
        payload:username
      })
    }
    authDispatch({
      type:"CLEAR_USER_DATA",
    })
    authDispatch({
      type:"SHOW_AUTH_MODAL"
    })
  };

  return (
    <div className="auth-container">
      <form onSubmit={hadleFormSubmit}>
        <div className="d-flex direction-column lb-in-contaner">
          <label className="auth-label">
            Mobile Number <span className="astrisk">*</span>
          </label>
          <input
            defaultValue={number}
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-contaner">
          <label className="auth-label">
            Password <span className="astrisk">*</span>
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
      </form>
      <div className="ctc">
        <button className="button btn-outline-primary cursor-pointer">
          Login with Test Credential
        </button>
      </div>
    </div>
  );
};
