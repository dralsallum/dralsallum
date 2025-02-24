import React, { useEffect, useState } from "react";
import {
  AllAt,
  AllAta,
  AllAtt,
  AllCon,
  AllFir,
  AllHe,
  AllPa,
  AllRe,
  AllSo,
  AllWr,
  ExAt,
  ExBo,
  ExBoSp,
  ExBot,
  ExCo,
  ExComa,
  ExCon,
  ExPa,
  ExTop,
  ExTopPa,
  ExWr,
  ImgFig,
  ImgMa,
  ImgRe,
  ImgSub,
  ImgWr,
  LoadingBar,
  LoadingContainer,
  PoCon,
  PoHe,
  PoLi,
  PoLiFl,
  PoLiLe,
  PoLiRi,
  PoLiSub,
  PoPa,
  PoTi,
  PoTiAt,
  PoTiSub,
  PoWr,
  ReAt,
  ReCon,
  ReSp,
  ReSpa,
  ReWr,
  TabAll,
  TabAt,
  TabCon,
  TabDiv,
  TabLi,
  TabLia,
  TabSp,
  TabSub,
  TabUl,
  TabWr,
} from "./Post.elements";
import { FaCheckCircle } from "react-icons/fa"; // Importing the checkmark icon
import { userRequest } from "../../requestMethods";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  const { lessonId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userRequest.get(`/lessons/lesson/${lessonId}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [lessonId]);

  if (loading) {
    return (
      <PoWr>
        <LoadingContainer>
          <LoadingBar />
        </LoadingContainer>
      </PoWr>
    );
  }

  if (!data) {
    return <div>Lesson not found</div>;
  }

  return (
    <PoWr>
      <PoCon>
        <PoTi>
          <PoTiSub>
            <PoTiAt href="">{data.section}</PoTiAt>
          </PoTiSub>
        </PoTi>
        <PoHe>{data.title}</PoHe>
        <PoPa>{data.heading}</PoPa>
        <PoLi>
          <PoLiSub>
            <PoLiFl>
              <PoLiRi>
                <span>بواسطة </span>
                <a>{data.auth}</a>
              </PoLiRi>
              <PoLiLe>
                نشر في {new Date(data.updatedAt).toLocaleDateString()}
              </PoLiLe>
            </PoLiFl>
            <ReWr>
              <ReCon>
                <FaCheckCircle
                  color="green"
                  size={14}
                  style={{ marginLeft: "5px" }}
                />
                <span>
                  <ReSp>
                    <ReSpa>تم مراجعة&nbsp; </ReSpa>
                  </ReSp>
                </span>
                <ReAt href=""> بواسطة {data.review}</ReAt>
              </ReCon>
            </ReWr>
          </PoLiSub>
        </PoLi>
      </PoCon>
      <ImgWr>
        <ImgSub>
          <div>
            <figure>
              <ImgRe>
                <ImgMa src={data.imgUrl} alt={data.imgAlt} />
              </ImgRe>
              <ImgFig>{data.imgAlt}</ImgFig>
            </figure>
          </div>
        </ImgSub>
      </ImgWr>
      <TabWr>
        <TabAll>
          <TabCon>
            <TabSub>
              <TabDiv>
                <TabSp>{data.paragraphsTitle1}</TabSp>
              </TabDiv>
              <TabUl>
                <TabLia>
                  <ExWr>
                    <ExAt href="">
                      <ExCon></ExCon>
                      <span>{data.title}</span>
                    </ExAt>
                  </ExWr>
                </TabLia>
                {data.tableItems &&
                  data.tableItems.map((item, index) => (
                    <TabLi key={index}>
                      <div>
                        <TabAt href={item.link}>{item.title}</TabAt>
                      </div>
                    </TabLi>
                  ))}
              </TabUl>
            </TabSub>
          </TabCon>
        </TabAll>
      </TabWr>
      <AllWr>
        <AllFir>
          <span>{data.paragraphsTitle1}</span>
        </AllFir>
        <AllCon>
          {data.paragraphs1 &&
            data.paragraphs1.map((paragraph, index) => (
              <AllPa key={index}>{paragraph}</AllPa>
            ))}
          <AllRe>
            <AllAt href="">
              <AllAtt>مواضيع اخرى: </AllAtt>
              <AllAta>{data.relateTitle}</AllAta>
            </AllAt>
          </AllRe>
          <AllSo>
            <AllHe>
              <span>{data.paragraphsTitle2}</span>
            </AllHe>
            {data.paragraphs2 &&
              data.paragraphs2.map((paragraph, index) => (
                <ExPa key={index}>{paragraph}</ExPa>
              ))}
          </AllSo>
          {data.quotes &&
            data.quotes.map((quote, index) => (
              <ExCo key={index}>
                <ExComa>"</ExComa>
                <div>
                  <ExTop>
                    <ExTopPa>{quote.text}</ExTopPa>
                  </ExTop>
                  <ExBo>
                    <ExBot>
                      <ExBoSp> — </ExBoSp>
                      <ExBoSp>{quote.author}</ExBoSp>
                    </ExBot>
                  </ExBo>
                </div>
              </ExCo>
            ))}
          <AllRe>
            <AllAt href="">
              <AllAtt>مواضيع اخرى: </AllAtt>
              <AllAta>{data.relateTitle}</AllAta>
            </AllAt>
          </AllRe>
          <AllHe>
            <span>{data.paragraphsTitle3}</span>
          </AllHe>
          {data.paragraphs3 &&
            data.paragraphs3.map((paragraph, index) => (
              <ExPa key={index}>{paragraph}</ExPa>
            ))}
          <AllHe>
            <span>{data.paragraphsTitle4}</span>
          </AllHe>
          {data.paragraphs4 &&
            data.paragraphs4.map((paragraph, index) => (
              <AllPa key={index}>{paragraph}</AllPa>
            ))}
        </AllCon>
        <div></div>
      </AllWr>
    </PoWr>
  );
};

export default Post;
