import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Menu, Plus, X, Loader2 } from "lucide-react";
import axios from "axios";
import NavTech from "../NavTech/NavTech";
import { useNavigate } from "react-router-dom";

const BREAKPOINT_PHONE = "640px";

/* 🎨 الألوان */
const COLORS = {
  green: "#ff7143",
  greenDark: "#ff5117",
  greenPill: "#DCE8DF",
  beigeBg: "#F5F3ED",
  white: "#FFFFFF",
  text: "#101010",
  textMuted: "#6B6B6B",
  orange: "#ff6b35",
};

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

/* 📦 Layout */
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  min-height: 100vh;
  background: #fff;
  direction: rtl;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    background: ${COLORS.beigeBg};
  }
`;

const Marquee = styled.div`
  background: ${COLORS.orange};
  color: white;
  padding: 8px 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    font-size: 12px;
    padding: 6px 0;
  }
`;

const MarqueeContent = styled.div`
  display: inline-block;
  animation: scroll 20s linear infinite;
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

/* 🧭 Hero Section */
const Hero = styled.div`
  text-align: center;
  padding: 60px 40px 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    padding: 18px 14px 8px;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  margin: 0 0 16px;
  line-height: 1.2;
  color: ${COLORS.text};
  letter-spacing: -0.3px;
  font-size: 56px;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    font-size: 32px;
    text-align: center;
  }
`;

const OrangeText = styled.span`
  color: ${COLORS.green};
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin: 0 0 40px;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    font-size: 14px;
    margin-bottom: 12px;
    color: ${COLORS.textMuted};
  }
`;

/* 🎛️ Filters */
const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 0 40px;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 8px;
    padding: 0 10px;
    margin: 6px 0 15px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  @media (max-width: ${BREAKPOINT_PHONE}) &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterButton = styled.button`
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  background: ${(p) => (p.active ? COLORS.green : COLORS.white)};
  color: ${(p) => (p.active ? COLORS.white : COLORS.text)};
  border: 1px solid ${(p) => (p.active ? "transparent" : "#E5E5E5")};

  &:hover {
    background: ${(p) => (p.active ? COLORS.greenDark : COLORS.white)};
    border-color: ${(p) => (p.active ? "transparent" : COLORS.green)};
  }

  @media (max-width: ${BREAKPOINT_PHONE}) {
    padding: 10px 16px;
    font-size: 13px;
    border: none;
    background: ${(p) => (p.active ? COLORS.green : COLORS.white)};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }
`;

/* 📋 Grid */
const ProblemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 80px;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 10px 80px;
  }
`;

const ProblemCard = styled.div`
  background: ${COLORS.white};
  border-radius: 20px;
  padding: 24px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: ${BREAKPOINT_PHONE}) {
    padding: 16px;
    min-height: 150px;
    border-radius: 18px;
    &:hover {
      transform: none;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
    }
  }
`;

const ProblemTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.45;
  margin: 0 0 14px;
  color: ${COLORS.text};
  text-align: center;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

const Badge = styled.span`
  align-self: center;
  display: inline-block;
  background: ${COLORS.green};
  color: ${COLORS.white};
  font-size: 11px;
  font-weight: 800;
  padding: 6px 12px;
  border-radius: 999px;
  letter-spacing: 0.3px;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    font-size: 10px;
    padding: 5px 10px;
  }
`;

const DateText = styled.span`
  align-self: center;
  color: ${COLORS.green};
  font-size: 13px;
  font-weight: 800;

  @media (max-width: ${BREAKPOINT_PHONE}) {
    font-size: 12px;
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${COLORS.green};
  color: ${COLORS.white};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(79, 143, 91, 0.3);
  transition: transform 0.2s;
  z-index: 35;

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: ${BREAKPOINT_PHONE}) {
    right: 14px;
    left: auto;
    bottom: 14px;
    width: 56px;
    height: 56px;
    border-radius: 999px;
  }
`;

/* ⏳ Loading */
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

const LoadingGear = styled(Loader2)`
  animation: ${spin} 1.2s linear infinite;
  color: ${COLORS.green};
  width: 56px;
  height: 56px;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: ${COLORS.green};
  margin-right: 2px;
  animation: ${blink} 1s step-end infinite;
  vertical-align: text-bottom;
`;

const Problem = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const fullText = "فعلاً الناس";
  const [displayedText, setDisplayedText] = useState("");
  const navigate = useNavigate();
  const genNav = (path) => navigate(path);
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100); // Speed: 150ms per character

      return () => clearTimeout(timeout);
    }
  }, [displayedText]);

  const filters = [
    "الكل",
    "العمل الحر",
    "الذكاء الاصطناعي",
    "تقنية",
    "بدون كود",
    "التصميم",
    "التسويق والمبيعات",
    "التجارة الإلكترونية",
    "البيع بالتجزئة",
    "المالية",
    "الموارد البشرية",
    "القانونية",
    "التعليم",
    "الطب والصحة",
    "الغذاء والتغذية",
    "الإعلام والمحتوى",
    "رأس المال الجريء",
    "تطوير العملاء",
    "اللوجستيات والتوصيل",
    "الدعم",
    "قطاع المرافق",
  ];

  const marqueeText = "تم الإنشاء بناءً على أساليب Y Combinator   ";

  // Helper function to truncate text to first 10 words
  const truncateToWords = (text, wordLimit = 12) => {
    if (!text) return "";
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  useEffect(() => {
    fetchProblems();
  }, [activeFilter]);

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const params = {};
      if (activeFilter !== "الكل") params.type = activeFilter;
      const res = await axios.get(
        "https://dralsallumapi-8efe1bd8f8df.herokuapp.com/api/combinator",
        { params }
      );
      setProblems(res.data);
    } catch (err) {
      console.error("Error fetching problems:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Marquee>
        <MarqueeContent>{marqueeText.repeat(20)}</MarqueeContent>
      </Marquee>

      <NavTech />

      <Hero>
        <Title>
          أفكار شركات ناشئة يحتاجها{" "}
          <OrangeText>
            {displayedText}
            <Cursor />
          </OrangeText>
        </Title>
        <Subtitle>مشاكل غير محلولة يرغب الناس في دفع المال لحلها.</Subtitle>
      </Hero>

      <FilterContainer>
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>

      {loading ? (
        <LoadingContainer>
          <LoadingGear />
        </LoadingContainer>
      ) : (
        <ProblemsGrid>
          {problems.length === 0 ? (
            <p style={{ textAlign: "center", width: "100%" }}>لا توجد نتائج</p>
          ) : (
            problems.map((p, index) => (
              <ProblemCard
                key={index}
                onClick={() => navigate(`/invest/${p._id}`)}
              >
                <ProblemTitle>{truncateToWords(p.describe)}</ProblemTitle>
                {p.type && <Badge>{p.type}</Badge>}{" "}
                {/* Changed from category to type */}
                <DateText>
                  {new Date(p.createdAt).toLocaleDateString("ar-SA")}
                </DateText>
              </ProblemCard>
            ))
          )}
        </ProblemsGrid>
      )}

      <FloatingButton
        aria-label="إضافة"
        onClick={() => {
          genNav("/shares");
        }}
      >
        <Plus size={26} />
      </FloatingButton>
    </Container>
  );
};

export default Problem;
