import React, { useEffect, useState } from "react";
import {
  LaBo,
  LaBoAf,
  LaBoSp,
  LaBoSpa,
  LaBot,
  LaCon,
  LaImg,
  LaWr,
  ReAt,
  ReBe,
  ReCon,
  ReSub,
  ReWra,
  LoadingContainer,
  LoadingBar,
} from "./Relate.elements";
import { userRequest } from "../../requestMethods";

const Relate = ({ currentLessonNumber }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await userRequest.get(
          `lessons/random/${currentLessonNumber}`
        );
        setArticles(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, [currentLessonNumber]);

  return (
    <ReBe>
      {" "}
      {articles.map((article) => (
        <ReWra>
          <ReCon>مقالات ذات صلة</ReCon>
          <ReSub>
            <ReAt
              key={article.lessonNumber}
              href={`/therapy/${article.lessonNumber}`}
            >
              <LaWr>
                <LaCon>
                  <LaImg src={article.imgUrl} alt={article.title} />
                </LaCon>
              </LaWr>
              <LaBo>
                <LaBot>{article.section}</LaBot>
                <LaBoSp>
                  <LaBoSpa>{article.title}</LaBoSpa>
                </LaBoSp>
                <LaBoAf>بواسطة {article.review}</LaBoAf>
              </LaBo>
            </ReAt>
          </ReSub>
        </ReWra>
      ))}
    </ReBe>
  );
};

export default Relate;
