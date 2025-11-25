import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import NavTech from "../NavTech/NavTech";
import { useNavigate } from "react-router-dom";

/* 🎨 Elegant Color Palette (matches your image) */
const COLORS = {
  background: "#F7F8F4",
  heading: "#000000",
  text: "#333333",
  date: "#3B7E53",
  border: "#E6E6E6",
  highlightBg: "#E4D7EE",
  highlightText: "#3B2640",
  accent: "#ff7143",
};

/* ========== Styled Components ========== */
const Container = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.background};
  direction: rtl;
  font-family: "Tajawal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 40px;
`;

const Header = styled.header`
  background-color: white;
  border-bottom: 2px solid ${COLORS.border};
`;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 24px;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: ${COLORS.heading};
  line-height: 1.4;
  margin-bottom: 16px;
`;

const DateText = styled.div`
  color: ${COLORS.date};
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 48px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${COLORS.heading};
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${COLORS.text};
  margin-bottom: ${(props) => (props.$noMargin ? "0" : "24px")};
`;

const Highlight = styled.span`
  background-color: ${COLORS.highlightBg};
  color: ${COLORS.highlightText};
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 3px;
`;

const List = styled.ul`
  font-size: 18px;
  line-height: 1.8;
  padding-right: 24px;
  list-style: disc;
  color: ${COLORS.text};
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AuthorField = styled.p`
  font-size: 18px;
  color: ${COLORS.text};

  span {
    font-weight: 700;
    color: ${COLORS.heading};
  }
`;

const Link = styled.a`
  color: ${COLORS.accent};
  text-decoration: underline;
`;

const CommentsCard = styled.div`
  background-color: white;
  border: 1px solid ${COLORS.border};
  border-radius: 8px;
  padding: 32px;
  margin-bottom: 32px;
`;

const CommentsTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.heading};
  margin-bottom: 24px;
`;

const EmptyComments = styled.div`
  text-align: center;
  padding: 48px 0;
  color: #6b7280;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${COLORS.accent};
  color: white;
  font-weight: 600;
  padding: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ff5117;
  }
`;

const Footer = styled.footer`
  background-color: white;
  border-top: 1px solid ${COLORS.border};
  color: ${COLORS.text};
  padding: 24px 0;
  margin-top: 48px;
`;

const FooterContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FAB = styled.button`
  position: fixed;
  bottom: 32px;
  left: 32px;
  width: 56px;
  height: 56px;
  background-color: ${COLORS.accent};
  color: white;
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5117;
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => (props.$error ? "#dc2626" : "#6b7280")};
`;

/* ========== Main Component ========== */
const Invest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getId = () => {
    const path = window.location.pathname;
    const segments = path.split("/");
    return segments[segments.length - 1];
  };

  const handleNavigate = (des) => navigate(des);

  useEffect(() => {
    const fetchData = async () => {
      const id = getId();

      if (!id || id === "invest") {
        setLoading(false);
        setError("لم يتم تحديد رقم المشروع");
        return;
      }

      try {
        setLoading(true);
        const response = await publicRequest.get(`/combinator/${id}`);
        setData(response.data);

        setError(null);
      } catch (err) {
        setError("فشل تحميل تفاصيل المشروع");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingContainer>جاري التحميل...</LoadingContainer>;
  if (error) return <LoadingContainer $error>{error}</LoadingContainer>;
  if (!data) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ar-SA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

  const parseListItems = (text) => {
    const lines = text.split("\n");
    return lines
      .map((line, i) =>
        line.trim().startsWith("•") || line.trim().startsWith("-") ? (
          <ListItem key={i}>{line.replace(/^[•-]\s*/, "")}</ListItem>
        ) : null
      )
      .filter(Boolean);
  };

  return (
    <Container>
      <NavTech />

      <Main>
        <Title>{data.title || "مشروع استثماري جديد"}</Title>
        <DateText>{formatDate(data.createdAt)}</DateText>

        <Section>
          <SectionTitle>
            ١. وصف <Highlight>المشكلة</Highlight>
          </SectionTitle>
          <Text>{data.describe.split("\n")[0]}</Text>
          {data.describe.includes("•") && (
            <List>{parseListItems(data.describe)}</List>
          )}
        </Section>

        <Section>
          <SectionTitle>٢. عدد مرات حدوث المشكلة</SectionTitle>
          <Text $noMargin>{data.occur}</Text>
        </Section>

        <Section>
          <SectionTitle>٣. المحاولات السابقة للحل</SectionTitle>
          <Text $noMargin>{data.attempts}</Text>
        </Section>

        <Section>
          <SectionTitle>٤. المبلغ المقترح للحل</SectionTitle>
          <Text $noMargin>{data.pay}</Text>
        </Section>

        <Section>
          <SectionTitle>٥. معلومات صاحب الفكرة</SectionTitle>
          <AuthorInfo>
            <AuthorField>
              <span>الاسم:</span>{" "}
              {data.author.split(",")[0]?.trim() || "غير معروف"}
            </AuthorField>
            <AuthorField>
              <span>الدولة:</span>{" "}
              {data.author.split(",")[1]?.trim() || "غير محددة"}
            </AuthorField>
            <AuthorField>
              <span>وسيلة التواصل:</span>{" "}
              <Link
                href={data.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                تيليجرام
              </Link>
            </AuthorField>
          </AuthorInfo>
        </Section>

        <CommentsCard>
          <CommentsTitle>التعليقات</CommentsTitle>
          <EmptyComments>كن أول من يضيف تعليقًا</EmptyComments>
          <Button>تسجيل الدخول لإضافة تعليق</Button>
        </CommentsCard>
      </Main>

      <Footer>
        <FooterContent>
          <FooterLink href="#">قناة تيليجرام لمتابعة الفرص الجديدة</FooterLink>
        </FooterContent>
      </Footer>

      <FAB>
        <svg
          style={{ width: "24px", height: "24px" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </FAB>
    </Container>
  );
};

export default Invest;
