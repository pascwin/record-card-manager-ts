import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../../../components/FormInput/FormInput";
import { UserContext } from "../../../contexts/user-context";

import { signInAuthUserWithEmailAndPassword } from "../../../utils/firebase.utils";

import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setIsLoggedIn, currentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      setIsLoggedIn(true);
      navigate("/")
      console.log(currentUser)
    } catch (error: any) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("user does not exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <h2>Already have an Account?</h2>
        <span>Sign in with your email and password</span>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
