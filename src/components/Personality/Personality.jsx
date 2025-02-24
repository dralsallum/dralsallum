import React, { useState, useEffect, useRef } from "react";
import {
  QuizBody,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionCountSpan,
  QuestionBut,
  AnswerSection,
  ResMid,
  ResTySp,
  QuizFieldset,
  QuizDiv,
  ScoreSectionbackground,
  ScoreSectionProgress,
  ScoreSectioTwo,
  QuizCon,
  FieldDiv,
  ResCon,
  ResBox,
  ResBot,
  ResBor,
  ResHr,
  ResCar,
  ResFie,
  ResAll,
  ResTop,
  ResTit,
  ResSubTit,
  ResTyCon,
  ResImg,
  ResOp,
  ResOpBut,
  ResRoof,
  ResDot,
  QueSpa,
  IntroBod,
  IntroText,
  Intro,
  OpCon,
  OpMain,
  OpImg,
  OpText,
  OpSubText,
  LoginSignInput,
  LoginSignSubHeader,
  RegistarButton,
  ProgressCal,
  ProgressCon,
  StyledSpinner,
  Loading,
  LoadingBar,
  QuizHe,
  QuizPara,
  ShareIcon,
  ShareTit,
  ShareCon,
} from "./Personality.elements";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import statements from "../../utils/statements";
import statements2 from "../../utils/statements2";
import statements3 from "../../utils/statements3";
import statements4 from "../../utils/statements4";
import statements5 from "../../utils/statements5";
import charact1 from "../../assets/character1.png";
import charact2 from "../../assets/character2.png";
import charact3 from "../../assets/character3.png";
import charact4 from "../../assets/character4.png";
import charact5 from "../../assets/character5.png";
import charact6 from "../../assets/character6.png";
import charact7 from "../../assets/character7.png";
import charact8 from "../../assets/character8.png";
import charact9 from "../../assets/character9.png";
import charact10 from "../../assets/character10.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/userRedux";
import { setQuizResults, setResultText } from "../../redux/quizSlice";
import Social from "../Social/Social";

