import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FaHome, FaCog, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { publicRequest, userRequest } from "../../requestMethods";

/* =================== Styled Components =================== */
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  direction: rtl;
  background-color: #fff;
`;

const TopNav = styled.nav`
  width: 100%;
  background-color: #2d3e3c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
`;

const TopNavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.2rem;
  cursor: pointer;
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
  color: #333;
`;

const MainContent = styled.section`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 4px;
  background-color: #000;
`;

const QuizSection = styled.div`
  margin-top: 1rem;
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 6px;
`;

const QuizTitle = styled.h3`
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

  &:hover {
    background-color: #17a085;
  }
`;

/* Modal Overlay / Content */
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

/* Checklist for correct/wrong icons */
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

/* =================== MAIN COMPONENT =================== */
const Learning = () => {
  /* 1) Get slug from URL, e.g. /learning/:slug */
  const { slug } = useParams();

  /* 2) State for Course & Loading */
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  /* 3) Quiz & Modal State */
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* 4) "Server Completion": we store the snapped % from the server here */
  const [serverCompletion, setServerCompletion] = useState(0);

  /* Keep track of the last raw progress we sent, to avoid spam updates */
  const [lastSentProgress, setLastSentProgress] = useState(null);

  const videoRef = useRef(null);

  /* Fetch the course on mount or slug change */
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await publicRequest.get(`/courses/${slug}`);
        setCourse(res.data);
        setServerCompletion(res.data.completion || 0); // from DB
        setLoading(false);

        // Initialize answers object
        const initialAnswers = {};
        res.data.quiz.forEach((q, index) => {
          initialAnswers[`q${index + 1}`] = "";
        });
        setAnswers(initialAnswers);
      } catch (error) {
        console.error("Error fetching course:", error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug]);

  /* Handle video time updates -> push to server to snap to 20% */
  const handleTimeUpdate = async () => {
    if (!videoRef.current || !course) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 0;
    if (duration <= 0) return;

    // Round to integer, let the server do the 20% snapping
    const rawIntegerProgress = Math.round((current / duration) * 100);

    // Only send if it changed from last time we sent
    if (rawIntegerProgress !== lastSentProgress) {
      setLastSentProgress(rawIntegerProgress);
      try {
        // Send to server
        const res = await userRequest.put(`/courses/${slug}/completion`, {
          progress: rawIntegerProgress,
        });
        // Update local "serverCompletion"
        if (res.data?.course?.completion !== undefined) {
          setServerCompletion(res.data.course.completion);
        }
      } catch (err) {
        console.error("Error updating completion:", err);
      }
    }
  };

  /* Handle radio changes for quiz */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  /* Submit quiz logic */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course) return;

    const newResults = course.quiz.map((q, index) => {
      const userAnswer = answers[`q${index + 1}`];
      const isCorrect = userAnswer === q.correctAnswer;
      return { questionIndex: index + 1, isCorrect };
    });

    setResults(newResults);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleComplete = () => {
    alert("You have completed this lesson. Moving on!");
  };

  // Derived quiz correctness
  const correctCount = results.filter((r) => r.isCorrect).length;
  const totalQuestions = course?.quiz?.length || 0;
  const correctnessPercent = totalQuestions
    ? Math.round((correctCount / totalQuestions) * 100)
    : 0;

  if (loading) return <div>Loading...</div>;
  if (!course) return <div>Course not found!</div>;

  return (
    <PageWrapper>
      {/* Top Nav */}
      <TopNav>
        <TopNavLeft>
          <IconButton>
            <FaHome />
          </IconButton>
          <IconButton>
            <FaCog />
          </IconButton>
        </TopNavLeft>
      </TopNav>

      {/* Sidebar + Main */}
      <ContentContainer>
        <Sidebar>
          <CourseTitle>{course.title}</CourseTitle>

          <ProgressContainer>
            {/* Show server-snapped completion */}
            <div>{serverCompletion}% COMPLETE</div>
            <ProgressBarWrapper>
              <ProgressBar style={{ width: `${serverCompletion}%` }} />
            </ProgressBarWrapper>
          </ProgressContainer>

          <LessonsList>
            <LessonItem>
              <LessonIcon>▶</LessonIcon>
              <div>{course.title} (1:21)</div>
            </LessonItem>
          </LessonsList>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          <VideoPlayer
            ref={videoRef}
            controls
            onTimeUpdate={handleTimeUpdate}
            src={course.videoUrl}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </VideoPlayer>

          {/* Quiz */}
          <QuizSection>
            <QuizTitle>Quiz</QuizTitle>
            <QuizForm onSubmit={handleSubmit}>
              {course.quiz.map((quizItem, index) => {
                const qName = `q${index + 1}`;
                return (
                  <QuestionWrapper key={qName}>
                    <QuestionText>{quizItem.question}</QuestionText>
                    <OptionsList>
                      {quizItem.options.map((opt, i) => (
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
          </QuizSection>

          <CompleteButton onClick={handleComplete}>
            Complete and Continue
          </CompleteButton>
        </MainContent>
      </ContentContainer>

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>نتيجة الاختبار</ModalTitle>

            <Checklist>
              {results.map((r) => (
                <CheckItem key={r.questionIndex}>
                  {r.isCorrect ? <CheckIconCorrect /> : <CheckIconWrong />}
                  <span>Question {r.questionIndex}</span>
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
