import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  const [details, setDetails] = useState({ username: "", password: "" });

  const ADMIN_TOKEN = "452146856344562";

  const adminUser = {
    username: "admin@bukapedia.com",
    password: "admin123",
  };

  const users = {
    username: "johnd",
    password: "m38rmF$",
  };

  const Login = async (details) => {
    if (
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      localStorage.setItem("token", ADMIN_TOKEN);
      setUser({
        username: details.username,
      });
      history.push(`/update`);
    } else if (
      details.username == users.username &&
      details.password == users.password
    ) {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username: users.username,
        password: users.password,
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      history.push(`/`);
    } else {
      setError("Details do not match !");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="h-screen flex bg-blue-pastel">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-blue-pastel shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-blue-pastel mt-4 mb-12 text-center">
          Sign in to your account
        </h1>
        {error !== "" ? <div className="error">{error}</div> : ""}

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-blue-pastel`}
              id="username"
              placeholder="Your Username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-black border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 focus:border-blue-pastel`}
              id="password"
              placeholder="Your Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="bg-blue-pastel group w-full lg:w-1/3 md:w-2/3 py-2 px-4 text-sm text-white rounded-md border 
                            border-blue-pastel leading-5 font-medium hover:bg-blue-pastel focus:outline-none focus:border-blue-pastel 
                            focus:shadow-outline-blue-pastel active bg-blue-pastel active:outline-none transition duration-150 ease-in-out">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
