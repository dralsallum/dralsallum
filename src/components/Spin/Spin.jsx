import React, { useState } from "react";
import {
  ButCen,
  ButCon,
  ButSp,
  ButSpa,
  ButStr,
  ButSubCon,
  ButWr,
  Inp,
  InputWr,
  LaOn,
  LaOnCo,
  LaOnDe,
  LaOnFe,
  LaOnKe,
  LaOnLe,
  LaOnPe,
  LaOnQe,
  LaOnRe,
  LaOnSp,
  LaOnSu,
  LaOnTe,
  LaOnYe,
  LaOnZe,
  LaTw,
  MainCon,
  MainEiEi,
  MainEiEl,
  MainEiFi,
  MainEiFo,
  MainEiNi,
  MainEiOne,
  MainEiSe,
  MainEiSi,
  MainEiTe,
  MainEiTh,
  MainEiTi,
  MainEiTw,
  MainImg,
  MainImgCon,
  MainImgEi,
  MainImgFi,
  MainImgFo,
  MainImgNi,
  MainImgOn,
  MainImgSe,
  MainImgSi,
  MainImgTh,
  MainImgTw,
  MainNTw,
  MainNiOn,
  MainNiTw,
  MainSubCon,
  MainWr,
  ReSp,
  ReSpa,
  ReStr,
  ResBut,
  ResButCe,
  ResButHe,
  ResButMa,
  ResButSp,
  ResButStr,
  ResButWr,
  ResCen,
  ResCo,
  ResSp,
  ResSpan,
  ResStr,
  ResSuCo,
  ResWr,
  SpAli,
  SpCon,
  SpOn,
  SpSubCon,
  SpTw,
  SpVe,
  SpinB,
  SpinCon,
  SpinCro,
  SpinCross,
  SpinSp,
  SpinSpOn,
  SpinSpTw,
  SpinSpa,
  SpinSpan,
  SpinSubSpan,
  SpinWra,
  SpinWrapper,
  WrongSp,
} from "./Spin.elements";

