import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux"; // <-- استيراد إجراء addProduct
import NavTech from "../NavTech/NavTech";

/* الحاوية (الصفحة الكاملة) */
const ContainerAll = styled.div`
  direction: rtl;
  margin: 20px 30px;
  background: #f8f6f2;
  border-radius: 16px;
  overflow: hidden;
  position: relative; /* ضروري لتحديد موضع القائمة على الجوال */

  @media (max-width: 768px) {
    margin: 10px 15px;
    border-radius: 10px;
    min-height: 100vh;
    background: #f8f6f2;
    overflow: hidden;
  }
`;

/* ... باقي مكونات الستايل تبقى دون تغيير ... */

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 3rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroSubheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const EnrollButton = styled.button`
  background: #ff7143;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
`;

const VideoWrapper = styled.div`
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  height: 340px; /* نسبة العرض إلى الارتفاع التقريبية للمؤقت */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-weight: 600;
`;

const Career = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // دالة لإضافة المنتج إلى السلة (Redux) والتوجه إلى صفحة الدفع
  const handleEnroll = () => {
    // كائن المنتج المثال:
    const product = {
      _id: "PTYA001",
      title: "أكاديمية اليوتيوبر بدوام جزئي",
      price: 995,
      quantity: 1,
    };

    // إرسال المنتج إلى Redux
    dispatch(addProduct(product));

    // إعادة التوجيه إلى صفحة الدفع
    navigate("/outcome");
  };

  return (
    <ContainerAll>
      <NavTech />

      {/* قسم البطل */}
      <HeroSection>
        <HeroHeading>انضم إلى أكاديمية اليوتيوبر بدوام جزئي</HeroHeading>
        <HeroSubheading>
          اكتشف الاستراتيجيات والتقنيات المثبتة لتحقيق النجاح على يوتيوب — دون
          التخلي عن عملك اليومي
        </HeroSubheading>

        {/* الزر يقوم بتشغيل إجراء addProduct ثم ينتقل إلى صفحة الدفع */}
        <EnrollButton onClick={handleEnroll}>
          سجل الآن مقابل 995 دولار
        </EnrollButton>

        {/* عنصر نائب للفيديو أو الصورة */}
        <VideoWrapper>عنصر نائب للفيديو</VideoWrapper>
      </HeroSection>
    </ContainerAll>
  );
};

export default Career;
