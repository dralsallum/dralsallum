import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/userRedux";
import {
  LoginContainer,
  SignButton,
  LoginSignHeader,
  LoginSignInput,
  LoginSignPara,
  LoginSignSubHeader,
  SignContainer,
  SignUpForm,
} from "./SignForm.elements";
import { useNavigate } from "react-router-dom";

const SignForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { isFetching } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    // Auto capitalize the first letter of username
    if (name === "username" && value.length > 0) {
      newValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormInputs((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formInputs.password !== formInputs.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    dispatch(register(formInputs));
  };

  return (
    <SignContainer>
      <LoginContainer>
        <LoginSignHeader>إنشاء حساب جديد</LoginSignHeader>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpForm onSubmit={handleSubmit}>
          <LoginSignSubHeader>اسم المستخدم</LoginSignSubHeader>
          <LoginSignInput
            name="username"
            placeholder="اسم المستخدم"
            value={formInputs.username}
            onChange={handleChange}
          />
          <LoginSignSubHeader>ايميل</LoginSignSubHeader>
          <LoginSignInput
            name="email"
            placeholder="الايميل"
            value={formInputs.email}
            onChange={handleChange}
          />
          <LoginSignSubHeader>الرقم السري</LoginSignSubHeader>
          <LoginSignInput
            type="password"
            name="password"
            placeholder="الباسورد"
            value={formInputs.password}
            onChange={handleChange}
          />
          <LoginSignSubHeader>تاكيد الرقم السري</LoginSignSubHeader>
          <LoginSignInput
            type="password"
            name="confirmPassword"
            placeholder="تاكيد الباسورد"
            value={formInputs.confirmPassword}
            onChange={handleChange}
          />
          <SignButton type="submit" disabled={isFetching}>
            {isFetching ? (
              <>
                <i
                  className="fa fa-cog fa-spin"
                  style={{ marginRight: "8px" }}
                />
                جاري إنشاء الحساب...
              </>
            ) : (
              "إنشاء حساب جديد"
            )}
          </SignButton>
        </SignUpForm>
        <LoginSignPara>
          لديك حساب بالفعل؟{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            تسجيل الدخول
          </span>
        </LoginSignPara>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignForm;
