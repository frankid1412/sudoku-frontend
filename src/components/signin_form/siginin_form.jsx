import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, clearError } from "../../redux/actions/authActions";
import styles from "./signin_form.module.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from "react-router-dom";
import { HARDCODE_USER } from "../../constants/constants";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // 这将用于跟踪是否显示弹窗
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Check if the user input matches the hardcode user
    if (email === HARDCODE_USER.email && password === HARDCODE_USER.password) {
      navigate("/console");
      return;
    }
    // If it's not the hardcode user, dispatch the signin action
    dispatch(signin({ user_email: email, user_password: password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/console");
    }
    if (error) {
      setShowPopup(true); // 如果存在错误，显示弹窗
    }
  }, [isLoggedIn, navigate, error]);

  const handleClosePopup = () => {
    dispatch(clearError()); // 消除error
    setShowPopup(false); // 关闭弹窗
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.group3}>
        <div className={styles.logoHead}> ToolSmart</div>
        <div className={styles.text1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className={styles.frame1}>
        {showPopup && (
          <div className={styles.errorpopup}>
            <div>{error}</div>
            <button onClick={handleClosePopup}>x</button>
          </div>
        )}
        <div>
          <div className={styles.label}>Email</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={styles.emailInput}
          />
        </div>
        <div>
          <div className={styles.label}>Password</div>
          <div className={styles.password}>
            <input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.inputSpacing}
            />
            <span className={styles.icon} onClick={handleToggle}>
              <Icon className={styles.iconimage} icon={icon} size={16} />
            </span>
          </div>
        </div>
        <div className={styles.text2}>Forget Password?</div>
        <button className={styles.button} onClick={handleSubmit}>
          Login My Account
        </button>

        <div className={styles.text4}>
          New user?{" "}
          <Link to="../signup" className={styles.link1}>
            Sign up
          </Link>
        </div>

        <div className={styles.text3}>
          By continuing, you acknowledge that you have read and understood, and
          agree to ToolSmart's{" "}
          <Link to="/" className={styles.link1}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/" className={styles.link1}>
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
