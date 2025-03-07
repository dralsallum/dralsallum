// Course.jsx

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

/* ====== Loading Animation Styles ====== */
const loadAnimation = keyframes`
  0% { left: -50%; }
  50% { left: 100%; }
  100% { left: 100%; }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
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

/* ====== Main Page Wrapper ====== */
const PageWrapper = styled.div`
  padding: 2rem;
  direction: rtl;
  background-color: #ffffff;
  min-height: 100vh;
`;

/* ====== Top Bar (Filters + Search) ====== */
const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: #666666;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 250px;
  @media (max-width: 768px) {
    width: 180px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333;
`;

/* ====== Heading ====== */
const Heading = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #222;
`;

/* ====== Courses Grid ====== */
const CoursesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

/* ====== Course Card ====== */
const CourseLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CourseCard = styled.div`
  width: 300px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fafafa;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const PlaceholderImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #aaa;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

/* ====== Progress Bar ====== */
const CourseProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ddd;
  margin: 0.5rem 0 1rem;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #ff7143;
  transition: width 0.3s ease;
  width: ${(props) => props.percent}%;
`;

const ProgressText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Basic search state
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("/courses");
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Filter courses by search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <PageWrapper>
      <TopBar>
        <Filters>
          <span>Category: All</span>
          <span>Author: All</span>
        </Filters>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="ابحث عن دورة"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </TopBar>

      <Heading>الدورات</Heading>

      <CoursesGrid>
        {filteredCourses.length === 0 ? (
          <p>لا توجد دورات مطابقة لبحثك</p>
        ) : (
          filteredCourses.map((course) => (
            <CourseLink key={course._id} to={`/learning/${course.slug}`}>
              <CourseCard>
                {/* If a thumbnail URL exists, display it; otherwise show a placeholder */}
                {course.thumbnail ? (
                  <CourseImage
                    src={course.thumbnail}
                    alt={`Thumbnail for ${course.title}`}
                  />
                ) : (
                  <PlaceholderImageWrapper>📚</PlaceholderImageWrapper>
                )}

                <CourseTitle>{course.title}</CourseTitle>

                <CourseProgressBar>
                  <ProgressBarFill percent={course.completion} />
                </CourseProgressBar>
                <ProgressText>{course.completion}% COMPLETE</ProgressText>
              </CourseCard>
            </CourseLink>
          ))
        )}
      </CoursesGrid>
    </PageWrapper>
  );
};

export default Course;
