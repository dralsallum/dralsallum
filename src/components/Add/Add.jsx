import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { publicRequest, userRequest } from "../../requestMethods";
import NavTech from "../NavTech/NavTech";

/* ========== Styled Components ========== */

const Container = styled.div`
  min-height: 80vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  direction: rtl;
`;

const ProgressBar = styled.div`
  height: 5px;
  background-color: #e0e0e0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: #ff7143;
    transition: width 0.3s ease;
  }
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 2rem;
  }
`;

const LeftSection = styled.div`
  padding-top: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;

  @media (max-width: 968px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  color: #000;

  @media (max-width: 968px) {
    font-size: 1.25rem;
  }
`;

const RightSection = styled.div`
  position: relative;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 350px;
  padding: 1.5rem;
  font-size: 1rem;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  resize: vertical;
  font-family: inherit;
  background-color: #f9f9f9;
  color: #000;
  direction: rtl;
  text-align: right;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #ff7143;
    background-color: #fff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.875rem 1.75rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackButton = styled(Button)`
  background-color: white;
  border: 2px solid #e0e0e0;
  color: #4a4a4a;
  width: 50px;
  height: 50px;
  padding: 0;
  justify-content: center;

  &:hover:not(:disabled) {
    background-color: #f5f5f5;
    border-color: #d0d0d0;
  }
`;

const NextButton = styled(Button)`
  background-color: #ff7143;
  color: white;
  padding: 0.875rem 2rem;

  &:hover:not(:disabled) {
    background-color: #ff551c;
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee;
  border: 1px solid #fcc;
  color: #c00;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: #ff7143;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.125rem;
  }
`;

/* ========== Enhanced Inputs ========== */

const QuestionCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const ToggleButton = styled.button`
  min-width: 150px;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid ${(props) => (props.active ? "#ff7143" : "#e0e0e0")};
  background-color: ${(props) => (props.active ? "#ff7143" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.active ? "0 4px 12px rgba(255,113,67,0.4)" : "none"};

  &:hover {
    border-color: #ff7143;
    background-color: ${(props) =>
      props.active ? "#ff5a1f" : "rgba(255,113,67,0.08)"};
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`;

const SelectLabel = styled.label`
  position: absolute;
  right: 1rem;
  top: -10px;
  background: #fff;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  color: #ff7143;
  pointer-events: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 1.25rem 1rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  background-color: #fff;
  color: #000;
  font-size: 1.05rem;
  direction: rtl;
  text-align: right;
  appearance: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff7143;
    box-shadow: 0 0 0 3px rgba(255, 113, 67, 0.15);
  }

  option {
    color: #000;
  }
`;

/* ========== Questions ========== */

const questions = [
  {
    id: 1,
    title: "١. اختر ما يناسبك لتجربة مخصصة أدق",
    description:
      "هل أنت مستثمر ---أم شركة ناشئة، أم شركة كبرى تبحث عن شركة ناشئة لحل مشكلة لديك؟ ",
    field: "type",
    type: "toggle",
  },
  {
    id: 2,
    title: "٢. اختر الفئة التي تنتمي إليها مشكلتك أو فكرتك.",
    description: "هذا يساعدنا في تصنيفها لتصل للأشخاص المناسبين.",
    field: "category",
    type: "select",
  },
  {
    id: 3,
    title: "٣. اوصف مشكلتك",
    description:
      "هنا، آلاف المطورين يبحثون عن أفكار لمشاريع ناشئة بناءً على مشاكل حقيقية.",
    placeholder: "الرجاء الوصف بمزيد من التفاصيل",
    field: "describe",
  },
  {
    id: 4,
    title: "٤. كم مرة حدثت هذه المشكلة؟",
    description: "معرفة تكرار المشكلة يساعدنا في فهم أهميتها.",
    placeholder: "مثال: يومياً، أسبوعياً، شهرياً",
    field: "occur",
  },
  {
    id: 5,
    title: "٥. ما هي المحاولات التي جربتها لحل المشكلة؟",
    description: "أخبرنا عن الحلول أو الطرق التي حاولت استخدامها.",
    placeholder: "صف المحاولات والحلول",
    field: "attempts",
  },
  {
    id: 6,
    title: `٦. كم تحتاج مبلغ استثمار "اذا كنت شركة ناشئة" ،كم مستعد انك تستثمر" اذا كنت مستثمر لحل هذه المشكلة؟`,
    description: "هذا يساعد المطورين على فهم القيمة.",
    placeholder: "مثال: ١٠٠ ريال، ٥٠٠ ريال، إلخ",
    field: "pay",
  },
  {
    id: 7,
    title: "٧. ما هو اسمك؟",
    description: "أخبرنا من أنت حتى يتمكن المطورون من التواصل معك.",
    placeholder: "اسمك الكامل أو اسم مستعار",
    field: "author",
  },
  {
    id: 8,
    title: "٧. دولة إقامتك وعمل المشروع",
    description:
      "اذكر الدولة التي تقيم فيها والدولة التي سيتم تنفيذ المشروع فيها.",
    placeholder: "مثال: المملكة العربية السعودية",
    field: "country",
  },
  {
    id: 9,
    title: "٧. ما هو حسابك على التيليقرام",
    description: "ادخل لحسابك بالتليقرام وانسخ رابط الحساب.",
    placeholder: "مثال: https://t.me/draalsallum",
    field: "telegram",
  },
];

