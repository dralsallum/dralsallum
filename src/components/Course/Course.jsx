import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* ====== Page Wrapper ====== */
const PageWrapper = styled.div`
  padding: 2rem;
  direction: rtl;
  background-color: #ffffff;
  min-height: 100vh;
`;

/* Top Bar (Category, Author, Search) */
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

/* Heading "Courses" */
const Heading = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #222;
`;

/* ====== Course Card Section ====== */
const CoursesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CourseLink = styled(Link)`
  /* This wrapper ensures the entire card is clickable */
  text-decoration: none;
  color: inherit; /* Inherit text color so it doesn't look like a blue link */
`;

const CourseCard = styled.div`
  width: 300px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fafafa;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CourseImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: #f0f0f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #aaa;
  margin-bottom: 1rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CourseProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ddd;
  margin: 0.5rem 0 1rem;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0%; /* 0% complete */
    height: 100%;
    background-color: #ff7143;
    left: 0;
    top: 0;
  }
`;

const CourseAuthorProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CourseAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: #666;

  &::before {
    content: "👤";
    display: inline-block;
  }
`;

const ProgressText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;

const Course = () => {
  return (
    <PageWrapper>
      <TopBar>
        <Filters>
          <span>Category: All</span>
          <span>Author: All</span>
        </Filters>
        <SearchContainer>
          <SearchInput type="text" placeholder="Find a product" />
        </SearchContainer>
      </TopBar>

      <Heading>Courses</Heading>

      <CoursesGrid>
        {/* Wrap the card with Link to make the entire card clickable */}
        <CourseLink to="/teach">
          <CourseCard>
            <CourseImageWrapper>II</CourseImageWrapper>
            <CourseTitle>
              كيفية الدراسة بفعالية: دليلك نحو التميز الأكاديمي
            </CourseTitle>
            <CourseProgressBar />
            <CourseAuthorProgress>
              <CourseAuthor>Saud Alsallum</CourseAuthor>
              <ProgressText>0% COMPLETE</ProgressText>
            </CourseAuthorProgress>
          </CourseCard>
        </CourseLink>
      </CoursesGrid>
    </PageWrapper>
  );
};

export default Course;
