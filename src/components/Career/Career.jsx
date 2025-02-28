import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import NavTech from "../NavTech/NavTech";

/* الحاوية (الصفحة الكاملة) */
const ContainerAll = styled.div`
  direction: rtl;
  margin: 20px 30px;
  background: #f8f6f2;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    margin: 10px 15px;
    border-radius: 10px;
    background: #f8f6f2;
    overflow: hidden;
  }
`;

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 1.5rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroSubheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const AdditionalText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const EnrollButton = styled.button`
  background: #ff7143;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

/* ======================
   === Video Player ===
   ====================== */

const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 2rem auto 1rem;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
  aspect-ratio: 16 / 9;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
`;

const ThumbnailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("THUMBNAIL_URL") center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BigPlayButton = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

/* شريط التحكم السفلي */
const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  direction: ltr;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;
`;

const ProgressBar = styled.input.attrs({ type: "range" })`
  flex: 1;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
  height: 4px;
  margin: 0;

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: #ccc;
    border-radius: 2px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 14px;
    width: 14px;
    background: #ff7143;
    border-radius: 50%;
    margin-top: -5px;
    border: 2px solid #fff;
  }
`;

const TimeLabel = styled.div`
  color: #fff;
  font-size: 14px;
  min-width: 70px;
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff7143;
  }
`;

const FullscreenButton = styled(IconButton)``;

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return "0:00";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`;
    }
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleThumbnailClick = () => {
    handlePlayPause();
  };

  const handleProgressChange = (e) => {
    if (videoRef.current) {
      videoRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  const handleMuteClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (videoRef.current?.parentNode?.requestFullscreen) {
        videoRef.current.parentNode.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <VideoPlayerContainer>
      <StyledVideo
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        muted={isMuted}
      >
        <source
          src="https://alsallum.s3.eu-north-1.amazonaws.com/fluentfox_ad.mp4"
          type="video/mp4"
        />
        متصفحك لا يدعم تشغيل الفيديو.
      </StyledVideo>

      {/* Overlay thumbnail with big play button (only before first playback) */}
      {!isPlaying && currentTime === 0 && (
        <ThumbnailOverlay onClick={handleThumbnailClick}>
          <BigPlayButton>▶</BigPlayButton>
        </ThumbnailOverlay>
      )}

      {/* Bottom control bar */}
      <ControlsContainer>
        <IconButton onClick={handlePlayPause}>
          {isPlaying ? "⏸" : "▶"}
        </IconButton>

        <ProgressBar
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleProgressChange}
        />

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <TimeLabel>
            {formatTime(currentTime)} / {formatTime(duration)}
          </TimeLabel>

          <IconButton onClick={handleMuteClick}>
            {isMuted ? "🔇" : "🔊"}
          </IconButton>

          <FullscreenButton onClick={handleFullscreen}>⛶</FullscreenButton>
        </div>
      </ControlsContainer>
    </VideoPlayerContainer>
  );
};

/* ======================
   === Academic Section ===
   ====================== */
const Career = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEnroll = () => {
    const product = {
      _id: "PTYA001",
      title: "أكاديمية التفوق الدراسي",
      price: 249,
      quantity: 1,
    };
    dispatch(addProduct(product));
    navigate("/outcome");
  };

  return (
    <ContainerAll>
      <NavTech />

      <HeroSection>
        <HeroHeading>انطلق نحو مستقبل أكاديمي مشرق</HeroHeading>
        <HeroSubheading>
          استكشف أساليب الدراسة الذكية والتقنيات التعليمية المبتكرة لتحقيق تفوقك
          الدراسي وتطوير مهاراتك الأكاديمية. انضم إلى برنامجنا المتكامل واستعد
          لتحويل تجربتك التعليمية إلى رحلة مليئة بالإبداع والنجاح.
        </HeroSubheading>
        <AdditionalText>
          تعلم كيف تدمج بين النظرية والتطبيق، وتبنّى أساليب دراسة جديدة تجعل من
          كل يوم فرصة للتعلم والنمو الشخصي.
        </AdditionalText>
        <EnrollButton onClick={handleEnroll}>
          سجل الآن مقابل 249 ريال
        </EnrollButton>

        <VideoPlayer />
      </HeroSection>
    </ContainerAll>
  );
};

export default Career;
