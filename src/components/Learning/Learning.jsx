// Learning.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { publicRequest, userRequest } from "../../requestMethods";

/* ========= Loading Styles ========== */
const loadAnimation = keyframes`
  0% {
    left: -50%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* You can adjust this if you prefer a different layout */
  background-color: #fff;
`;

const LoadingBar = styled.div`
  position: relative;
  width: 200px; /* width of the loading bar */
  height: 4px; /* thickness of the loading bar */
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

/* ========= Spinner (Loading Gear) for "Complete Lesson" button ========== */
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #ff7143;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spinAnimation} 1s linear infinite;
`;

/* ========= Styled Components for Page Layout ========== */

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  direction: rtl;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 300px;
  background-color: #fafafa;
  border-right: 1px solid #ddd;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
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
  width: 0%;
  transition: width 0.25s ease;
`;

const LessonsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const LessonItem = styled.li`
  background-color: #dff6f0;
  margin-bottom: 0.5rem;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: #c8ebe0;
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
    padding: 1rem 0.5rem;
  }
`;

const LessonTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
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
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 6px;
`;

const QuizTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const QuizForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const QuestionWrapper = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const SubmitButton = styled.button`
  background-color: #2d3e3c;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  align-self: flex-start;
  &:hover {
    background-color: #2d3e3cdd;
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
  &:hover {
    background-color: #17a085;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

/* ---- Modal ---- */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  width: 350px;
  max-width: 90%;
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const Checklist = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const CheckIconCorrect = styled(FaCheckCircle)`
  color: #27ae60;
  font-size: 1.2rem;
`;

const CheckIconWrong = styled(FaTimesCircle)`
  color: #e74c3c;
  font-size: 1.2rem;
`;

const PercentageMessage = styled.p`
  margin: 1rem 0;
  color: #555;
  line-height: 1.5;
`;

const CloseModalButton = styled.button`
  background-color: #2d3e3c;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #2d3e3cdd;
  }
`;

/* ========== Main Learning Component ========== */

const Learning = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Which lesson is currently being viewed?
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

  // For quiz answers and results
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Spinner state for completing a lesson
  const [completingLesson, setCompletingLesson] = useState(false);

  // Fetch the course data
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

  // Reset quiz answers when active lesson changes
  useEffect(() => {
    if (!course || !course.lessons[activeLessonIndex]) return;
    const lesson = course.lessons[activeLessonIndex];

    // Initialize answers
    const initAnswers = {};
    lesson.quiz.forEach((q, idx) => {
      initAnswers[`q${idx + 1}`] = "";
    });
    setAnswers(initAnswers);
    setResults([]);
    setIsModalOpen(false);
  }, [course, activeLessonIndex]);

  // Handling lesson selection from the sidebar
  const handleSelectLesson = (index) => {
    setActiveLessonIndex(index);
  };

  // Handle quiz changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  // Submit quiz
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course) return;

    const lesson = course.lessons[activeLessonIndex];
    const newResults = lesson.quiz.map((q, idx) => {
      const userAnswer = answers[`q${idx + 1}`];
      const isCorrect = userAnswer === q.correctAnswer;
      return { questionIndex: idx + 1, isCorrect };
    });

    setResults(newResults);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Mark the lesson as complete on the backend, then move to next lesson
  const handleCompleteLesson = async () => {
    if (!course) return;

    try {
      setCompletingLesson(true);
      await userRequest.patch(
        `/courses/${course.slug}/lessons/${activeLessonIndex}/complete`,
        { isCompleted: true }
      );

      // Re-fetch or update local state to reflect new completion
      const refreshed = await publicRequest.get(`/courses/${slug}`);
      setCourse(refreshed.data);
      setCompletingLesson(false);

      // Automatically move to the next lesson (if any)
      if (activeLessonIndex < refreshed.data.lessons.length - 1) {
        setActiveLessonIndex((prev) => prev + 1);
      } else {
        // If it's the last lesson, you can navigate somewhere else or do something special
        console.log("All lessons completed!");
        // e.g., navigate("/courses/completed");
      }
    } catch (error) {
      console.error("Error completing lesson:", error);
      setCompletingLesson(false);
    }
  };

  // Show loading bar if data is not yet fetched
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  // If no course found after loading
  if (!course) return <div>Course not found!</div>;

  // Current lesson
  const currentLesson = course.lessons[activeLessonIndex];

  // Overall course completion
  const overallCompletion = course.completion || 0;

  // Quiz correctness
  const correctCount = results.filter((r) => r.isCorrect).length;
  const totalQuestions = currentLesson ? currentLesson.quiz.length : 0;
  const correctnessPercent = totalQuestions
    ? Math.round((correctCount / totalQuestions) * 100)
    : 0;

  return (
    <PageWrapper>
      <ContentContainer>
        {/* Sidebar */}
        <Sidebar>
          <CourseTitle>{course.title}</CourseTitle>
          <ProgressContainer>
            <div>{overallCompletion}% COMPLETE</div>
            <ProgressBarWrapper>
              <ProgressBar style={{ width: `${overallCompletion}%` }} />
            </ProgressBarWrapper>
          </ProgressContainer>

          {/* List of Lessons */}
          <LessonsList>
            {course.lessons.map((lesson, idx) => (
              <LessonItem key={idx} onClick={() => handleSelectLesson(idx)}>
                <LessonIcon completed={lesson.isCompleted}>
                  {lesson.isCompleted ? "✔" : "▶"}
                </LessonIcon>
                <div>{lesson.title}</div>
              </LessonItem>
            ))}
          </LessonsList>
        </Sidebar>

        {/* MainContent */}
        <MainContent>
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
                      return (
                        <QuestionWrapper key={idx}>
                          <QuestionText>{q.question}</QuestionText>
                          <OptionsList>
                            {q.options.map((opt, i) => (
                              <label key={i}>
                                <input
                                  type="radio"
                                  name={qName}
                                  value={opt}
                                  checked={answers[qName] === opt}
                                  onChange={handleChange}
                                />
                                {opt}
                              </label>
                            ))}
                          </OptionsList>
                        </QuestionWrapper>
                      );
                    })}
                    <SubmitButton type="submit">إرسال الإجابات</SubmitButton>
                  </QuizForm>
                )}
              </QuizSection>

              {/* Mark Lesson Complete */}
              {!currentLesson.isCompleted && (
                <CompleteButton
                  onClick={handleCompleteLesson}
                  disabled={completingLesson}
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

      {/* Quiz Results Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>نتيجة الاختبار</ModalTitle>
            <Checklist>
              {results.map((r) => (
                <CheckItem key={r.questionIndex}>
                  {r.isCorrect ? <CheckIconCorrect /> : <CheckIconWrong />}
                  <span>السؤال {r.questionIndex}</span>
                </CheckItem>
              ))}
            </Checklist>
            <PercentageMessage>
              نسبة نجاحك: {correctnessPercent}%
            </PercentageMessage>
            <CloseModalButton onClick={closeModal}>إغلاق</CloseModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default Learning;
