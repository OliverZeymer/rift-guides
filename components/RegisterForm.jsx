"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import TokenContext from "@contexts/TokenContext";
import { toast } from "react-toastify";
import { setCookie } from "react-use-cookie";
import { validateForm } from "@utils/validateForm";
import { logIn } from "@utils/logIn";
import { createUser } from "@utils/createUser";
// This gets handled by the [...nextauth] endpoint
export default function RegisterForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const [redEmailField, setRedEmailField] = useState(false);
  const [redPasswordField, setRedPasswordField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // We keep track of whether in a login / or register state
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const isFormValid = validateForm(enteredEmail, enteredPassword, setRedEmailField, setRedPasswordField, toast);
    if (!isFormValid) return;
    if (isLogin) {
      logIn(enteredEmail, enteredPassword, router, toast, setToken, setCookie, setIsLoading);
    } else {
      createUser(enteredEmail, enteredPassword, toast, setIsLoading, switchAuthModeHandler);
    }
  }

  return (
    <section className="top_section max-w-7xl mx-auto px-6 lg:px-12 min-h-screen">
      <>
        <h1 className="text-7xl leading-snug gradient_text">{isLogin ? "Login" : "Sign Up"}</h1>
        <form className="bg-gradient-to-b relative from-purple-700 to-pink-700 p-4 rounded-lg flex flex-col items-center justify-center gap-4" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              onChange={(e) => {
                setEnteredEmail(e.target.value);
                setRedEmailField(false);
              }}
              formNoValidate
              type="email"
              placeholder="Enter your email"
              className={`block w-full rounded-2xl border-2 ${
                redEmailField ? "border-red-500" : "border-bg"
              } bg-bg py-2.5 pl-4 text-lg font-medium purple-shadow focus:border-primary-300 focus:outline-none`}
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <input
              onChange={(e) => {
                setEnteredPassword(e.target.value);
                setRedPasswordField(false);
              }}
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`block w-full rounded-2xl border-2 ${
                redPasswordField ? "border-red-500" : "border-bg"
              } bg-bg py-2.5 pl-4 text-lg font-medium purple-shadow focus:border-primary-300 focus:outline-none`}
            />
          </div>
          <div className="my-5 flex flex-col items-center justify-center">
            <button type="submit" className="primary_btn py-2.5 w-full px-6 shadow-xl text-2xl rounded-full">
              {isLogin ? "Login" : !isLogin ? "Create Account" : isLoading ? "Loading..." : "Login"}
            </button>
            <button type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "No Account? Create One" : "Already a user? Login"}
            </button>
          </div>
        </form>
      </>
    </section>
  );
}