const Personality = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(statements.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentStatements, setCurrentStatements] = useState(statements);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [resultPage, setResultPage] = useState(0);
  const [inputs, setInputs] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);
  const currentTeam = useSelector((state) => state.quiz.resultText.team);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const calculateTotalScore = () => {
    return answers.reduce((total, answer) => {
      const questionScore = answer;
      return total + questionScore;
    }, 0);
  };

  const renderResultContent = () => {
    const scoreDetails = getScoreDetails();

    const quotesAndSpells = {
      range1: {
        team: "المنطقي",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "عملي ومحب للحقائق. يتميز بالثبات والموثوقية، ويقدر النزاهة والمسؤولية. يجيد التخطيط وتنظيم المهام بكفاءة",
        spell:
          "يقدر التعامل العقلاني والمنظم، ويفضل النقاشات المبنية على الحقائق والواقعية. يحب الأشخاص الذين يظهرون الصدق والموثوقية ويكرهون التسرع والتهور في القرارات. يفضلون التخطيط المسبق وتقدير الجهود التي يبذلونها",
      },
      range2: {
        team: "المدافع",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          " مكرس ودافئ، ويبرز في الدفاع عن أحبائه. يتمتع بالتفاني والدعم، ويسعى دائمًا لحماية ورعاية من حوله",
        spell:
          "يحب التعامل الذي يتسم بالتعاطف والرعاية، ويقدر الأشخاص الذين يظهرون الاهتمام والدعم. يرغب في التقدير لجهوده والتقدير لحساسيته تجاه الآخرين. يفضل التواصل الهادئ والمتفهم",
      },
      range3: {
        team: "البارع",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "جريء وعملي، متقن لجميع أنواع الأدوات. يتميز بالمرونة والقدرة على التكيف مع المواقف المختلفة بسهولة",
        spell:
          "يحب التعامل العملي والمباشر، ويقدر الأشخاص الذين يعتمدون على الخبرة والمهارة. يستمتع بالتحديات الجديدة ويفضل العمل مع أشخاص مبتكرين ومرنين",
      },
      range4: {
        team: "المغامر",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "فنان مرن وساحر. يتمتع بحب الاستكشاف والتجارب الجديدة، ويجد السعادة في الأشياء الجميلة من حوله",
        spell:
          " يفضل التعامل الذي يحفز الإبداع والاستكشاف. يحب الأشخاص الذين يشاركونه حب المغامرة والاستكشاف. يقدر الحرية والتلقائية في التعبير عن الذات",
      },
      range5: {
        team: "الوسيط",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "شاعري ولطيف ومحب للخير. يتحلى بالإخلاص والتعاطف، ودائمًا ما يكون مستعدًا لمساعدة القضايا النبيلة والمجتمع",
        spell:
          "يقدر التعامل اللطيف والداعم. يحب الأشخاص الذين يقدرون الإبداع والتعاطف. يستمتع بالعمل في بيئات تشجع على التعاون والتفاهم",
      },
      range6: {
        team: "المنطقي",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "مبتكر ومخترع، لديه عطش لا ينتهي للمعرفة. يبرز في التفكير النقدي والإبداعي، ويميل إلى التفكير خارج الصندوق",
        spell:
          "يفضل التعامل الذي يشجع على الابتكار والمعرفة. يقدر النقاشات الفكرية ويحب الأشخاص الذين يتحدونه فكرياً. يستمتع بالتعلم والاكتشاف المستمر",
      },
      range7: {
        team: "المناظر",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "فضولي وذكي، لا يمكنه مقاومة التحدي الفكري. يتمتع بقدرة عالية على التحليل والمناقشة، ويحب استكشاف الأفكار الجديدة",
        spell:
          "يفضل التعامل الذي يتحدى فكرياً ويحفز العقل. يحب الأشخاص الذين يقدرون النقاش العميق وتبادل الأفكار. يتجنب الأشخاص الذين لا يحبون التفكير خارج الصندوق",
      },
      range8: {
        team: "التنفيذي",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "مدير ممتاز، يتفوق في إدارة الأمور والأشخاص. يتميز بقوة القيادة والكفاءة الإدارية، ويتخذ القرارات بثقة",
        spell:
          " يفضل التعامل الفعال والمنظم. يقدر الالتزام والكفاءة والجدية في العمل. يحب الأشخاص الذين يظهرون الاحترام والتقدير لمهاراته الإدارية",
      },
      range9: {
        team: "البطل",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "قائد كاريزماتي وملهم. يتمتع بقدرة فائقة على التأثير وإلهام الآخرين، ويحب قيادة المبادرات الإيجابية",
        spell:
          " يفضل التعامل الذي يتضمن التحفيز والإلهام. يقدر الأشخاص الذين يدعمونه ويقدرون قدرته على التأثير والقيادة. يستمتع بالعمل مع أشخاص يشاركونه الحماس للتغيير الإيجابي",
      },
      range10: {
        team: "القائد",
        title: "شخصيتك هي",
        banner: "نتائج اختبار الشخصية",
        quote:
          "جريء وخيالي وذو إرادة قوية. يبرز في القيادة وصنع الطرق الجديدة، ويتمتع بالعزم والإصرار على تحقيق الأهداف",
        spell:
          "يفضل التعامل الحازم والمباشر. يقدر الأشخاص الذين يظهرون الصراحة والاحترام لقيادته وقراراته. يحب العمل مع أشخاص يتمتعون بالعزم والإصرار على تحقيق الأهداف",
      },
    };

    const currentContent = quotesAndSpells[scoreDetails.category] || {
      team: "Default team if score doesn't match any range",
      quote: "Default quote if score doesn't match any range",
      spell: "Default spell if score doesn't match any range",
      title: "شخصيتك هي",
      banner: "نتائج اختبار الشخصية",
    };

    dispatch(setResultText(currentContent));

    switch (resultPage) {
      case 0:
        return (
          <div>
            <QuizPara>{currentContent.quote}</QuizPara>
          </div>
        );
      case 1:
        return (
          <div>
            <QuizPara>{currentContent.spell}</QuizPara>
          </div>
        );
      case 2:
        return (
          <div>
            <form onSubmit={handleSignUp}>
              <LoginSignSubHeader>
                زودنا بمعلوماتك لإنشاء حساب وسنرسل لك نتائجك المفصلة على ايميلك
              </LoginSignSubHeader>
              <LoginSignInput
                name="email"
                placeholder="ايميل"
                onChange={handleChange}
              />
              <LoginSignInput
                type="password"
                name="password"
                placeholder="كلمة السر"
                onChange={handleChange}
              />
              <RegistarButton type="submit" onClick={handleSignUp}>
                {isRegistering ? <LoadingBar /> : "إنشاء حساب"}
              </RegistarButton>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const getScoreDetails = () => {
    const totalScore = calculateTotalScore();
    const maxScorePerQuestion = 7;
    const maxTotalScore = currentStatements.length * maxScorePerQuestion;
    let scoreDetails = {
      svg: null,
      category: "",
    };

    const scoreRanges = [
      { limit: maxTotalScore / 10, svg: charact1, category: "range1" },
      { limit: (maxTotalScore * 2) / 10, svg: charact2, category: "range2" },
      { limit: (maxTotalScore * 3) / 10, svg: charact3, category: "range3" },
      { limit: (maxTotalScore * 4) / 10, svg: charact4, category: "range4" },
      { limit: (maxTotalScore * 5) / 10, svg: charact5, category: "range5" },
      { limit: (maxTotalScore * 6) / 10, svg: charact6, category: "range6" },
      { limit: (maxTotalScore * 7) / 10, svg: charact7, category: "range7" },
      { limit: (maxTotalScore * 8) / 10, svg: charact8, category: "range8" },
      { limit: (maxTotalScore * 9) / 10, svg: charact9, category: "range9" },
      { limit: maxTotalScore, svg: charact10, category: "range10" },
    ];

    // Find the appropriate score range
    const matchedRange = scoreRanges.find((range) => totalScore <= range.limit);
    if (matchedRange) {
      scoreDetails.svg = matchedRange.svg;
      scoreDetails.category = matchedRange.category;
    } else {
      // Handle the case where the score is above the maximum expected score
      scoreDetails.svg = charact10; // replace with an actual image reference
      scoreDetails.category = "aboveRange";
    }

    return scoreDetails;
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const questionRefs = useRef([]);
  questionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !questionRefs.current.includes(el)) {
      questionRefs.current.push(el);
    }
  };

  const handleNextPage = () => {
    if (resultPage < 2) {
      setResultPage((prevPage) => prevPage + 1);
    } else {
    }
  };

  const getPersonalityType = () => {
    const scoreCategory = getScoreDetails().category;
    const personalityTypes = {
      low: "Type for low score",
      medium: "Type for medium score",
      high: "Type for high score",
      extraHigh: "Type for extra high score",
    };

    return personalityTypes[scoreCategory];
  };

  const scoreDetails = getScoreDetails();

  const scoreOptions =
    screenWidth > 768
      ? [
          { size: "45px", borderColor: "#88619a" },
          { size: "35px", borderColor: "#88619a" },
          { size: "28px", borderColor: "#88619a" },
          { size: "25px", borderColor: "#9b9faa" },
          { size: "28px", borderColor: "#33a474" },
          { size: "35px", borderColor: "#33a474" },
          { size: "45px", borderColor: "#33a474" },
        ]
      : [
          // Smaller sizes for screens with max-width: 768px
          { size: "30px", borderColor: "#88619a" },
          { size: "25px", borderColor: "#88619a" },
          { size: "17px", borderColor: "#88619a" },
          { size: "15px", borderColor: "#9b9faa" },
          { size: "17px", borderColor: "#33a474" },
          { size: "25px", borderColor: "#33a474" },
          { size: "30px", borderColor: "#33a474" },
        ];

  const handleAnswerSelect = (questionIndex, selectedScore) => {
    let newAnswers = [...answers];
    newAnswers[questionIndex] = selectedScore;
    setAnswers(newAnswers);

    // Proceed to next question or end of current statement set
    if (questionIndex < currentStatements.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1); // This will trigger the useEffect
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsRegistering(true); // Start spinner
    try {
      await dispatch(register(inputs)).unwrap();
      navigate("/outcome"); // Redirect on successful registration
      setIsRegistering(false); // Stop spinner on success
    } catch (error) {
      setIsRegistering(false); // Stop spinner on failure
      // Handle the error (e.g., setRegistrationError)
    }
  };

  useEffect(() => {
    // Scrolling to the current question
    if (currentQuestion < questionRefs.current.length) {
      questionRefs.current[currentQuestion].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // Handling window resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentQuestion]);

  const statementSets = [
    statements,
    statements2,
    statements3,
    statements4,
    statements5,
  ];

  useEffect(() => {
    if (currentQuestion >= currentStatements.length) {
      const currentSetIndex = statementSets.indexOf(currentStatements);
      const nextSetIndex = currentSetIndex + 1;

      if (nextSetIndex < statementSets.length) {
        const nextStatements = statementSets[nextSetIndex];
        setCurrentStatements(nextStatements);
        setAnswers(Array(nextStatements.length).fill(0));
        setCurrentQuestion(0);
      } else {
        setShowScore(true);
        setScore(answers.reduce((total, answer) => total + answer, 0));
      }
    }

    if (showScore) {
      const totalScore = calculateTotalScore();
      const scoreDetails = getScoreDetails(totalScore);
      dispatch(setQuizResults({ totalScore, scoreDetails }));
    }
  }, [currentQuestion, currentStatements, showScore, statementSets]);

  useEffect(() => {
    if (showScore) {
      window.scrollTo(0, 0);
    }
  }, [showScore]);

  const shareUrl = window.location.href;
  const shareMessage = "اعرف نوع شخصيتك باختبار قصير يعلمك نقاط قوتك وضعفك";

  return (
    <>
      {showScore ? (
        <div>
          <ResCon>
            <ResBox>
              <ResBor>
                <ResHr />
                <ResCar>
                  <ResFie>
                    <ResAll>
                      <ResTop></ResTop>
                      <ResTit>نوع شخصيتك هو</ResTit>
                      <ResSubTit>{getPersonalityType()}</ResSubTit>
                      <ResTyCon>
                        <ResTySp></ResTySp>
                        {currentTeam ? (
                          <QuizHe>{currentTeam}</QuizHe>
                        ) : (
                          <StyledSpinner />
                        )}
                      </ResTyCon>
                      <ResMid>
                        <ResImg src={scoreDetails.svg} alt="score indicator" />
                        <br />

                        <ProgressCon>
                          <ProgressCal
                            value={calculateTotalScore()}
                            max={statements.length * 7}
                          />
                        </ProgressCon>
                      </ResMid>
                      <ResBot>{renderResultContent()}</ResBot>
                    </ResAll>
                    <ResOp>
                      <ResRoof>
                        {[...Array(3)].map((_, index) => (
                          <ResDot
                            key={index}
                            onClick={() => setResultPage(index)}
                            style={{
                              backgroundColor:
                                resultPage === index ? "#886199" : "#ccc",
                              cursor: "pointer",
                            }}
                          />
                        ))}
                      </ResRoof>

                      <ResOpBut onClick={handleNextPage}>التالي</ResOpBut>
                    </ResOp>
                  </ResFie>
                </ResCar>
              </ResBor>
            </ResBox>
          </ResCon>
          <Social />
        </div>
      ) : (
        <div>
          <IntroBod>
            <IntroText>اختبار مجاني لتحديد الشخصية</IntroText>
            <Intro>من نوع نوريس®</Intro>
          </IntroBod>
          <OpCon>
            <OpMain>
              <OpImg
                src="https://www.16personalities.com/static/images/test-header-2.svg"
                alt=""
              />
              <OpText>
                <OpSubText>
                  اكتشف المزيد عن نفسك من خلال اختبار الشخصية. بيساعدك في فهم
                  نقاط القوة والضعف لديك، وكيفية التفاعل مع الآخرين، وفي اتخاذ
                  قرارات أفضل في حياتك المهنية والشخصية.
                </OpSubText>
              </OpText>
            </OpMain>
            <OpMain>
              <OpImg
                src="https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg"
                alt=""
              />
              <OpText>
                <OpSubText>
                  اكتشف كيف يمكن لنمط شخصيتك أن يؤثر في عدة مجالات من حياتك، من
                  العلاقات الاجتماعية وحتى الخيارات المهنية.
                </OpSubText>
              </OpText>
            </OpMain>
            <OpMain>
              <OpImg
                src="https://www.16personalities.com/static/images/academy/analysts/exercise.svg"
                alt=""
              />
              <OpText>
                <OpSubText>
                  تنمية شخصيتك وتطورك نحو أن تصبح الشخص الذي تحلم به يصبح أكثر
                  سهولة وفعالية مع باقتنا الفاخرة من الخدمات الإضافية المتاحة
                  لك.
                </OpSubText>
              </OpText>
            </OpMain>
          </OpCon>
          <QuizBody>
            <QuizCon>
              {currentStatements.map((statement, index) => (
                <QuizFieldset
                  key={statement.id}
                  ref={addToRefs}
                  $current={index === currentQuestion}
                >
                  <FieldDiv>
                    <QueSpa>{statement.text}</QueSpa>
                  </FieldDiv>
                  <QuizDiv>
                    <ScoreSection>لااتفق</ScoreSection>
                    <ScoreSectionProgress>
                      {scoreOptions.map((option, optionIndex) => (
                        <ScoreSectionbackground
                          key={optionIndex}
                          $borderColor={option.borderColor}
                        >
                          <QuestionSection>
                            <QuestionCount
                              type="radio"
                              name={`question_${index}`}
                              onChange={() =>
                                handleAnswerSelect(index, optionIndex + 1)
                              }
                              checked={answers[index] === optionIndex + 1}
                            />
                            <QuestionCountSpan
                              size={option.size}
                              $borderColor={option.borderColor}
                              $selected={answers[index] === optionIndex + 1}
                            ></QuestionCountSpan>
                          </QuestionSection>
                        </ScoreSectionbackground>
                      ))}
                    </ScoreSectionProgress>
                    <ScoreSectioTwo>اتفق</ScoreSectioTwo>
                  </QuizDiv>
                </QuizFieldset>
              ))}
            </QuizCon>
          </QuizBody>
        </div>
      )}
      <AnswerSection>
        <QuestionBut>التالي</QuestionBut>
      </AnswerSection>
      <ShareCon>
        <ShareTit>1.3M</ShareTit>
        <ShareTit>اضغط للمشاركة</ShareTit>
      </ShareCon>
      <ShareIcon>
        <TwitterShareButton
          url={shareUrl}
          title="Check out my personality quiz results!"
          hashtags={["PersonalityTest", "Quiz"]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={shareUrl}
          quote="Check out my personality quiz results!"
          hashtag="#PersonalityTest"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={shareMessage}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </ShareIcon>
    </>
  );
};

export default Personality;
