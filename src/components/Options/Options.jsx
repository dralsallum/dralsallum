import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ArA,
  ArASp,
  ArConFCon,
  ArContainerF,
  ArSubConF,
  ArWrapper,
  ColAud,
  ColAudCon,
  ColAudConF,
  ColAudSubBut,
  ColAudSubCon,
  ColAudSubSpan,
  ColAudSubSvg,
  ColConFCon,
  ColSubConFCon,
  ColSubPara,
  ColSubParaCon,
  ExCon,
  ExLab,
  ExReCon,
  ExReInp,
  ExReSubInpCon,
  ExSubCon,
  ExSubSpan,
  GoConFCon,
  KmCon,
  KmSubCon,
  OldSpan,
  ReConFCon,
  ReConFImg,
  ReConFaImg,
  ReSubConFCon,
  RowConFCon,
  RowLi,
  RowLiBut,
  RowLiCon,
  RowLisCon,
  RowReSpan,
  RowSpan,
  UtCon,
  UtyCon,
} from "./Options.elements";
import Back from "../../assets/tabs_background_1.svg";
import ReBack from "../../assets/double.svg";
import slides from "../../utils/Slides";

const buttonToSlideIndex = {
  Meditate: 0,
  Sleep: 1,
  Move: 2,
  Focus: 3,
  WakeUp: 4,
};

const buttonsInfo = [
  { label: "Meditate", title: "الاختبار" },
  { label: "Sleep", title: "الشخصيات" },
  { label: "Move", title: "الخدمة" },
  { label: "Focus", title: "الاسعار" },
  { label: "WakeUp", title: "النمو" },
];

const Article = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioDuration, setAudioDuration] = useState(0); // duration of the audio
  const [audioCurrentTime, setAudioCurrentTime] = useState(0); // current time of the audio
  const audioPercentage = audioDuration
    ? (audioCurrentTime / audioDuration) * 100
    : 0;

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleButtonClick = useCallback((buttonLabel) => {
    const newIndex = buttonToSlideIndex[buttonLabel];
    if (newIndex !== undefined) {
      setCurrentIndex(newIndex);
    }
  }, []);

  const handlePlayAudio = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      // Remove old event listeners
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.src = slides[currentIndex].audioSrc;
      audioRef.current.load();
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      };
    }
  }, [currentIndex]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const buttonComponents = buttonsInfo.map((button) => (
    <RowLiCon key={button.label}>
      <RowLi>
        <RowLiBut
          onClick={() => handleButtonClick(button.label)}
          isActive={currentIndex === buttonToSlideIndex[button.label]}
        >
          <RowSpan>
            <RowReSpan></RowReSpan>
            {button.title}
          </RowSpan>
        </RowLiBut>
      </RowLi>
    </RowLiCon>
  ));

  return (
    <ArWrapper>
      <ArA>
        <ArASp>استكشف كيف تستخدم خدماتنا</ArASp>
      </ArA>
      <ArContainerF>
        <ArSubConF>
          <ArConFCon>
            <ReConFCon>
              <ReSubConFCon>
                <ReConFaImg src={ReBack} alt="" />
              </ReSubConFCon>
              <ReConFImg src={Back} alt="" />
            </ReConFCon>
          </ArConFCon>
          <GoConFCon>
            <RowConFCon>
              <RowLisCon>{buttonComponents}</RowLisCon>
            </RowConFCon>
            <ColConFCon>
              <ColSubConFCon>
                <ColSubParaCon>
                  <ColSubPara>{slides[currentIndex].text}</ColSubPara>
                </ColSubParaCon>
                <ColAudConF>
                  <ColAud
                    ref={audioRef}
                    src={slides[currentIndex].audioSrc}
                    onLoadedMetadata={() => {
                      if (audioRef.current) {
                        setAudioDuration(audioRef.current.duration);
                      }
                    }}
                    onTimeUpdate={() => {
                      if (audioRef.current) {
                        setAudioCurrentTime(audioRef.current.currentTime);
                      }
                    }}
                  ></ColAud>
                  <ColAudCon>
                    <ColAudSubCon>
                      <ExCon>
                        <ExLab>{slides[currentIndex].label}</ExLab>
                        <ExSubCon>
                          <ExSubSpan>{formatTime(audioCurrentTime)}</ExSubSpan>
                          <ExReCon>
                            <ExReInp type="text" />
                            <ExReSubInpCon>
                              <UtCon></UtCon>
                              <UtyCon></UtyCon>
                            </ExReSubInpCon>
                            <KmCon>
                              <KmSubCon
                                style={{ right: `${100 - audioPercentage}%` }}
                              ></KmSubCon>
                            </KmCon>
                          </ExReCon>
                          <OldSpan>{formatTime(audioDuration)}</OldSpan>
                        </ExSubCon>
                      </ExCon>
                      <ColAudSubBut onClick={handlePlayAudio}>
                        <ColAudSubSpan>
                          <ColAudSubSvg viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M8 5v14l11-7z" />
                          </ColAudSubSvg>
                        </ColAudSubSpan>
                      </ColAudSubBut>
                    </ColAudSubCon>
                  </ColAudCon>
                </ColAudConF>
              </ColSubConFCon>
            </ColConFCon>
          </GoConFCon>
        </ArSubConF>
      </ArContainerF>
    </ArWrapper>
  );
};

export default Article;
