import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

const Header = styled.header`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderContent = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-weight: 500;
`;

const MenuButton = styled.button`
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Main = styled.main`
  max-width: 896px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const DateText = styled.div`
  color: #0d9488;
  font-weight: 500;
  margin-bottom: 48px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: ${(props) => (props.$noMargin ? "0" : "24px")};
`;

const List = styled.ul`
  font-size: 18px;
  line-height: 1.7;
  padding-left: 24px;
  list-style: disc;
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

  span {
    font-weight: bold;
  }
`;

const Link = styled.a`
  color: #0d9488;
  text-decoration: underline;
`;

const CommentsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  margin-bottom: 32px;
`;

const CommentsTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const EmptyComments = styled.div`
  text-align: center;
  padding: 48px 0;
  color: #6b7280;
`;

const Button = styled.button`
  width: 100%;
  background-color: #115e59;
  color: white;
  font-weight: 500;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #134e4a;
  }
`;

const Footer = styled.footer`
  background-color: #115e59;
  color: white;
  padding: 24px 0;
`;

const FooterContent = styled.div`
  max-width: 1152px;
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
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FAB = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  background-color: #115e59;
  color: white;
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #134e4a;
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => (props.$error ? "#dc2626" : "#6b7280")};
`;

const Invest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get ID from URL path
  const getId = () => {
    const path = window.location.pathname;
    const segments = path.split("/");
    return segments[segments.length - 1];
  };

  useEffect(() => {
    const fetchData = async () => {
      const id = getId();

      if (!id || id === "invest") {
        setLoading(false);
        setError("No problem ID provided");
        return;
      }

      try {
        setLoading(true);
        const response = await publicRequest.get(`/combinator/${id}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load problem details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (error) {
    return <LoadingContainer $error>{error}</LoadingContainer>;
  }

  if (!data) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
  };

  const parseListItems = (text) => {
    const lines = text.split("\n");
    return lines
      .map((line, index) => {
        if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
          return (
            <ListItem key={index}>{line.replace(/^[•-]\s*/, "")}</ListItem>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderContent>
          <Logo>
            <LogoIcon>P</LogoIcon>
            <LogoText>ProblemHunt</LogoText>
          </Logo>
          <HeaderActions>
            <LangButton>
              <span style={{ fontSize: "24px" }}>🇺🇸</span>
              <span>EN</span>
            </LangButton>
            <MenuButton>
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </MenuButton>
          </HeaderActions>
        </HeaderContent>
      </Header>

      {/* Main Content */}
      <Main>
        <Title>
          {data.title || "Automating HR and legal processes for companies"}
        </Title>
        <DateText>{formatDate(data.createdAt)}</DateText>

        {/* Problem Description */}
        <Section>
          <SectionTitle>1. Describe the problem:</SectionTitle>
          <Text>{data.describe.split("\n")[0]}</Text>
          {data.describe.includes("•") && (
            <List>{parseListItems(data.describe)}</List>
          )}
        </Section>

        {/* How Often */}
        <Section>
          <SectionTitle>2. How often does the problem occur?</SectionTitle>
          <Text $noMargin>{data.occur}</Text>
        </Section>

        {/* Attempts */}
        <Section>
          <SectionTitle>
            3. What attempts have you made to solve the problem?
          </SectionTitle>
          <Text $noMargin>{data.attempts}</Text>
        </Section>

        {/* Payment */}
        <Section>
          <SectionTitle>
            4. How much are you willing to pay for the solution?
          </SectionTitle>
          <Text $noMargin>{data.pay}</Text>
        </Section>

        {/* Author */}
        <Section>
          <SectionTitle>5. Problem author:</SectionTitle>
          <AuthorInfo>
            <AuthorField>
              <span>Name:</span> {data.author.split(",")[0]?.trim() || "Sergey"}
            </AuthorField>
            <AuthorField>
              <span>Country:</span>{" "}
              {data.author.split(",")[1]?.trim() || "Russia"}
            </AuthorField>
            <AuthorField>
              <span>Contacts:</span> <Link href="#">Telegram</Link>
            </AuthorField>
          </AuthorInfo>
        </Section>

        {/* Comments Section */}
        <CommentsCard>
          <CommentsTitle>Comments</CommentsTitle>
          <EmptyComments>Be the first to add a comment</EmptyComments>
          <Button>
            <svg
              style={{ width: "20px", height: "20px" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            LOG IN TO COMMENT
          </Button>
        </CommentsCard>
      </Main>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterLink href="#">
            Telegram channel with notifications about new problems
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </FooterLink>
        </FooterContent>
      </Footer>

      {/* Floating Action Button */}
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
