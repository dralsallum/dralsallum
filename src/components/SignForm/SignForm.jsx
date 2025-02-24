import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { register } from "../../redux/userRedux";
import { useNavigate } from "react-router-dom";

const SignForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const getArabicErrorMessage = (englishMessage) => {
    switch (englishMessage) {
      case "The email address is already in use by another account.":
        return "عنوان البريد الإلكتروني مستخدم بالفعل من قبل حساب آخر.";
      case "Invalid password":
        return "يجب أن تكون كلمة المرور مكونة من 6 عناصر وتحتوي على أحرف وأرقام.";
      // ... add other translations as needed
      default:
        return "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(inputs)).unwrap();
      navigate("/outcome"); // Redirect on successful registration
    } catch (error) {
      setErrorMessage(
        getArabicErrorMessage(error.message || "Registration failed.")
      );
    }
  };

  const isValidPassword = (password) => {
    const hasNumber = /\d/; // This tests for a number
    const hasLetter = /[a-zA-Z]/; // This tests for a letter
    return (
      password.length >= 6 &&
      hasNumber.test(password) &&
      hasLetter.test(password)
    );
  };

  const extractEmailPrefix = (email) => {
    return email.split("@")[0];
  };

  return (
    <SignContainer>
      <LoginContainer>
        <LoginSignHeader>تسجيل دخول</LoginSignHeader>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpForm onSubmit={handleSubmit}>
          <LoginSignSubHeader>ايميل</LoginSignSubHeader>
          <LoginSignInput
            name="email"
            placeholder="الايميل"
            onChange={handleChange}
          />
          <LoginSignSubHeader>الرقم السري</LoginSignSubHeader>
          <LoginSignInput
            type="password"
            name="password"
            placeholder="الباسورد"
            onChange={handleChange}
          />
          <SignButton>تسجيل حساب جديد</SignButton>
        </SignUpForm>
        <LoginSignPara>
          بتسجيل الدخول، أنت توافق على شروط استخدام ١٢انجليش. يُرجى الاطلاع على
          إشعار الخصوصية الخاص بنا، وإشعار الكوكيز، وإشعار الإعلانات المستندة
          إلى الاهتمامات.
        </LoginSignPara>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignForm;
