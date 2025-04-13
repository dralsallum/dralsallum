import React, { useState } from "react";
import styled from "styled-components";

// Mock product data
const mockProducts = [
  {
    _id: "1",
    name: "Weight Management Formula",
    price: 49.99,
    oldPrice: 69.99,
    category: "weight-management",
    tags: ["weight", "metabolism"],
    img: "https://via.placeholder.com/300x300/FF0000/FFFFFF?text=Weight+Mgmt",
    brand: "Hims",
    inStock: true,
    discount: 28,
  },
  {
    _id: "2",
    name: "Metabolism Booster",
    price: 39.99,
    category: "fat-burner",
    tags: ["metabolism", "energy", "weight"],
    img: "https://via.placeholder.com/300x300/00FF00/FFFFFF?text=Metabolism",
    brand: "Hims",
    inStock: true,
  },
  {
    _id: "3",
    name: "Appetite Control Supplement",
    price: 44.99,
    oldPrice: 59.99,
    category: "appetite-control",
    tags: ["weight", "appetite"],
    img: "https://via.placeholder.com/300x300/0000FF/FFFFFF?text=Appetite",
    brand: "Hims",
    inStock: true,
    discount: 25,
  },
  {
    _id: "4",
    name: "Wellness Complete Bundle",
    price: 89.99,
    oldPrice: 119.99,
    category: "bundle",
    tags: ["weight", "metabolism", "energy"],
    img: "https://via.placeholder.com/300x300/FF00FF/FFFFFF?text=Bundle",
    brand: "Hims",
    inStock: true,
    discount: 25,
  },
  {
    _id: "5",
    name: "Energy & Focus Formula",
    price: 34.99,
    category: "energy",
    tags: ["energy", "focus", "weight"],
    img: "https://via.placeholder.com/300x300/FFFF00/000000?text=Energy",
    brand: "Hims",
    inStock: false,
  },
];

// --- Styled Components ---
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #fdfaf7;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 32px;
  font-size: 36px;
  color: #b67f5e;
  font-weight: 500;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: #e5e5e5;
  border-radius: 4px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #b67f5e;
  width: ${(props) => props.progress}%;
  transition: width 0.4s ease-in-out;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${(props) => (props.centered ? "center" : "left")};
  margin-bottom: 40px;
`;

const InfoHeader = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #b67f5e;
  line-height: 1.2;
`;

const InfoSubheader = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
  color: #333;
  line-height: 1.4;
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  color: #555;
`;

const Chart = styled.div`
  background-color: #37302b;
  border-radius: 16px;
  padding: 30px;
  margin: 20px 0 40px;
  color: white;

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    opacity: 0.8;
  }
`;

const ChartImage = styled.div`
  height: 200px;
  background: linear-gradient(to bottom, #37302b 0%, #555 100%);
  position: relative;
  margin-top: 30px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #c89b67;
    border-radius: 3px;
    transform: rotate(-10deg);
  }
`;

const WeightGoal = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  background-color: #c89b67;
  color: #000;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const TimeMarker = styled.div`
  position: absolute;
  bottom: 10px;
  left: ${(props) => props.position || "10%"};
  color: white;
  font-size: 14px;
  opacity: 0.8;
`;

const Button = styled.button`
  padding: 18px 24px;
  background-color: ${(props) => (props.secondary ? "transparent" : "#000")};
  color: ${(props) => (props.secondary ? "#000" : "#fff")};
  border: ${(props) => (props.secondary ? "1px solid #000" : "none")};
  border-radius: 32px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: ${(props) => (props.fullWidth ? "block" : "inline-block")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: ${(props) => (props.secondary ? "#f5f5f5" : "#333")};
  }

  svg {
    margin-left: 8px;
    vertical-align: middle;
  }
`;

const Disclaimer = styled.div`
  font-size: 12px;
  color: #777;
  margin-top: 30px;
  line-height: 1.5;

  a {
    color: #777;
    text-decoration: underline;
  }
`;

// Quiz components
const QuestionContainer = styled.div`
  margin-bottom: 40px;
`;

const QuestionNumber = styled.div`
  font-size: 14px;
  color: #777;
  text-align: center;
  margin-bottom: 8px;
