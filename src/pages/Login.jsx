import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/userRedux";
import {
  LoginContainer,
  RegistarButton,
  SignButton,
  LoginSignHeader,
  LoginSignInput,
  LoginSignPara,
  LoginSignSubHeader,
  SignContainer,
  SignUpForm,
} from "../components/SignForm/SignForm.elements";
import { Link, useNavigate } from "react-router-dom";
import { Footer, NavTech } from "../components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { isFetching } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "username" && value.length > 0) {
      newValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormInputs((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        signIn({
          username: formInputs.username,
          password: formInputs.password,
        })
      ).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(getArabicErrorMessage(error));
    }
  };

  const getArabicErrorMessage = (errorResponse) => {
    const englishMessage =
      typeof errorResponse === "string" ? errorResponse : errorResponse.message;
    switch (englishMessage) {
      case "Wrong credentials!":
        return "البيانات غير صحيحة. يرجى التحقق من اسم المستخدم أو كلمة المرور.";
      case "Account is locked. Try again later.":
        return "الحساب مقفل. يرجى المحاولة مرة أخرى لاحقًا.";
      case "Invalid password":
        return "يجب أن تكون كلمة المرور مكونة من 6 عناصر وتحتوي على أحرف وأرقام.";
      default:
        return "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.";
    }
  };

  return (
    <>
      <NavTech />
      <SignContainer>
        <LoginContainer>
          <LoginSignHeader>تسجيل دخول</LoginSignHeader>
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          <SignUpForm onSubmit={handleSignIn}>
            <LoginSignSubHeader>اسم المستخدم</LoginSignSubHeader>
            <LoginSignInput
              name="username"
              placeholder="اسم المستخدم"
              onChange={handleChange}
              value={formInputs.username}
            />
            <LoginSignSubHeader>الرقم السري</LoginSignSubHeader>
            <LoginSignInput
              type="password"
              name="password"
              placeholder="الباسورد"
              onChange={handleChange}
              value={formInputs.password}
            />
            <SignButton type="submit" disabled={isFetching}>
              {isFetching ? "جاري التسجيل..." : "تسجيل الدخول"}
            </SignButton>
          </SignUpForm>
          <LoginSignPara>
            بتسجيل الدخول، أنت توافق على شروط استخدام موقعنا. يُرجى الاطلاع على
            إشعار الخصوصية الخاص بنا، وإشعار الكوكيز، وإشعار الإعلانات المستندة
            إلى الاهتمامات.
          </LoginSignPara>
          <Link to="/signup">
            <RegistarButton>تسجيل حساب جديد</RegistarButton>
          </Link>
        </LoginContainer>
      </SignContainer>
      <Footer />
    </>
  );
};

export default Login;
