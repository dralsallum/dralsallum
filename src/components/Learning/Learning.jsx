// Learning.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useParams } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaCheck,
  FaChevronRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { publicRequest, userRequest } from "../../requestMethods";

/* ========= Animations ========== */
const loadAnimation = keyframes`
  0% { left: -50%; }
  50%, 100% { left: 100%; }
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

/* ========= Styled Components ========== */
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const LoadingBar = styled.div`
  position: relative;
  width: 200px;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: -50%;
    width: 50%;
    height: 100%;
    background-color: #ff7143;
    animation: ${loadAnimation} 1s infinite linear;
  }
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #ff7143;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  direction: rtl;
  background-color: #fff;
  position: relative;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const MenuToggle = styled.button`
  display: none;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #ff7143;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  z-index: 1000;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    background-color: #fafafa;
    z-index: 999;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    animation: ${slideIn} 0.3s ease-out;
    overflow-y: auto;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    animation: ${fadeIn} 0.3s ease-out;
  }
`;

const Sidebar = styled.aside`
  width: 300px;
  background-color: #fafafa;
  border-right: 1px solid #ddd;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLessonProgress = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
    background-color: #fafafa;
    overflow-x: auto;
    gap: 5px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ProgressPill = styled.div`
  flex-shrink: 0;
  height: 5px;
  width: 30px;
  background-color: ${(props) => {
    if (props.completed) return "#27ae60";
    return props.active ? "#ff7143" : "#ddd";
  }};
  border-radius: 3px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    bottom: -5px;
  }
`;

const CurrentLessonLabel = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
`;

const CourseTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProgressContainer = styled.div`
  margin: 1rem 0;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #ff7143;
  width: ${(props) => props.progress || "0%"};
  transition: width 0.25s ease;
`;

const LessonsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const LessonItem = styled.li`
  background-color: ${(props) => (props.active ? "#dff6f0" : "#f3f3f3")};
  margin-bottom: 0.5rem;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#f3f3f3" : "#c8ebe0")};
  }
`;

const LessonIcon = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.completed ? "#27ae60" : "#333")};
`;

const MainContent = styled.section`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LessonTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
  @media (max-width: 768px) {
    display: none;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 4px;
  background-color: #000;
  margin-bottom: 1rem;
`;

const QuizSection = styled.div`
  margin-top: 1rem;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const QuizTitle = styled.h4`
  margin-bottom: 1rem;
  color: #2d3e3c;
  font-size: 1.2rem;
  border-bottom: 2px solid #ff7143;
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const QuizForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const QuestionWrapper = styled.div`
  background-color: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-left: 3px solid #2d3e3c;
`;

const QuestionText = styled.p`
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3e3c;
  font-size: 1rem;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.8" : "1")};
`;

const AnswerIcon = styled.span`
  color: ${(props) => (props.isCorrect ? "#27ae60" : "#e74c3c")};
  margin-left: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #2d3e3c;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #22302e;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const CompleteButton = styled.button`
  background-color: #1abc9c;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #16a085;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const LessonNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLessonNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    margin-top: 10px;
  }
`;

const NavButton = styled.button`
  background-color: #f3f3f3;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-weight: 500;
  transition: all 0.2s ease;
  color: #2d3e3c;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => (props.disabled ? "#f3f3f3" : "#e3e3e3")};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) =>
      props.disabled
        ? "0 1px 3px rgba(0, 0, 0, 0.1)"
        : "0 3px 6px rgba(0, 0, 0, 0.15)"};
  }
