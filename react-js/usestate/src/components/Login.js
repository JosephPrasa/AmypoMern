import React from "react";

function Login() {
  const isLoggedIn = true;
  return <div>{isLoggedIn ? "Welcome User!!!" : "Please wait"}</div>;
}

export default Login;
