// Quiz.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

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

const Navbar = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures logo on left, basket on right */
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

/** A simpler "hims" logo for the navbar */
const NavLogo = styled.div`
  font-size: 24px;
  color: #b67f5e;
  font-weight: 700;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

/** Basket wrapper can shake with animation if 'shake' prop is true */
const BasketWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  position: relative;

  ${({ shake }) =>
    shake &&
    `
    animation: shake 0.5s;
    @keyframes shake {
      0% { transform: translate(0, 0) rotate(0deg); }
      20% { transform: translate(-2px, 0) rotate(-2deg); }
      40% { transform: translate(2px, 0) rotate(2deg); }
      60% { transform: translate(-2px, 0) rotate(-2deg); }
      80% { transform: translate(2px, 0) rotate(2deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
  `}
`;

const BasketIcon = styled.span`
  margin-right: 8px;
`;

const CartCount = styled.span`
  background: #b67f5e;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
`;

/** Small notification for "Product added to basket" feedback **/
const Notification = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  z-index: 999;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 32px;
  font-size: 36px;
  color: #b67f5e;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 28px;
  }
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
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  text-align: ${(props) => (props.centered ? "center" : "left")};
`;

const InfoHeader = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #b67f5e;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const InfoSubheader = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 24px;
  color: #333;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

  ${({ selected }) =>
    selected &&
    `
    border-color: #b67f5e;
    background-color: #fdfaf7;
    box-shadow: 0 2px 8px rgba(182, 127, 94, 0.15);
  `}

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

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #b67f5e;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// --- Main Component ---
const Quiz = () => {
  // Flow states
  const [flowStep, setFlowStep] = useState("intro");
  const [quizStep, setQuizStep] = useState(0);
  const [currentInfoBreak, setCurrentInfoBreak] = useState(0);
  const [answers, setAnswers] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState("");

  // NEW: local state for feedback notification AND basket shake
  const [addedMessage, setAddedMessage] = useState("");
  const [shakeBasket, setShakeBasket] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.quantity);

  // Quiz questions array
  const questions = [
    {
      id: "sex",
      question: "What is your sex?",
      type: "multiple",
      options: ["Male", "Female"],
    },
    {
      id: "pregnancy",
      question:
        "If you are female, are you currently pregnant, breastfeeding, or planning to become pregnant?",
      type: "multiple",
      options: [
        "Not applicable (I'm not female)",
        "No, not pregnant/breastfeeding",
        "Pregnant",
        "Breastfeeding",
        "Planning pregnancy",
      ],
    },
    {
      id: "location",
      question: "Where do you live? (Enter location, e.g. ZIP code or country)",
      type: "text",
      options: [],
    },
    {
      id: "pastVitamins",
      question: "Have you ever taken vitamins or supplements in the past?",
      type: "multiple",
      options: ["Yes", "No"],
    },
    {
      id: "currentSupplements",
      question: "How many vitamins or supplements do you currently take?",
      type: "multiple",
      options: ["None", "1–2", "3–5", "More than 5"],
    },
    {
      id: "familiarity",
      question: "How familiar are you with vitamins and supplements?",
      type: "multiple",
      options: [
        "Not familiar at all",
        "Slightly familiar",
        "Moderately familiar",
        "Very familiar",
      ],
    },
    {
      id: "powders",
      question:
        "Do you use any supplemental powders (such as protein shakes or drink mixes)?",
      type: "multiple",
      options: ["Yes", "No"],
    },
    {
      id: "healthGoals",
      question: "What are your health goals or areas you'd like to focus on?",
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
      multiSelect: true,
    },
    {
      id: "exerciseFrequency",
      question: "How often do you exercise in a typical week?",
      type: "multiple",
      options: ["Never", "1–2 times", "3–5 times", "6+ times"],
    },
    {
      id: "exerciseTypes",
      question: "What types of exercise do you usually do?",
      type: "multiple",
      options: [
        "Cardio",
        "Strength training",
        "Yoga",
        "High-intensity intervals",
        "Other / No exercise",
      ],
      multiSelect: true,
    },
    {
      id: "skinCondition",
      question: "How would you describe your skin's condition?",
      type: "multiple",
      options: ["Very dry", "Somewhat dry", "Neutral", "Well-hydrated"],
    },
    {
      id: "stressLevel",
      question: "How would you rate your typical stress level?",
      type: "multiple",
      options: ["Low", "Moderate", "High"],
    },
    {
      id: "sleepHours",
      question: "How many hours of sleep do you usually get per night?",
      type: "multiple",
      options: ["<5 hours", "5-6 hours", "6-7 hours", "7-8 hours", "8+ hours"],
    },
    {
      id: "energyLevels",
      question: "How would you describe your daily energy levels?",
      type: "multiple",
      options: ["Often tired", "Some ups and downs", "Generally energetic"],
    },
    {
      id: "digestiveDiscomfort",
      question:
        "How often do you experience digestive discomfort (such as bloating or indigestion)?",
      type: "multiple",
      options: ["Rarely", "Sometimes", "Frequently"],
    },
    {
      id: "getSick",
      question: "How often do you tend to get sick (e.g., colds in a year)?",
      type: "multiple",
      options: ["Rarely (0–1)", "Sometimes (2–3)", "Often (4+)"],
    },
    {
      id: "heartConcerns",
      question: "Do you have any specific heart health concerns?",
      type: "multiple",
      options: [
        "None",
        "High blood pressure",
        "High cholesterol",
        "Other heart concerns",
      ],
    },
    {
      id: "focusMemory",
      question: "Do you experience difficulty with focus or memory?",
      type: "multiple",
      options: ["Yes", "No"],
    },
    {
      id: "fruitVeggies",
      question:
        "How many servings of fruits and vegetables do you eat on most days?",
      type: "multiple",
      options: ["0-1", "2-3", "4-5", "6+"],
    },
    {
      id: "fermentedFoods",
      question:
        "How often do you eat fermented foods (such as yogurt, kombucha, or kimchi)?",
      type: "multiple",
      options: ["Daily", "A few times a week", "Rarely", "Never"],
    },
    {
      id: "fiber",
      question: "Would you say you get enough fiber in your diet?",
      type: "multiple",
      options: ["Low", "Adequate", "High"],
    },
    {
      id: "dietPattern",
      question: "Do you follow any particular diet or dietary pattern?",
      type: "multiple",
      options: [
        "None",
        "Vegan",
        "Vegetarian",
        "Paleo",
        "Gluten-free/Celiac",
        "Other",
      ],
    },
    {
      id: "allergies",
      question: "Do you have any food allergies or sensitivities?",
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
      multiSelect: true,
    },
    {
      id: "smoke",
      question: "Do you smoke?",
      type: "multiple",
      options: ["Yes", "No"],
    },
  ];

  // Info break content
  const infoBreaks = [
    {
      title: "Your Metabolism & Weight",
      content:
        "Your body composition and metabolism play crucial roles in weight management. Research shows that metabolic rates can vary by up to 20% between individuals with similar characteristics.",
      fact: "Building muscle through strength training can increase your resting metabolic rate, helping you burn more calories even when not exercising.",
    },
    {
      title: "Lifestyle Factors",
      content:
        "Sleep quality and stress management are often overlooked in weight loss journeys. Poor sleep can increase hunger hormones by up to 15% and decrease the hormones that signal fullness.",
      fact: "Studies show that people who sleep less than 7 hours per night are 30% more likely to gain weight than those who get 7+ hours regularly.",
    },
    {
      title: "Medical Considerations",
      content:
        "Certain medical conditions can significantly impact your ability to lose weight. Conditions like hypothyroidism can slow metabolism by 30% or more if untreated.",
      fact: "Always consult with a healthcare provider before starting any weight management program, especially if you have existing medical conditions.",
    },
    {
      title: "Behavior & Habits",
      content:
        "Small behavioral changes can lead to significant results over time. Replacing just one sugary drink per day with water can result in 10+ pounds of weight loss over a year.",
      fact: "People who track their food intake consistently lose 2-3 times more weight than those who don't monitor what they eat.",
    },
  ];

  // Enhanced recommendation logic
  const getRecommendedProductIds = (userAnswers) => {
    const recommendedIds = new Set();

    // Immunity & Vitamin D
    if (
      userAnswers.healthGoals?.includes("Immunity") ||
      userAnswers.getSick === "Often (4+)" ||
      userAnswers.getSick === "Sometimes (2–3)"
    ) {
      recommendedIds.add("immune-support");
      recommendedIds.add("vitd");
    }

    // Pregnancy & Overall wellness
    if (
      userAnswers.pregnancy === "Pregnant" ||
      userAnswers.pregnancy === "Breastfeeding" ||
      userAnswers.healthGoals?.includes("Overall wellness")
    ) {
      recommendedIds.add("prenatal");
      recommendedIds.add("vitb12-complex");
    }

    // Energy & Focus
    if (
      userAnswers.energyLevels === "Often tired" ||
      userAnswers.healthGoals?.includes("Energy") ||
      userAnswers.focusMemory === "Yes" ||
      userAnswers.healthGoals?.includes("Cognitive health")
    ) {
      recommendedIds.add("vitb12-1000");
      recommendedIds.add("energy-complex");
    }

    // Digestive
    if (
      userAnswers.digestiveDiscomfort === "Frequently" ||
      userAnswers.digestiveDiscomfort === "Sometimes" ||
      userAnswers.healthGoals?.includes("Digestion") ||
      userAnswers.fiber === "Low"
    ) {
      recommendedIds.add("probiotic");
      recommendedIds.add("digestive-enzyme");
    }

    // Heart
    if (
      userAnswers.heartConcerns === "High blood pressure" ||
      userAnswers.heartConcerns === "High cholesterol" ||
      userAnswers.healthGoals?.includes("Heart health")
    ) {
      recommendedIds.add("omega3");
      recommendedIds.add("coq10");
    }

    // Sleep
    if (
      userAnswers.sleepHours === "<5 hours" ||
      userAnswers.sleepHours === "5-6 hours" ||
      userAnswers.healthGoals?.includes("Sleep")
    ) {
      recommendedIds.add("melatonin");
      recommendedIds.add("sleep-complex");
    }

    // Stress
    if (
      userAnswers.stressLevel === "High" ||
      userAnswers.stressLevel === "Moderate" ||
      userAnswers.healthGoals?.includes("Stress")
    ) {
      recommendedIds.add("stress-relief");
      recommendedIds.add("ashwagandha");
    }

    // Fitness
    if (
      userAnswers.exerciseFrequency === "3–5 times" ||
      userAnswers.exerciseFrequency === "6+ times" ||
      userAnswers.healthGoals?.includes("Fitness") ||
      userAnswers.exerciseTypes?.includes("Strength training")
    ) {
      recommendedIds.add("protein");
      recommendedIds.add("bcaa");
    }

    // Skin
    if (
      userAnswers.skinCondition === "Very dry" ||
      userAnswers.skinCondition === "Somewhat dry" ||
      userAnswers.healthGoals?.includes("Skin")
    ) {
      recommendedIds.add("collagen");
      recommendedIds.add("skin-complex");
    }

    // Special diets
    if (
      userAnswers.dietPattern === "Vegan" ||
      userAnswers.dietPattern === "Vegetarian"
    ) {
      recommendedIds.add("vitb12-1000");
      recommendedIds.add("iron");
    }

    // Default if none
    if (recommendedIds.size === 0) {
      recommendedIds.add("multivitamin");
      recommendedIds.add("vitd");
      recommendedIds.add("vitb12-complex");
    }

    // Limit to 4
    return Array.from(recommendedIds).slice(0, 4);
  };

  // Progress percentage
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

    // Quiz is ~60% of total
    if (flowStep === "quiz") {
      const quizPercentage = ((quizStep + 1) / questions.length) * 100 * 0.6;
      return 30 + quizPercentage;
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

  const getLastQuestionIndexBeforeBreak = (breakIndex) => {
    // Each info break after 6 questions
    return (breakIndex + 1) * 6;
  };

  const shouldShowInfoBreak = (step) => {
    const baseCondition = (step + 1) % 6 === 0 && step < questions.length - 1;
    return baseCondition && Math.floor(step / 6) < infoBreaks.length;
  };

  // Select option
  const handleSelectOption = (value) => {
    const currentQuestionId = questions[quizStep].id;
    let newValue = value;

    if (questions[quizStep].multiSelect) {
      const currentAnswers = answers[currentQuestionId] || [];
      if (currentAnswers.includes(value)) {
        newValue = currentAnswers.filter((item) => item !== value);
      } else {
        newValue = [...currentAnswers, value];
      }
    }

    const updatedAnswers = { ...answers, [currentQuestionId]: newValue };
    setAnswers(updatedAnswers);
    setTextInput(""); // clear text

    // Next step
    if (quizStep === questions.length - 1) {
      setFlowStep("loading");
      fetchRecommendedProducts(updatedAnswers);
    } else if (shouldShowInfoBreak(quizStep)) {
      setCurrentInfoBreak(Math.floor(quizStep / 6));
      setFlowStep("infoBreak");
    } else {
      setQuizStep(quizStep + 1);
    }
  };

  // Continue after info break
  const handleContinueFromInfoBreak = () => {
    setQuizStep(quizStep + 1);
    setFlowStep("quiz");
  };

  // "Add product" using Redux, plus show notification & basket shake
  const handleAddToBasket = (product) => {
    // Dispatch to redux cart
    dispatch(
      addProduct({
        ...product,
        quantity: 1, // default quantity
      })
    );
    // Show feedback
    setAddedMessage(`Added "${product.name}" to your basket!`);
    // Trigger basket shake
    setShakeBasket(true);

    // Hide message and stop shaking after a short delay
    setTimeout(() => {
      setAddedMessage("");
      setShakeBasket(false);
    }, 2500);
  };

  // Fetch recommended products
  const fetchRecommendedProducts = async (userAnswers) => {
    setLoading(true);
    try {
      const recommendedIds = getRecommendedProductIds(userAnswers);
      console.log("Recommended product IDs:", recommendedIds);

      // Simulate small delay
      setTimeout(async () => {
        try {
          const productPromises = recommendedIds.map((id) =>
            publicRequest
              .get(`/products/find/${id}`)
              .then((res) => res.data)
              .catch((err) => {
                console.error(`Error fetching product ${id}:`, err);
                return null;
              })
          );

          const results = await Promise.all(productPromises);
          const validProducts = results.filter((p) => p !== null);

          setProducts(validProducts);
          setLoading(false);
          setFlowStep("results");
        } catch (error) {
          console.error("Error fetching products:", error);
          setLoading(false);
          setFlowStep("results");
        }
      }, 1500);
    } catch (err) {
      console.error("Error in recommendation logic:", err);
      setLoading(false);
      setFlowStep("results");
    }
  };

  // Fallback products
  const fallbackProducts = [
    {
      _id: "vitd",
      name: "Vitamin D3 (5000 IU)",
      price: 19.99,
      img: "https://via.placeholder.com/150",
      inStock: true,
      category: "vitamins",
      quantity: 1,
    },
    {
      _id: "vitb12-complex",
      name: "Vitamin B Complex",
      price: 24.99,
      img: "https://via.placeholder.com/150",
      inStock: true,
      category: "vitamins",
      quantity: 1,
    },
    {
      _id: "multivitamin",
      name: "Daily Multivitamin",
      price: 29.99,
      img: "https://via.placeholder.com/150",
      inStock: true,
      category: "vitamins",
      quantity: 1,
    },
  ];

  useEffect(() => {
    if (flowStep === "results" && products.length === 0) {
      setProducts(fallbackProducts);
    }
  }, [flowStep, products]);

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
              <InfoHeader style={{ fontSize: "28px", marginTop: "40px" }}>
                Ready?
              </InfoHeader>
            </ContentContainer>
            <Button onClick={() => setFlowStep("progressInfo")}>
              Next
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
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
                <ChartImage>{/* Visualization placeholder */}</ChartImage>
              </Chart>
              <Button onClick={() => setFlowStep("quiz")}>
                Next
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </ContentContainer>
          </>
        );

      case "quiz": {
        const currentQuestion = questions[quizStep];
        return (
          <>
            <Logo>hims</Logo>
            <QuestionContainer>
              <QuestionNumber>
                Question {quizStep + 1} of {questions.length}
              </QuestionNumber>
              <Question>{currentQuestion.question}</Question>

              {/* Multiple-choice */}
              {currentQuestion.type === "multiple" &&
                currentQuestion.options.length > 0 && (
                  <OptionsContainer>
                    {currentQuestion.options.map((option) => {
                      const isSelected =
                        currentQuestion.multiSelect &&
                        Array.isArray(answers[currentQuestion.id]) &&
                        answers[currentQuestion.id].includes(option);

                      return (
                        <Option
                          key={option}
                          onClick={() => handleSelectOption(option)}
                          selected={isSelected}
                        >
                          {option}
                          {isSelected && " ✓"}
                        </Option>
                      );
                    })}
                  </OptionsContainer>
                )}

              {/* Text-based */}
              {currentQuestion.type === "text" && (
                <ContentContainer centered style={{ marginTop: "20px" }}>
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
                  <Button
                    disabled={!textInput.trim()}
                    onClick={() => handleSelectOption(textInput.trim())}
                  >
                    Continue
                  </Button>
                </ContentContainer>
              )}

              {/* Multi-select "Continue" */}
              {currentQuestion.multiSelect && (
                <ContentContainer centered style={{ marginTop: "20px" }}>
                  <Button
                    onClick={() => {
                      if (!answers[currentQuestion.id]) {
                        handleSelectOption([]);
                      } else {
                        if (quizStep === questions.length - 1) {
                          setFlowStep("loading");
                          fetchRecommendedProducts(answers);
                        } else if (shouldShowInfoBreak(quizStep)) {
                          setCurrentInfoBreak(Math.floor(quizStep / 6));
                          setFlowStep("infoBreak");
                        } else {
                          setQuizStep(quizStep + 1);
                        }
                      }
                    }}
                  >
                    Continue
                  </Button>
                </ContentContainer>
              )}
            </QuestionContainer>
          </>
        );
      }

      case "infoBreak": {
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
                <InfoCardContent>
                  <p>{currentBreak.content}</p>
                  <FactBox>
                    <FactTitle>Did you know?</FactTitle>
                    <p>{currentBreak.fact}</p>
                  </FactBox>
                </InfoCardContent>
              </InfoCard>
              <InfoText>
                Just a few more questions to complete your personalized profile.
              </InfoText>
              <Button onClick={handleContinueFromInfoBreak}>
                Continue
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
            </ContentContainer>
          </>
        );
      }

      case "loading":
        return (
          <>
            <Logo>hims</Logo>
            <ContentContainer centered>
              <LoadingMessage>
                Analyzing your responses and building your weight management
                profile...
              </LoadingMessage>
              <Spinner />
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
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard key={product._id}>
                      <ProductImage
                        src={product.img || "https://via.placeholder.com/150"}
                        alt={product.name}
                      />
                      <ProductName>{product.name}</ProductName>
                      <ProductPrice>
                        ${product.price?.toFixed(2)}
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
                  ))
                ) : (
                  <p>
                    No products matched your profile. Try adjusting your
                    answers.
                  </p>
                )}
              </ProductsContainer>

              <div style={{ marginTop: "40px", textAlign: "center" }}>
                <InfoText>
                  Want to explore more options? Check out our full catalog for
                  additional weight management solutions.
                </InfoText>
                <div style={{ marginTop: "20px" }}>
                  <Button
                    secondary
                    style={{ marginRight: "20px" }}
                    onClick={() => {
                      setFlowStep("intro");
                      setQuizStep(0);
                      setAnswers({});
                      setProducts([]);
                    }}
                  >
                    Restart Quiz
                  </Button>
                  <Button onClick={() => (window.location.href = "/catalog")}>
                    View Full Catalog
                  </Button>
                </div>
              </div>

              <Disclaimer style={{ marginTop: "40px" }}>
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
    <>
      {/* Navbar at the very top, showing the basket quantity and a logo */}
      <Navbar>
        <NavLogo>hims</NavLogo>
        <BasketWrapper
          shake={shakeBasket}
          onClick={() => {
            // Takes user to /outcome
            window.location.href = "/outcome";
          }}
        >
          <BasketIcon>🛒</BasketIcon>
          <CartCount>{cartQuantity}</CartCount>
        </BasketWrapper>
      </Navbar>

      <Container>
        <ProgressBar>
          <Progress progress={getProgressPercentage()} />
        </ProgressBar>

        {/** If we have a product added message, show it */}
        {addedMessage && <Notification>{addedMessage}</Notification>}

        {renderContent()}
      </Container>
    </>
  );
};

export default Quiz;
