import "./Auth.css";
import { useAuth } from "../../context";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils";

import { singupHandler } from "../../Services";

let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;

export const AuthSignup = () => {
  const { username, email, password, number, confirmPassword, authDispatch } =
    useAuth();
  console.log({ username, email, password, number, confirmPassword });

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
  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      console.log("Valid input");

      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else {
      console.log("Name is invalid");
    }
  };
  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      console.log("valid input");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Email is invalid");
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

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    isConfirmPasswordValid = confirmPasswordValue === password;
    
    if (isConfirmPasswordValid) {
      console.log("Passwords match");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: confirmPasswordValue,
      });
    } else {
      console.log("Passwords do not match");
    }
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    console.log({
      isNameValid,
      isNumberValid,
      isEmailValid,
      isPasswordValid,
      isConfirmPasswordValid,
    });

    if (
      isNameValid &&
      isNumberValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      singupHandler(username, number, email, password);
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-contaner">
          <label className="auth-label">
            Mobile Number <span>*</span>
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
            Name <span>*</span>
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-contaner">
          <label className="auth-label">
            Email <span>*</span>
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-contaner">
          <label className="auth-label">
            Password <span>*</span>
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
        <div className="d-flex direction-column lb-in-contaner">
          <label className="auth-label">
            Confirm Password <span>*</span>
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Confirm Password"
            type="password"
            required
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="ctc">
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
