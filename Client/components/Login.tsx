import React, { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import logoIcon from "@/public/images/logo1.png";
import loginIcon from "@/public/images/login.jpg";
import ShowPassword from "./ShowPassword";
import HidePassword from "./HidePassword";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.trim() !== "";

    if (isValidEmail && isValidPassword) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful", data);
          router.push("/home");
        } else {
          const errorData = await response.json();
          console.error("Login failed", errorData);
        }
      } catch (error) {
        alert("Something went wrong");
      }
    } else {
      alert("Invalid email or Password");
    }
    setLoading(false);
  };

  return (
    <div data-testid="login-component" className="max-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-rows-1 max-h-[800px] sm:grid-cols-12">
          <div className="w-full h-full rounded-l-xl col-span-5 hidden sm:flex relative">
            <Image
              className="w-full h-full rounded-l-xl col-span-5 hidden sm:flex relative"
              src={loginIcon}
              alt="worker"
            />
          </div>

          <div className="sm:col-span-7 w-full sm:pt-5 lg:px-10 md:px-10">
            <div className="text-center hidden sm:block">
              <Image
                className="fill-secondary h-[20px] md:h-full md:w-[130px] xs:w-[108px] xs:ml-2.5 sm:ml-2.5 inline-block"
                src={logoIcon}
                alt="logo"
              />
            </div>
            <div className="sm:mt-20 my-10 sm:w-3/4 md:w-11/12 m-auto">
              <form
                data-testid="login-form"
                className="mx-2 grid grid-flow-row auto-rows-auto gap-4 content-evenly"
                onSubmit={handleSubmit}
              >
                <h1 className="text-[20px] text-textgrey px-2">
                  Sign in to your account
                </h1>
                <div className="grid grid-flow-row gap-1 px-2">
                  <input
                    placeholder="Email"
                    className="block m-0 h-9 py-1.5 px-3 bg-white border border-midgrey rounded shadow-inner transition ease-in-out focus:border-lightblue focus:outline-none focus:shadow focus:shadow-lightblue text-textgrey "
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-flow-row gap-1 relative px-2">
                  <div className="relative">
                    <input
                      placeholder="Password"
                      className="w-full block m-0 h-9 py-1.5 px-3 w-full bg-white border border-midgrey rounded shadow-inner transition ease-in-out focus:border-lightblue focus:outline-none focus:shadow focus:shadow-lightblue pr-7 customInput text-textgrey"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="MaskIcon absolute top-[16%] right-[0.5%]">
                      {showPassword ? (
                        <span data-testid="show-password-button" onClick={() => setShowPassword(false)}>
                          <ShowPassword />
                        </span>
                      ) : (
                        <span data-testid="hide-password-button" onClick={() => setShowPassword(true)}>
                          <HidePassword />
                        </span>
                      )}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="text-sm justify-self-end hover:underline cursor-pointer text-lightblue px-2"
                  >
                    Forgot your password?
                  </button>
                </div>

                <div className="grid grid-flow-col md:grid-cols-6 text-base px-2 gap-6">
                  <button
                    type="submit"
                    className="flex bg-cyan-600 text-lightblue hover:bg-secondary border border-lightblue hover:text-white border-secondary justify-center items-center font-bold text-sm rounded p-2 cursor-pointer flex-row xs:col-span-full md:col-span-6 md:self-end md:col-start-1"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="flex bg-orange-300 text-lightblue hover:bg-secondary hover:text-white border border-secondary justify-center items-center font-bold text-sm rounded p-2 cursor-pointer flex-row xs:col-span-full md:col-span-6 md:self-end md:col-start-1 "
                  >
                    Create Account
                  </button>
                </div>

                <div className="mt-3 ml-2">
                  <div className="text-textgrey">
                    <h1 className="text-base font-medium">
                      Create a Zoro account for access to:
                    </h1>
                    <div className="ml-2">
                      <li>Exclusive savings</li>
                      <li>Delivery tracking</li>
                      <li>Tiered pricing discounts with free delivery</li>
                      <li>and lots more business friendly features</li>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-300 opacity-80 flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12" />
        </div>
      )}
    </div>
  );
};

export default Login;
