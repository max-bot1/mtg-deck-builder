import styles from "/styles/utils.module.css";
import { useState } from "react";
import * as Validator from "email-validator";
const Pvalidator = require("password-validator");

export default function Login() {
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");

  const schema = new Pvalidator();

  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(2) // Must have at least 2 digits
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not()
    .oneOf(["", "Password123"]); // Blacklist these values

  function handlePassChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function verifyLogin(e) {
    e.preventDefault();
    Validator.validate(email)
      ? console.log("Email success")
      : console.log("Email failure");
    schema.validate(password)
      ? console.log("Password success")
      : console.log("Password failure");
  }
  return (
    <div className={styles.loginContainer}>
      <form>
        <input
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter email"
          required
        ></input>
        <br />
        <input
          onChange={handlePassChange}
          type="password"
          placeholder="Enter password"
          required
        ></input>
        <br />
        <button id="btn-login" disabled="true" onClick="login()">
          Log in
        </button>
        <button id="btn-logout" disabled="true" onClick="logout()">
          Log out
        </button>
        <h3 className={styles.hide}>Please enter a valid email</h3>
        <h3 className={styles.hide}>Password must be at least 8 characters.</h3>
      </form>
    </div>
  );
}
