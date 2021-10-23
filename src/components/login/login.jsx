import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginHeader from "./loginHeader";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = ({ authService }) => {
  const history = useHistory();

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => navigateToMain(data.user.uid));
  };

  const navigateToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && navigateToMain(user.uid);
    });
  });
  return (
    <section className={styles.login}>
      <LoginHeader />
      <ul className={styles.loginOption}>
        <h4>LOGIN</h4>
        <li>
          <button
            onClick={onLogin}
            className={`${styles.loginBtn} ${styles.googleLogin}`}
          >
            <FcGoogle className={styles.icon} />
            Sign in with Google
          </button>
        </li>
        <li>
          <button
            onClick={onLogin}
            className={`${styles.loginBtn} ${styles.githubLogin}`}
          >
            <FaGithub className={styles.icon} />
            Sign in with Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