`;

const Learning = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [allQuestionsCorrect, setAllQuestionsCorrect] = useState(false);
  const [completingLesson, setCompletingLesson] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(`/courses/${slug}`);
        setCourse(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug]);

  useEffect(() => {
    if (!course || !course.lessons[activeLessonIndex]) return;

    // Reset quiz state when changing lessons
    const lesson = course.lessons[activeLessonIndex];
    const initAnswers = {};
    lesson.quiz.forEach((q, idx) => {
      initAnswers[`q${idx + 1}`] = "";
    });

    setAnswers(initAnswers);
    setResults([]);
    setQuizSubmitted(false);
    setAllQuestionsCorrect(false);
    setIsMobileNavOpen(false);
  }, [course, activeLessonIndex]);

  // Helper functions
  const allQuestionsAnswered = () => {
    if (!course) return false;
    const questions = course.lessons[activeLessonIndex].quiz;
    return (
      questions.length === 0 ||
      questions.every((_, idx) => answers[`q${idx + 1}`])
    );
  };

  const canProceedToNextLesson = () => {
    if (!course) return false;
    return course.lessons[activeLessonIndex].isCompleted;
  };

  // Navigation handlers
  const handleSelectLesson = (index) => {
    if (
      index < activeLessonIndex ||
      course.lessons[index].isCompleted ||
      (index === activeLessonIndex + 1 &&
        course.lessons[activeLessonIndex].isCompleted)
    ) {
      setActiveLessonIndex(index);
    }
  };

  const goToPreviousLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex((prev) => prev - 1);
    }
  };

  const goToNextLesson = () => {
    if (!course || activeLessonIndex >= course.lessons.length - 1) return;

    if (!course.lessons[activeLessonIndex].isCompleted) {
      return;
    }

    setActiveLessonIndex((prev) => prev + 1);
  };

  // UI interaction handlers
  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    if (quizSubmitted) return; // Prevent changes after submission

    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course || quizSubmitted) return;

    const lesson = course.lessons[activeLessonIndex];
    const newResults = lesson.quiz.map((q, idx) => {
      const userAnswer = answers[`q${idx + 1}`];
      const isCorrect = userAnswer === q.correctAnswer;
      return { questionIndex: idx + 1, isCorrect };
    });

    const allCorrect = newResults.every((result) => result.isCorrect);

    setResults(newResults);
    setQuizSubmitted(true);
    setAllQuestionsCorrect(allCorrect);
  };

  const handleCompleteLesson = async () => {
    if (!course) return;

    // Check if quiz needs to be completed first
    if (course.lessons[activeLessonIndex].quiz.length > 0 && !quizSubmitted) {
      return;
    }

    try {
      setCompletingLesson(true);
      await userRequest.patch(
        `/courses/${course.slug}/lessons/${activeLessonIndex}/complete`,
        { isCompleted: true }
      );

      const refreshed = await publicRequest.get(`/courses/${slug}`);
      setCourse(refreshed.data);
      setCompletingLesson(false);

      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (activeLessonIndex < refreshed.data.lessons.length - 1) {
        setActiveLessonIndex((prev) => prev + 1);
      } else {
        console.log("All lessons completed!");
      }
    } catch (error) {
      console.error("Error completing lesson:", error);
      setCompletingLesson(false);
    }
  };

  // Render loading state
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  // If no course found after loading
  if (!course) return <div>Course not found!</div>;

  // Get current lesson
  const currentLesson = course.lessons[activeLessonIndex];

  // Calculate stats
  const overallCompletion = course.completion || 0;
  const correctCount = results.filter((r) => r.isCorrect).length;
  const totalQuestions = currentLesson ? currentLesson.quiz.length : 0;

  return (
    <PageWrapper>
      {/* Mobile Menu Toggle Button */}
      <MenuToggle onClick={toggleMobileNav}>
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>

      {/* Mobile Navigation Overlay */}
      <Overlay isOpen={isMobileNavOpen} onClick={toggleMobileNav} />

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileNavOpen}>
        <MobileNavHeader>
          <CourseTitle>{course.title}</CourseTitle>
          <CloseButton onClick={toggleMobileNav}>
            <FaTimes />
          </CloseButton>
        </MobileNavHeader>

        <ProgressContainer>
          <div>{overallCompletion}% اكمل</div>
          <ProgressBarWrapper>
            <ProgressBar progress={`${overallCompletion}%`} />
          </ProgressBarWrapper>
        </ProgressContainer>

        <LessonsList>
          {course.lessons.map((lesson, idx) => {
            const disabled = !lesson.isCompleted && idx > activeLessonIndex;

            return (
              <LessonItem
                key={idx}
                onClick={() => handleSelectLesson(idx)}
                active={idx === activeLessonIndex}
                disabled={disabled}
              >
                <LessonIcon completed={lesson.isCompleted}>
                  {lesson.isCompleted ? (
                    <FaCheck />
                  ) : idx === activeLessonIndex ? (
                    "▶"
                  ) : (
                    "○"
                  )}
                </LessonIcon>
                <div>{lesson.title}</div>
              </LessonItem>
            );
          })}
        </LessonsList>
      </MobileNav>

      <ContentContainer>
        <Sidebar>
          <CourseTitle>{course.title}</CourseTitle>
          <ProgressContainer>
            <div>{overallCompletion}% اكمل</div>
            <ProgressBarWrapper>
              <ProgressBar progress={`${overallCompletion}%`} />
            </ProgressBarWrapper>
          </ProgressContainer>

          <LessonsList>
            {course.lessons.map((lesson, idx) => {
              const disabled = !lesson.isCompleted && idx > activeLessonIndex;

              return (
                <LessonItem
                  key={idx}
                  onClick={() => handleSelectLesson(idx)}
                  active={idx === activeLessonIndex}
                  disabled={disabled}
                >
                  <LessonIcon completed={lesson.isCompleted}>
                    {lesson.isCompleted ? (
                      <FaCheck />
                    ) : idx === activeLessonIndex ? (
                      "▶"
                    ) : (
                      "○"
                    )}
                  </LessonIcon>
                  <div>{lesson.title}</div>
                </LessonItem>
              );
            })}
          </LessonsList>
        </Sidebar>

        <MainContent>
          <MobileLessonProgress>
            {course.lessons.map((lesson, idx) => (
              <ProgressPill
                key={idx}
                active={idx === activeLessonIndex}
                completed={lesson.isCompleted}
                onClick={() => handleSelectLesson(idx)}
              />
            ))}
          </MobileLessonProgress>

          <CurrentLessonLabel>
            <div>
              الدرس {activeLessonIndex + 1}: {currentLesson.title}
            </div>
            <div>{currentLesson.isCompleted ? "✔" : ""}</div>
          </CurrentLessonLabel>

          {currentLesson && (
            <>
              <LessonTitle>
                الدرس {activeLessonIndex + 1}: {currentLesson.title}
              </LessonTitle>
              <VideoPlayer
                controls
                src={currentLesson.videoUrl}
                type="video/mp4"
              >
                Your browser does not support HTML5 video.
              </VideoPlayer>

              <QuizSection>
                <QuizTitle>الاختبار</QuizTitle>
                {currentLesson.quiz.length === 0 ? (
                  <p>لا يوجد أسئلة لهذا الدرس.</p>
                ) : (
                  <QuizForm onSubmit={handleSubmit}>
                    {currentLesson.quiz.map((q, idx) => {
                      const qName = `q${idx + 1}`;
                      const result = results.find(
                        (r) => r.questionIndex === idx + 1
                      );
                      const answered = quizSubmitted && result;

                      return (
                        <QuestionWrapper key={idx}>
                          <QuestionText>{q.question}</QuestionText>
                          <OptionsList>
                            {q.options.map((opt, i) => (
                              <OptionItem key={i} disabled={quizSubmitted}>
                                <input
                                  type="radio"
                                  name={qName}
                                  value={opt}
                                  checked={answers[qName] === opt}
                                  onChange={handleChange}
                                  disabled={quizSubmitted} // Disable after submission
                                />
                                {opt}
                                {answered && answers[qName] === opt && (
                                  <AnswerIcon isCorrect={result.isCorrect}>
                                    {result.isCorrect ? (
                                      <FaCheckCircle />
                                    ) : (
                                      <FaTimesCircle />
                                    )}
                                  </AnswerIcon>
                                )}
                              </OptionItem>
                            ))}
                          </OptionsList>
                        </QuestionWrapper>
                      );
                    })}
                    {!quizSubmitted && (
                      <SubmitButton
                        type="submit"
                        disabled={!allQuestionsAnswered()}
                      >
                        إرسال الإجابات
                      </SubmitButton>
                    )}
                  </QuizForm>
                )}
              </QuizSection>

              {/* Desktop Navigation Buttons */}
              <LessonNav>
                <NavButton
                  onClick={goToPreviousLesson}
                  disabled={activeLessonIndex === 0}
                >
                  <FaChevronRight /> الدرس السابق
                </NavButton>

                <NavButton
                  onClick={goToNextLesson}
                  disabled={
                    activeLessonIndex === course.lessons.length - 1 ||
                    !canProceedToNextLesson()
                  }
                >
                  الدرس التالي <FaChevronLeft />
                </NavButton>
              </LessonNav>

              {/* Mobile Navigation Buttons */}
              <MobileLessonNav>
                <NavButton
                  onClick={goToPreviousLesson}
                  disabled={activeLessonIndex === 0}
                >
                  <FaChevronRight /> الدرس السابق
                </NavButton>

                <NavButton
                  onClick={goToNextLesson}
                  disabled={
                    activeLessonIndex === course.lessons.length - 1 ||
                    !canProceedToNextLesson()
                  }
                >
                  الدرس التالي <FaChevronLeft />
                </NavButton>
              </MobileLessonNav>

              {!currentLesson.isCompleted && (
                <CompleteButton
                  onClick={handleCompleteLesson}
                  disabled={
                    completingLesson ||
                    (currentLesson.quiz.length > 0 && !quizSubmitted)
                  }
                >
                  {completingLesson ? (
                    <>
                      <Spinner />
                      جاري الإكمال...
                    </>
                  ) : (
                    "إكمال الدرس"
                  )}
                </CompleteButton>
              )}
            </>
          )}
        </MainContent>
      </ContentContainer>
    </PageWrapper>
  );
};

export default Learning;
