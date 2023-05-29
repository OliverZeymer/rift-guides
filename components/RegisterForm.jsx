"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@contexts/AuthContext";
import { toast } from "react-toastify";
import { setCookie } from "react-use-cookie";
import { validateForm } from "@utils/validateForm";
import { logIn } from "@utils/logIn";
import { createUser } from "@utils/createUser";
import Loader from "./Loader";
// This gets handled by the [...nextauth] endpoint
export default function RegisterForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const { setAuth } = useContext(AuthContext);
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
      logIn(enteredEmail, enteredPassword, router, toast, setAuth, setCookie, setIsLoading);
    } else {
      createUser(enteredEmail, enteredPassword, toast, setIsLoading, switchAuthModeHandler);
    }
  }

  return (
    <section className="top_section mx-auto min-h-screen max-w-7xl px-6 lg:px-12">
      <>
        <h1 className="gradient_text mb-8 text-7xl leading-snug">{isLogin ? "Login" : "Sign Up"}</h1>
        <form className="relative flex flex-col items-center justify-center gap-4 rounded-lg bg-gradient-to-b from-purple-800 to-pink-700 p-4" onSubmit={submitHandler}>
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
              } purple-shadow bg-bg py-2.5 pl-4 text-lg font-medium focus:border-primary-300 focus:outline-none`}
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
              } purple-shadow bg-bg py-2.5 pl-4 text-lg font-medium focus:border-primary-300 focus:outline-none`}
            />
          </div>
          <div className="my-5 flex flex-col items-center justify-center gap-4">
            <button type="submit" className="primary_btn w-full rounded-full px-6 py-2.5 text-2xl shadow-xl">
              {isLoading ? <Loader size="sm" /> : isLogin ? "Login" : !isLogin ? "Create Account" : "Login"}
            </button>
            <button className="text-shadow text-lg" type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "No account? Create one here" : "Already a user? Login"}
            </button>
          </div>
        </form>
      </>
    </section>
  );
}
