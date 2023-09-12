import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup, setError, clearError } from "../../redux/actions/authActions";
import styles from "./signup_form.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { checkmark } from "react-icons-kit/ionicons/checkmark";
import { close } from "react-icons-kit/ionicons/close";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // 这将用于跟踪是否显示弹窗
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (error) {
      setShowPopup(true); // 显示弹窗
    }
  }, [error]);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setShowPopup(true);
      dispatch(setError("Password doesn’t match."));
    } else {
      dispatch(signup({ user_email: email, user_password: password }));
    }
    if (error) {
      setShowPopup(true);
    }
  };

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
            <span>{error}</span>
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
              className={styles.passwordInput}
            />
            <span className={styles.icon} onClick={handleToggle}>
              <Icon className={styles.iconimage} icon={icon} size={16} />
            </span>
          </div>
        </div>

        {password && (
          <div>
            <label className={styles.label}>Confirm Password:</label>
            <div className={styles.password}>
              <input
                type={type}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={styles.inputSpacing}
              />
              <span className={styles.icon}>
                <Icon
                  className={styles.iconimage}
                  icon={password !== confirmPassword ? close : checkmark}
                  size={16}
                  style={{
                    color: password !== confirmPassword ? "red" : "green",
                  }}
                />
              </span>
            </div>
          </div>
        )}
        <button className={styles.button} onClick={handleSubmit}>
          Create My Account
        </button>
        <div className={styles.text2}>
          Already has an account?{" "}
          <Link to="../signin" className={styles.link1}>
            Log in
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

export default SignupForm;
