import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NavTech from "../NavTech/NavTech";
import { publicRequest } from "../../requestMethods";

/* =============== ANIMATION STYLES =============== */
const loadAnim = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const LoadingBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6px;
  background-color: #ddd;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const LoadingIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #87ceeb;
  animation: ${loadAnim} 1.5s infinite;
`;

const scaleAnim = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${scaleAnim} 1.5s ease-in-out infinite;
`;

/* =============== STYLED COMPONENTS =============== */
const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
`;

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  font-family: Arial, sans-serif;
  color: #333;
  padding: 2rem 1rem;
  direction: rtl;
  text-align: right;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeaderSection = styled.section`
  background: #f8f6f2;
  border-radius: 12px;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const HeaderText = styled.div`
  flex: 1;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

const HeaderImage = styled.img`
  width: 350px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const RocketEmoji = styled.span`
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-top: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex: 1;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const Sidebar = styled.aside`
  width: 300px;
  min-width: 250px;
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 2rem;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const SidebarTitle = styled.h3`
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SidebarPaperPlane = styled.span`
  font-size: 1.2rem;
`;

const SidebarSubtitle = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
`;

const EmailInput = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const SubscribeButton = styled.button`
  background: #00b4d8;
  color: #fff;
  padding: 0.7rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: #777;
  line-height: 1.4;
  margin-top: 1rem;
`;

/* =============== MAIN COMPONENT =============== */
const Resume = () => {
  const navigate = useNavigate();
  const { articleTitle } = useParams(); // الحصول على عنوان المقال من الرابط
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // حالات الاشتراك
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    const fetchArticleByTitle = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(`/articles/title/${articleTitle}`);
        setArticle(res.data);
      } catch (err) {
        setError("غير قادر على جلب بيانات المقال.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleByTitle();
  }, [articleTitle]);

  // دالة الاشتراك في النشرة الإخبارية
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail) {
      alert("الرجاء إدخال بريد إلكتروني");
      return;
    }
    setSubscribeSuccess(false);
    setSubscribeLoading(true);
    try {
      const response = await publicRequest.post("/applies", {
        email: subscribeEmail,
      });
      console.log("تم حفظ البريد الإلكتروني:", response.data);
      setSubscribeEmail("");
      setSubscribeSuccess(true);
    } catch (error) {
      console.error("خطأ في حفظ البريد الإلكتروني:", error);
      alert("حدث خطأ أثناء الاشتراك. يرجى المحاولة لاحقًا.");
    } finally {
      setSubscribeLoading(false);
    }
  };

  // في حال كان يتم التحميل أو حدث خطأ
  if (loading) {
    return (
      <LoadingWrapper>
        <LoadingBarContainer>
          <LoadingIndicator />
        </LoadingBarContainer>
        <p style={{ fontSize: "1.2rem", color: "#333" }}>جار التحميل...</p>
      </LoadingWrapper>
    );
  }
  if (error) {
    return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;
  }
  if (!article) {
    return <div style={{ textAlign: "center" }}>لم يتم العثور على المقال.</div>;
  }

  return (
    <PageContainer>
      <NavTech />

      {/* =============== القسم الرئيسي =============== */}
      <HeaderSection>
        <HeaderText>
          {/* العنوان والوصف القصير */}
          <Title>
            <RocketEmoji>🚀</RocketEmoji>
            {article.title}
          </Title>
          <Subtitle>{article.heading}</Subtitle>
        </HeaderText>

        {/* استخدام حقل 'imageUrl' من بيانات المقال */}
        <HeaderImage src={article.imageUrl} alt={article.title} />
      </HeaderSection>

      {/* =============== المحتوى + الشريط الجانبي =============== */}
      <ContentLayout>
        <MainContent>
          {/* render each heading and content block only if available */}
          {article.heading1 && (
            <>
              <SectionHeading>{article.heading1}</SectionHeading>
              {article.content1 && <Paragraph>{article.content1}</Paragraph>}
            </>
          )}

          {article.heading2 && (
            <>
              <SectionHeading>{article.heading2}</SectionHeading>
              {article.content2 && <Paragraph>{article.content2}</Paragraph>}
            </>
          )}

          {article.heading3 && (
            <>
              <SectionHeading>{article.heading3}</SectionHeading>
              {article.content3 && <Paragraph>{article.content3}</Paragraph>}
            </>
          )}

          {article.heading4 && (
            <>
              <SectionHeading>{article.heading4}</SectionHeading>
              {article.content4 && <Paragraph>{article.content4}</Paragraph>}
            </>
          )}

          {article.heading5 && (
            <>
              <SectionHeading>{article.heading5}</SectionHeading>
              {article.content5 && <Paragraph>{article.content5}</Paragraph>}
            </>
          )}

          {article.heading6 && (
            <>
              <SectionHeading>{article.heading6}</SectionHeading>
              {article.content6 && <Paragraph>{article.content6}</Paragraph>}
            </>
          )}

          {article.heading7 && (
            <>
              <SectionHeading>{article.heading7}</SectionHeading>
              {article.content7 && <Paragraph>{article.content7}</Paragraph>}
            </>
          )}
        </MainContent>

        {/* =============== الشريط الجانبي الثابت =============== */}
        <Sidebar>
          <SidebarTitle>
            <SidebarPaperPlane>✈️</SidebarPaperPlane>
            اشترك في لايف نوت
          </SidebarTitle>
          <SidebarSubtitle>
            انضم إلى أكثر من 260,000 قارئ يستمتعون بنشرتي الإخبارية المجانية
            الأسبوعية تقريباً حيث أشارك ما أقرأه وما تعلمته.
          </SidebarSubtitle>
          <form onSubmit={handleSubscribe}>
            <FormGroup>
              <EmailInput
                type="email"
                placeholder="بريدك الإلكتروني"
                required
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
              />
            </FormGroup>
            {subscribeLoading && (
              <LoadingBarContainer>
                <LoadingIndicator />
              </LoadingBarContainer>
            )}
            <SubscribeButton type="submit" disabled={subscribeLoading}>
              {subscribeLoading ? "جاري الاشتراك..." : "اشترك"}
            </SubscribeButton>
          </form>
          {subscribeSuccess && (
            <SuccessMessage>تم الاشتراك بنجاح!</SuccessMessage>
          )}
          <Disclaimer>
            بإرسال هذا النموذج، ستُسجل في نشرتي الإخبارية المجانية. يمكنك إلغاء
            الاشتراك في أي وقت. لمزيد من المعلومات، راجع سياسة الخصوصية.
          </Disclaimer>
        </Sidebar>
      </ContentLayout>
    </PageContainer>
  );
};

export default Resume;