/* ========== Component ========== */

const Add = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    describe: "",
    occur: "",
    attempts: "",
    pay: "",
    author: "",
    country: "",
    telegram: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => navigate("/task"), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  const handleNext = async () => {
    const field = currentQuestion.field;
    if (!formData[field]?.trim()) {
      setError("الرجاء ملء هذا الحقل قبل المتابعة");
      return;
    }
    setError("");
    if (currentStep === questions.length - 1) await handleSubmit();
    else setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
      const currentUser = user && JSON.parse(user).currentUser;
      const request = currentUser?.accessToken ? userRequest : publicRequest;

      await request.post("/combinator", formData);
      setIsSuccess(true);
    } catch (err) {
      setError("حدث خطأ أثناء إرسال البيانات. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ========== Render Field ========== */
  const renderField = () => {
    if (currentQuestion.type === "toggle") {
      return (
        <QuestionCard>
          <ToggleContainer>
            <ToggleButton
              active={formData.type === "مستثمر"}
              onClick={() => setFormData({ ...formData, type: "مستثمر" })}
            >
              مستثمر
            </ToggleButton>
            <ToggleButton
              active={formData.type === "شركة ناشئة"}
              onClick={() => setFormData({ ...formData, type: "شركة ناشئة" })}
            >
              شركة ناشئة
            </ToggleButton>
            <ToggleButton
              active={formData.type === "طالب خدمة"}
              onClick={() => setFormData({ ...formData, type: "طالب خدمة" })}
            >
              طالب خدمة
            </ToggleButton>
          </ToggleContainer>
        </QuestionCard>
      );
    }

    if (currentQuestion.type === "select") {
      return (
        <QuestionCard>
          <SelectWrapper>
            <SelectLabel>اختر الفئة</SelectLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="">— اختر الفئة —</option>
              <option value="العمل الحر">العمل الحر</option>
              <option value="الذكاء الاصطناعي">الذكاء الاصطناعي</option>
              <option value="تقنية">تقنية</option>
              <option value="بدون كود">بدون كود</option>
              <option value="التصميم">التصميم</option>
              <option value="التسويق والمبيعات">التسويق والمبيعات</option>
              <option value="التجارة الإلكترونية">التجارة الإلكترونية</option>
              <option value="البيع بالتجزئة">البيع بالتجزئة</option>
              <option value="المالية">المالية</option>
              <option value="الموارد البشرية">الموارد البشرية</option>
              <option value="القانونية">القانونية</option>
              <option value="التعليم">التعليم</option>
              <option value="الطب والصحة">الطب والصحة</option>
              <option value="الغذاء والتغذية">الغذاء والتغذية</option>
              <option value="الإعلام والمحتوى">الإعلام والمحتوى</option>
              <option value="رأس المال الجريء">رأس المال الجريء</option>
              <option value="تطوير العملاء">تطوير العملاء</option>
              <option value="اللوجستيات والتوصيل">اللوجستيات والتوصيل</option>
              <option value="الدعم">الدعم</option>
              <option value="قطاع المرافق">قطاع المرافق</option>
              <option value="أخرى">أخرى</option>
            </Select>
          </SelectWrapper>
        </QuestionCard>
      );
    }

    return (
      <TextArea
        placeholder={currentQuestion.placeholder}
        value={formData[currentQuestion.field]}
        onChange={(e) =>
          setFormData({ ...formData, [currentQuestion.field]: e.target.value })
        }
        disabled={isSubmitting}
      />
    );
  };

  /* ========== Success View ========== */
  if (isSuccess) {
    return (
      <Container>
        <Content>
          <div style={{ gridColumn: "1 / -1" }}>
            <SuccessMessage>
              <h2>✅ تم إرسال مشكلتك بنجاح!</h2>
              <p>شكراً لك على مشاركتك. سيتم مراجعتها قريباً.</p>
            </SuccessMessage>
          </div>
        </Content>
      </Container>
    );
  }

  /* ========== Main View ========== */
  return (
    <Container>
      <NavTech />
      <ProgressBar progress={progress} />
      <Content>
        <LeftSection>
          <Title>{currentQuestion.title}</Title>
          <Description>{currentQuestion.description}</Description>
        </LeftSection>

        <RightSection>
          {renderField()}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <ButtonContainer>
            <NextButton onClick={handleNext} disabled={isSubmitting}>
              {isSubmitting
                ? "جاري الإرسال..."
                : currentStep === questions.length - 1
                ? "إرسال"
                : "التالي"}{" "}
              <ChevronLeft size={20} />
            </NextButton>
            <BackButton
              onClick={handleBack}
              disabled={currentStep === 0 || isSubmitting}
            >
              <ChevronLeft size={20} />
            </BackButton>
          </ButtonContainer>
        </RightSection>
      </Content>
    </Container>
  );
};

export default Add;
