import signupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration.js";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signupImage} />
        <SignupForm />
      </div>
    </>
  );
}