const Spin = () => {
  const [email, setEmail] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDegree, setSpinDegree] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [showSpinWrapper, setShowSpinWrapper] = useState(true);
  const [emailError, setEmailError] = useState("");

  const getRandomSpinDegree = () => {
    const sectionDegree = 360 / 12;
    const randomSection = Math.floor(Math.random() * 12);
    const degreeWithinSection = Math.random() * sectionDegree;
    const totalDegree = randomSection * sectionDegree + degreeWithinSection;

    console.log("Random spin degree: ", totalDegree);
    return totalDegree;
  };

  const getResultFromDegree = (degree) => {
    const sectionDegree = 360 / 12;
    const adjustedDegree = (degree + 360) % 360;
    let sectionIndex = Math.floor(adjustedDegree / sectionDegree);
    sectionIndex = (sectionIndex + 3) % 12;

    const prizes = [
      "$15 OFF", // Segment 1
      "15% OFF", // Segment 2
      "10% OFF", // Segment 3
      "15% OFF", // Segment 4
      "$15 OFF", // Segment 5
      "Try again", // Segment 6
      "10% OFF", // Segment 7
      "15% OFF", // Segment 8
      "20% OFF", // Segment 9
      "10% OFF", // Segment 10
      "Try again", // Segment 11
      "15% OFF", // Segment 12
    ];
    return prizes[sectionIndex];
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (email.trim() === "") {
      alert("Please enter your email address to spin the wheel.");
      return;
    }
    setShowResult(false);

    const newSpinDegree = getRandomSpinDegree();
    setSpinDegree(newSpinDegree);
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      const prize = getResultFromDegree(newSpinDegree);
      setResultMessage(prize); // Update the result message based on the prize
      setShowResult(true); // Show the result
    }, 3000); // Duration of spin animation
  };

  const handleResButClick = () => {
    setShowSpinWrapper(false);
  };

  return (
    <SpinWrapper show={showSpinWrapper}>
      <SpinWra></SpinWra>
      <SpinCon>
        <SpinCross onClick={handleResButClick}>
          <SpinCro>
            <SpOn>
              <SpTw>
                <SpinSpTw>
                  <SpinSpOn>x</SpinSpOn>
                </SpinSpTw>
              </SpTw>
            </SpOn>
          </SpinCro>
        </SpinCross>
        <div></div>
        <div></div>
        <MainWr show={showResult}>
          <MainCon>
            <MainSubCon>
              <MainImg>
                <MainImgOn></MainImgOn>
                <MainImgTw
                  spin={isSpinning}
                  style={{ transform: `rotate(${spinDegree}deg)` }}
                >
                  <LaOn>
                    <LaOnCo>
                      <LaOnSp>$15 OFF</LaOnSp>
                    </LaOnCo>
                  </LaOn>
                  <LaOn>
                    <LaOnSu>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnSu>
                  </LaOn>
                  <LaOn>
                    <LaOnRe>
                      <LaOnSp>10% OFF</LaOnSp>
                    </LaOnRe>
                  </LaOn>
                  <LaOn>
                    <LaOnDe>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnDe>
                  </LaOn>
                  <LaOn>
                    <LaOnTe>
                      <LaOnSp>$15 OFF</LaOnSp>
                    </LaOnTe>
                  </LaOn>
                  <LaOn>
                    <LaOnQe>
                      <LaOnSp>Try again</LaOnSp>
                    </LaOnQe>
                  </LaOn>
                  <LaTw>
                    <LaOnYe>
                      <LaOnSp>10% OFF</LaOnSp>
                    </LaOnYe>
                  </LaTw>
                  <LaTw>
                    <LaOnZe>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnZe>
                  </LaTw>
                  <LaTw>
                    <LaOnFe>
                      <LaOnSp>20% OFF</LaOnSp>
                    </LaOnFe>
                  </LaTw>
                  <LaTw>
                    <LaOnLe>
                      <LaOnSp>10% OFF</LaOnSp>
                    </LaOnLe>
                  </LaTw>
                  <LaTw>
                    <LaOnKe>
                      <LaOnSp>Try again</LaOnSp>
                    </LaOnKe>
                  </LaTw>
                  <LaTw>
                    <LaOnPe>
                      <LaOnSp>15% OFF</LaOnSp>
                    </LaOnPe>
                  </LaTw>
                </MainImgTw>
                <MainImgTh></MainImgTh>
                <MainImgFo></MainImgFo>
                <MainImgFi></MainImgFi>
                <MainImgSi></MainImgSi>
                <MainImgSe></MainImgSe>
                <MainImgEi>
                  <MainEiOne></MainEiOne>
                  <MainEiTw></MainEiTw>
                  <MainEiTh></MainEiTh>
                  <MainEiFo></MainEiFo>
                  <MainEiFi></MainEiFi>
                  <MainEiSi></MainEiSi>
                  <MainEiSe></MainEiSe>
                  <MainEiEi></MainEiEi>
                  <MainEiNi></MainEiNi>
                  <MainEiTe></MainEiTe>
                  <MainEiEl></MainEiEl>
                  <MainEiTi></MainEiTi>
                </MainImgEi>
                <MainImgNi>
                  <MainNiOn></MainNiOn>
                  <MainNiTw>
                    <MainNTw></MainNTw>
                  </MainNiTw>
                </MainImgNi>
              </MainImg>
            </MainSubCon>
          </MainCon>
        </MainWr>
        <ButCon show={showResult}>
          <ButSubCon>
            <ButWr>
              <ButCen>
                <ButSpa>
                  <ButStr>
                    <ButSp onClick={handleSubmit}>Spin to win</ButSp>
                  </ButStr>
                </ButSpa>
              </ButCen>
            </ButWr>
          </ButSubCon>
        </ButCon>
        <InputWr show={showResult}>
          <Inp
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        </InputWr>

        <SpCon show={showResult}>
          <SpSubCon>
            <SpVe>
              <SpAli>
                <SpinSpan>
                  <SpinSubSpan>
                    <SpinSp>
                      <SpinB>Want an even better deal?</SpinB>
                    </SpinSp>
                    <SpinSpa>
                      <SpinB>
                        Spin to unlock an exclusive offer on your first order.
                      </SpinB>
                      <WrongSp></WrongSp>
                    </SpinSpa>
                  </SpinSubSpan>
                </SpinSpan>
              </SpAli>
            </SpVe>
          </SpSubCon>
        </SpCon>
        <ResWr show={showResult}>
          <ResCo>
            <ResSuCo>
              <ResCen>
                <ResSp>
                  <ResSpan>
                    <ResStr>You won {resultMessage}!!</ResStr>
                  </ResSpan>
                </ResSp>
                <br />
                <br />
                <ReSp>
                  <ReSpa>
                    <ReStr>Check your inbox for the code, and</ReStr>
                    &nbsp;take <br /> that first step of&nbsp;your
                    <br />
                    wellness journey
                  </ReSpa>
                </ReSp>
              </ResCen>
            </ResSuCo>
          </ResCo>
        </ResWr>
        <ResButWr show={showResult}>
          <ResButMa onClick={handleResButClick}>
            <ResButHe>
              <ResButCe>
                <ResButSp>
                  <ResButStr>
                    <ResBut>Close</ResBut>
                  </ResButStr>
                </ResButSp>
              </ResButCe>
            </ResButHe>
          </ResButMa>
        </ResButWr>
      </SpinCon>
    </SpinWrapper>
  );
};

export default Spin;
