import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";
import "./Authentication.scss";
import Layout from "../../components/Layout/Layout";

const Authentication = () => {
  return (
    <Layout>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </Layout>
  );
};

export default Authentication;
