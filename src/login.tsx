import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../src/redux/authActions";

interface LoginFormProps {
  login: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default connect(null, { login })(LoginForm);
