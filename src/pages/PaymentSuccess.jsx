import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";

const PageContainer = styled.div`
  background: #edf4f7;
  margin: 20px 30px;
  padding: 10px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  direction: rtl;
  text-align: right;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 10px;
    padding: 8px;
  }
`;

const SuccessWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #4caf50;
  border-radius: 50%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
`;

const SuccessTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #4caf50;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: right;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const WarningBox = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WarningIcon = styled.span`
  font-size: 1.2rem;
  color: #856404;
`;

const WarningText = styled.p`
  font-size: 0.95rem;
  color: #856404;
  margin: 0;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  background: #ff7143;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  &:hover {
    background: #e85a2b;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: #ff7143;
  border: 2px solid #ff7143;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  &:hover {
    background: #ff7143;
    color: #fff;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart when payment success page loads
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <PageContainer>
      <SuccessWrapper>
        <SuccessIcon>✓</SuccessIcon>

        <SuccessTitle>تم الدفع بنجاح!</SuccessTitle>

        <SuccessMessage>
          شكراً لك! تم استلام طلبك ومعالجة الدفع بنجاح.
        </SuccessMessage>

        <InfoBox>
          <InfoTitle>معلومات مهمة حول طلبك:</InfoTitle>
          <InfoText>
            • سيتم إرسال بريد إلكتروني يحتوي على اسم المستخدم وكلمة المرور
            الخاصة بك
          </InfoText>
          <InfoText>
            • سيصل البريد الإلكتروني خلال 3 إلى 24 ساعة من الآن
          </InfoText>
          <InfoText>
            • تأكد من التحقق من صندوق الوارد وملف الرسائل غير المرغوب فيها
            (Spam)
          </InfoText>
        </InfoBox>

        <WarningBox>
          <WarningIcon>⚠️</WarningIcon>
          <WarningText>
            تذكر: تحقق من مجلد الرسائل غير المرغوب فيها (Spam) إذا لم تجد البريد
            الإلكتروني في صندوق الوارد
          </WarningText>
        </WarningBox>

        <ButtonContainer>
          <PrimaryButton to="/">العودة للصفحة الرئيسية</PrimaryButton>
          <SecondaryButton to="/reach">تواصل معنا</SecondaryButton>
        </ButtonContainer>
      </SuccessWrapper>
    </PageContainer>
  );
};

export default PaymentSuccess;