`;

const Question = styled.h2`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 32px;
  text-align: center;
  line-height: 1.4;
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Option = styled.button`
  padding: 18px 24px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.5;

  &:hover {
    border-color: #b67f5e;
    background-color: #fdfaf7;
    box-shadow: 0 2px 8px rgba(182, 127, 94, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #b67f5e;
    box-shadow: 0 0 0 2px rgba(182, 127, 94, 0.3);
  }
`;

// Product components
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const ProductCard = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
  flex-grow: 1;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #777;
  font-size: 14px;
`;

const DiscountTag = styled.span`
  background-color: #e53e3e;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #b67f5e;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: auto;

  &:hover {
    background-color: #a26a4a;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ResultHeader = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 60px 0;
  color: #555;
`;

// Information cards for intermittent info screens
const InfoCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const InfoCardTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #b67f5e;
`;

const InfoCardContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

const FactBox = styled.div`
  background-color: #f7f3ef;
  border-left: 4px solid #b67f5e;
  padding: 16px;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
`;

const FactTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

// --- Main Component ---
const Quiz = () => {
  // States for controlling the flow
  const [flowStep, setFlowStep] = useState("intro"); // intro, goalInfo, progressInfo, quiz, infoBreak, loading, results
  const [quizStep, setQuizStep] = useState(0);
  const [currentInfoBreak, setCurrentInfoBreak] = useState(0);
  const [answers, setAnswers] = useState({});
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  // For text-based questions, hold the user's typed input:
  const [textInput, setTextInput] = useState("");

  // 1) Your new quiz questions:
  const questions = [
    {
      id: "sex",
      question:
        "What is your sex? (Answer format: Multiple choice – e.g., Male or Female)​",
      type: "multiple",
      options: ["Male", "Female"],
      source: "healthline.com",
    },
    {
      id: "pregnancy",
      question:
        "If you are female, are you currently pregnant, breastfeeding, or planning to become pregnant? (Answer format: Multiple choice – asked only if applicable).",
      type: "multiple",
      options: [
        "Not applicable (I'm not female)",
        "No, not pregnant/breastfeeding",
        "Pregnant",
        "Breastfeeding",
        "Planning pregnancy",
      ],
      source: "",
    },
    {
      id: "location",
      question:
        "Where do you live? (Answer format: Enter location, e.g. ZIP code or country)​",
      type: "text",
      options: [],
      source: "dtcpatterns.com",
    },
    {
      id: "pastVitamins",
      question:
        "Have you ever taken vitamins or supplements in the past? (Answer format: Yes/No)​",
      type: "multiple",
      options: ["Yes", "No"],
      source: "healthline.com",
    },
    {
      id: "currentSupplements",
      question:
        'How many vitamins or supplements do you currently take? (Answer format: Multiple choice – e.g., "None", "1–2", "3–5", "More than 5")​',
      type: "multiple",
      options: ["None", "1–2", "3–5", "More than 5"],
      source: "thecustomerdigest.com",
    },
    {
      id: "familiarity",
      question:
        "How familiar are you with vitamins and supplements? (Answer format: Multiple choice – self-assessment of knowledge level)​",
      type: "multiple",
      options: [
        "Not familiar at all",
        "Slightly familiar",
        "Moderately familiar",
        "Very familiar",
      ],
      source: "thecustomerdigest.com",
    },
    {
      id: "powders",
      question:
        "Do you use any supplemental powders (such as protein shakes or drink mixes)? (Answer format: Yes/No)​",
      type: "multiple",
      options: ["Yes", "No"],
      source: "thecustomerdigest.com",
    },
    {
      id: "healthGoals",
      question:
        "What are your health goals or areas you’d like to focus on? (Answer format: Multiple selection – choose one or more: Immunity, Sleep, Stress, Energy, Fitness, Digestion, Skin, Heart health, Cognitive health, or Overall wellness)​",
      type: "multiple",
      options: [
        "Immunity",
        "Sleep",
        "Stress",
        "Energy",
        "Fitness",
        "Digestion",
        "Skin",
        "Heart health",
        "Cognitive health",
        "Overall wellness",
      ],
      source: "dtcpatterns.com / healthline.com",
    },
    {
      id: "exerciseFrequency",
      question:
        "How often do you exercise in a typical week? (Answer format: Multiple choice – e.g., 'Never', '1–2 times', '3–5 times', '6+ times')​",
      type: "multiple",
      options: ["Never", "1–2 times", "3–5 times", "6+ times"],
      source: "thecustomerdigest.com",
    },
    {
      id: "exerciseTypes",
      question:
        "What types of exercise do you usually do? (Answer format: Multiple choice – select all that apply, e.g., cardio, strength training, yoga)​",
      type: "multiple",
      options: [
        "Cardio",
        "Strength training",
        "Yoga",
        "High-intensity intervals",
        "Other / No exercise",
      ],
      source: "thecustomerdigest.com",
    },
    {
      id: "skinCondition",
      question:
        "How would you describe your skin’s condition? (e.g., is your skin often dry?) (Answer format: Multiple choice)​",
      type: "multiple",
      options: ["Very dry", "Somewhat dry", "Neutral", "Well-hydrated"],
      source: "thecustomerdigest.com / dtcpatterns.com",
    },
    {
      id: "stressLevel",
      question:
        "How would you rate your typical stress level? (Answer format: Multiple choice or scale – e.g., low, moderate, high)​",
      type: "multiple",
      options: ["Low", "Moderate", "High"],
      source: "dtcpatterns.com",
    },
    {
      id: "sleepHours",
      question:
        "How many hours of sleep do you usually get per night? (Answer format: Multiple choice – shown if sleep is a goal)​",
      type: "multiple",
      options: ["<5 hours", "5-6 hours", "6-7 hours", "7-8 hours", "8+ hours"],
      source: "",
    },
    {
      id: "energyLevels",
      question:
        "How would you describe your daily energy levels? (Answer format: Multiple choice – e.g., often tired, some ups and downs, generally energetic)​",
      type: "multiple",
      options: ["Often tired", "Some ups and downs", "Generally energetic"],
      source: "",
    },
    {
      id: "digestiveDiscomfort",
      question:
        "How often do you experience digestive discomfort (such as bloating or indigestion)? (Answer format: Multiple choice – rarely, sometimes, frequently)​",
      type: "multiple",
      options: ["Rarely", "Sometimes", "Frequently"],
      source: "",
    },
    {
      id: "getSick",
      question:
        "How often do you tend to get sick (e.g., colds in a year)? (Answer format: Multiple choice – e.g., rarely (0–1 times), sometimes (2–3), often (4+ per year))​",
      type: "multiple",
      options: ["Rarely (0–1)", "Sometimes (2–3)", "Often (4+)"],
      source: "",
    },
    {
      id: "heartConcerns",
      question:
        "Do you have any specific heart health concerns (like high blood pressure or high cholesterol)? (Answer format: Multiple choice)​",
      type: "multiple",
      options: [
        "None",
        "High blood pressure",
        "High cholesterol",
        "Other heart concerns",
      ],
      source: "",
    },
    {
      id: "focusMemory",
      question:
        "Do you experience difficulty with focus or memory? (Answer format: Multiple choice – e.g., Yes/No)​",
      type: "multiple",
      options: ["Yes", "No"],
      source: "",
    },
    {
      id: "fruitVeggies",
      question:
        "How many servings of fruits and vegetables do you eat on most days? (Answer format: Multiple choice – select an approximate number)​",
      type: "multiple",
      options: ["0-1", "2-3", "4-5", "6+"],
      source: "healthline.com",
    },
    {
      id: "fermentedFoods",
      question:
        "How often do you eat fermented foods (such as yogurt, kombucha, or kimchi)? (Answer format: Multiple choice)​",
      type: "multiple",
      options: ["Daily", "A few times a week", "Rarely", "Never"],
      source: "thecustomerdigest.com",
    },
    {
      id: "fiber",
      question:
        "Would you say you get enough fiber in your diet? (Answer format: Multiple choice – assess as low/adequate/high)​",
      type: "multiple",
      options: ["Low", "Adequate", "High"],
      source: "thecustomerdigest.com",
    },
    {
      id: "dietPattern",
      question:
        "Do you follow any particular diet or dietary pattern? (Answer format: Multiple selection – e.g., Vegan, Vegetarian, Paleo, Gluten-free/Celiac, None)​",
      type: "multiple",
      options: [
        "None",
        "Vegan",
        "Vegetarian",
        "Paleo",
        "Gluten-free/Celiac",
        "Other",
      ],
      source: "thecustomerdigest.com",
    },
    {
      id: "allergies",
      question:
        "Do you have any food allergies or sensitivities? (Answer format: Multiple selection – e.g., Dairy, Soy, Gluten, Shellfish, etc)​",
      type: "multiple",
      options: [
        "None",
        "Dairy",
        "Soy",
        "Gluten",
        "Shellfish",
        "Ragweed",
        "Other",
      ],
      source: "thecustomerdigest.com",
    },
    {
      id: "smoke",
      question: "Do you smoke? (Answer format: Yes/No)​",
      type: "multiple",
      options: ["Yes", "No"],
      source: "healthline.com",
    },
  ];

  // Info breaks: same logic
  const infoBreaks = [
    {
      title: "Your Metabolism & Weight",
      content: (
        <>
          <InfoCardContent>
            Your body composition and metabolism play crucial roles in weight
            management. Research shows that metabolic rates can vary by up to
            20% between individuals with similar characteristics.
          </InfoCardContent>
          <FactBox>
            <FactTitle>Did you know?</FactTitle>
            <p>
              Building muscle through strength training can increase your
              resting metabolic rate, helping you burn more calories even when
              not exercising.
            </p>
          </FactBox>
        </>
      ),
    },
    {
      title: "Lifestyle Factors",
      content: (
        <>
          <InfoCardContent>
            Sleep quality and stress management are often overlooked in weight
            loss journeys. Poor sleep can increase hunger hormones by up to 15%
            and decrease the hormones that signal fullness.
          </InfoCardContent>
          <FactBox>
            <FactTitle>Research insight</FactTitle>
            <p>
              Studies show that people who sleep less than 7 hours per night are
              30% more likely to gain weight than those who get 7+ hours
              regularly.
            </p>
          </FactBox>
        </>
      ),
    },
    {
      title: "Medical Considerations",
      content: (
        <>
          <InfoCardContent>
            Certain medical conditions can significantly impact your ability to
            lose weight. Conditions like hypothyroidism can slow metabolism by
            30% or more if untreated.
          </InfoCardContent>
          <FactBox>
            <FactTitle>Important note</FactTitle>
            <p>
              Always consult with a healthcare provider before starting any
              weight management program, especially if you have existing medical
              conditions.
            </p>
          </FactBox>
        </>
      ),
    },
    {
      title: "Behavior & Habits",
      content: (
        <>
          <InfoCardContent>
            Small behavioral changes can lead to significant results over time.
            Replacing just one sugary drink per day with water can result in 10+
            pounds of weight loss over a year.
          </InfoCardContent>
          <FactBox>
            <FactTitle>Success strategies</FactTitle>
            <p>
              People who track their food intake consistently lose 2-3 times
              more weight than those who don't monitor what they eat.
            </p>
          </FactBox>
        </>
      ),
    },
  ];

  // Calculate progress percentage
  const getProgressPercentage = () => {
    const steps = [
      "intro",
      "goalInfo",
      "progressInfo",
      "quiz",
      "loading",
      "results",
    ];
    const currentIndex = steps.indexOf(flowStep);

    if (flowStep === "quiz") {
      // ~60% of overall progress for the quiz
      const quizPercentage = ((quizStep + 1) / questions.length) * 100 * 0.6;
      return 30 + quizPercentage; // quiz starts at ~30%
    }

    if (flowStep === "infoBreak") {
      const quizPercentageBefore =
        (getLastQuestionIndexBeforeBreak(currentInfoBreak) / questions.length) *
        100 *
        0.6;
      return 30 + quizPercentageBefore;
    }

    return (currentIndex / (steps.length - 1)) * 100;
  };

  // Get last question index before an info break
  const getLastQuestionIndexBeforeBreak = (breakIndex) => {
    // Each info break after 3 questions
    return (breakIndex + 1) * 3;
  };

  // Show info break after every 3 questions (if breaks left)
  const shouldShowInfoBreak = (currentStep) => {
    const baseCondition =
      (currentStep + 1) % 3 === 0 && currentStep < questions.length - 1;
    return (
      baseCondition && Math.floor(currentStep / 3) < infoBreaks.length // ensure we don't run out of breaks
    );
  };

  // Go to next question or step
  const handleSelectOption = (value) => {
    const currentQuestionId = questions[quizStep].id;
    const updatedAnswers = { ...answers, [currentQuestionId]: value };
    setAnswers(updatedAnswers);

    // Clear text input so it’s empty for next potential text question
    setTextInput("");

    // If last question answered, go to loading...
    if (quizStep === questions.length - 1) {
      setFlowStep("loading");
      // Simulate an API call
      setTimeout(() => {
        // Minimal product filtering example:
        let filteredProducts = [...mockProducts];
        // For instance, if user is "Male" -> pick only products w/ metabolism tag
        if (updatedAnswers.sex === "Male") {
          filteredProducts = filteredProducts.filter((p) =>
            p.tags.includes("metabolism")
          );
          if (!filteredProducts.length) {
            filteredProducts = [...mockProducts]; // fallback if none found
          }
        }
        // Show top 3
        filteredProducts = filteredProducts.slice(0, 3);
        setProducts(filteredProducts);
        setFlowStep("results");
      }, 1200);
    }
    // else if we show an info break
    else if (shouldShowInfoBreak(quizStep)) {
      setCurrentInfoBreak(Math.floor(quizStep / 3));
      setFlowStep("infoBreak");
    }
    // otherwise move to next question
    else {
      setQuizStep(quizStep + 1);
    }
  };

  // Continue from info break back to quiz
  const handleContinueFromInfoBreak = () => {
    setQuizStep(quizStep + 1);
    setFlowStep("quiz");
  };

  // Add product to basket
  const handleAddToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
    alert(
      `Added ${product.name} to your basket! Basket items: ${basket.length + 1}`
    );
  };

  // Render content
  const renderContent = () => {
    switch (flowStep) {
      case "intro":
        return (
          <>
            <ContentContainer centered>
              <InfoHeader>Explore weight loss plans.</InfoHeader>
              <InfoSubheader>
                Learn about treatment options based on your goals, habits, and
                health history.
              </InfoSubheader>
            </ContentContainer>
            <Button fullWidth onClick={() => setFlowStep("goalInfo")}>
              Continue
            </Button>
            <Disclaimer>
              By clicking 'Continue', you agree that Hims may use your responses
              to personalize your experience and other purposes as described in
              our <a href="#">Privacy Policy</a>. Responses prior to account
              creation will not be used as part of your medical assessment.
            </Disclaimer>
          </>
        );

      case "goalInfo":
        return (
          <>
            <Logo>hims</Logo>
            <ContentContainer>
              <InfoHeader>
                Your goal to lose{" "}
                <span style={{ color: "#b67f5e" }}>16-50 lbs</span> is closer
                than you think—and it doesn't involve restrictive diets.
              </InfoHeader>
              <InfoSubheader>
                To find a custom plan for you, we'll need to build your Weight
                Loss Profile first.
              </InfoSubheader>
              <div style={{ marginTop: "40px" }}>
                <InfoHeader style={{ fontSize: "28px" }}>Ready?</InfoHeader>
              </div>
            </ContentContainer>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => setFlowStep("progressInfo")}>
                Next
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </div>
          </>
        );

      case "progressInfo":
        return (
          <>
            <ContentContainer>
              <Chart>
                <h2>Lose up to 20% of your weight</h2>
                <p>
                  On average, people lost 15-20% of their body weight in a
                  68-week clinical trial study of Wegovy®*
                </p>
                <ChartImage>
                  <TimeMarker position="10%">1mo</TimeMarker>
                  <TimeMarker position="50%">6mo</TimeMarker>
                  <WeightGoal>Goal weight</WeightGoal>
                </ChartImage>
              </Chart>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={() => setFlowStep("quiz")}>
                  Next
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            </ContentContainer>
          </>
        );

      case "quiz":
        const currentQuestionData = questions[quizStep];
        return (
          <>
            <Logo>hims</Logo>
            <QuestionContainer>
              <QuestionNumber>
                Question {quizStep + 1} of {questions.length}
              </QuestionNumber>
              <Question>{currentQuestionData.question}</Question>

              {/* If it's multiple-choice */}
              {currentQuestionData.type === "multiple" &&
                currentQuestionData.options.length > 0 && (
                  <OptionsContainer>
                    {currentQuestionData.options.map((option) => (
                      <Option
                        key={option}
                        onClick={() => handleSelectOption(option)}
                      >
                        {option}
                      </Option>
                    ))}
                  </OptionsContainer>
                )}

              {/* If it's text-based, show input + Continue button */}
              {currentQuestionData.type === "text" && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    style={{
                      padding: "12px",
                      width: "80%",
                      maxWidth: "300px",
                      fontSize: "16px",
                      marginBottom: "20px",
                    }}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                  />
                  <br />
                  <Button
                    // (Optional) disable if empty
                    disabled={!textInput.trim()}
                    onClick={() => handleSelectOption(textInput.trim())}
                  >
                    Continue
                  </Button>
                </div>
              )}
            </QuestionContainer>
          </>
        );

      case "infoBreak":
        const currentBreak = infoBreaks[currentInfoBreak];
        return (
          <>
            <Logo>hims</Logo>
            <ContentContainer>
              <InfoHeader style={{ fontSize: "28px" }}>
                Building Your Weight Loss Profile
              </InfoHeader>
              <InfoSubheader>
                Thanks for sharing those details. Let's look at how they factor
                into your weight management journey.
              </InfoSubheader>

              <InfoCard>
                <InfoCardTitle>{currentBreak.title}</InfoCardTitle>
                {currentBreak.content}
              </InfoCard>

              <InfoText>
                Just a few more questions to complete your personalized profile.
              </InfoText>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button onClick={handleContinueFromInfoBreak}>
                  Continue
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            </ContentContainer>
          </>
        );

      case "loading":
        return (
          <>
            <Logo>hims</Logo>
            <ContentContainer centered>
              <LoadingMessage>
                Analyzing your responses and building your weight management
                profile...
              </LoadingMessage>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="#b67f5e"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="94.2477796077"
                    strokeDashoffset="47.1238898038"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </ContentContainer>
          </>
        );

      case "results":
        return (
          <>
            <Logo>hims</Logo>
            <ContentContainer>
              <ResultHeader>
                Your Recommended Weight Management Products
              </ResultHeader>
              <InfoSubheader>
                Based on your profile, we've selected these products to help you
                reach your weight loss goals.
              </InfoSubheader>
              <InfoText>
                Each product addresses different aspects of weight management,
                from appetite control to metabolism support.
              </InfoText>
              <ProductsContainer>
                {products.map((product) => (
                  <ProductCard key={product._id}>
                    <ProductImage src={product.img} alt={product.name} />
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>
                      ${product.price.toFixed(2)}
                      {product.oldPrice && (
                        <>
                          <OriginalPrice>
                            ${product.oldPrice.toFixed(2)}
                          </OriginalPrice>
                          {product.discount && (
                            <DiscountTag>{product.discount}% OFF</DiscountTag>
                          )}
                        </>
                      )}
                    </ProductPrice>
                    <AddButton
                      onClick={() => handleAddToBasket(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? "Add to Basket" : "Out of Stock"}
                    </AddButton>
                  </ProductCard>
                ))}
              </ProductsContainer>
              <div style={{ marginTop: "40px" }}>
                <InfoText>
                  Want to explore more options? Check out our full catalog for
                  additional weight management solutions.
                </InfoText>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Button secondary onClick={() => setFlowStep("intro")}>
                    Restart Quiz
                  </Button>
                  <Button onClick={() => (window.location.href = "/catalog")}>
                    View Full Catalog
                  </Button>
                </div>
              </div>
              <Disclaimer>
                *Individual results may vary. Products have not been evaluated
                by the FDA and are not intended to diagnose, treat, cure, or
                prevent any disease. Please consult with a healthcare
                professional before starting any supplement regimen.
              </Disclaimer>
            </ContentContainer>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <ProgressBar>
        <Progress progress={getProgressPercentage()} />
      </ProgressBar>
      {renderContent()}
    </Container>
  );
};

export default Quiz;
