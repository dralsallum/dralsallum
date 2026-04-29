import React from "react";
import styled from "styled-components";
import Woman from "../../assets/woman.jpg";

const Page = styled.div`
  min-height: 100dvh;
  width: 100%;
  position: relative;
  overflow: hidden;
  direction: rtl;
  font-family:
    "Tajawal",
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;

  /* Image background */
  background-image: url(${Woman});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-color: #0b2018;


    z-index: 2;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 3;
  min-height: 100dvh;
  padding: 36px 56px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 980px) {
    padding: 22px 18px 16px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-start; /* logo is TOP-LEFT like the reference */
  align-items: center;
`;

const Brand = styled.div`
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  font-size: 30px;
  letter-spacing: 0.2px;

  @media (max-width: 980px) {
    font-size: 24px;
  }
`;

const Main = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr; /* text left, card right */
  gap: 28px;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 18px;
    padding-top: 6px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  padding-top: 18px;

  @media (max-width: 980px) {
    padding-top: 8px;
  }
`;

const Kicker = styled.div`
  color: rgba(255, 255, 255, 0.88);
  font-weight: 800;
  font-size: 34px;
  margin-bottom: 10px;

  @media (max-width: 980px) {
    font-size: 26px;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: rgba(255, 255, 255, 0.96);
  font-weight: 900;
  font-size: 86px;
  line-height: 0.98;

  @media (max-width: 1200px) {
    font-size: 74px;
  }
  @media (max-width: 980px) {
    font-size: 54px;
    line-height: 1.05;
  }
`;

const CTA = styled.button`
  margin-top: 22px;
  border: none;
  cursor: pointer;
  padding: 12px 22px;
  border-radius: 14px;
  font-weight: 900;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.78);

  /* green-ish button like the reference */
  background: linear-gradient(180deg, #c9d29b 0%, #b7c684 100%);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.15s ease,
    filter 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.03);
  }
  &:active {
    transform: translateY(0px);
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end; /* card on the RIGHT */
  align-items: center;

  @media (max-width: 980px) {
    justify-content: flex-start;
  }
`;

/* Right card (tan / warm glass) */
const Card = styled.div`
  width: 520px;
  max-width: 100%;
  border-radius: 16px;
  padding: 22px 22px 18px;

  background: rgba(187, 147, 86, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.28);
`;

const CardTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 14px;
`;

const CardTopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const CardLabel = styled.div`
  color: rgba(255, 255, 255, 0.82);
  font-weight: 800;
  font-size: 24px;
`;

const AgeRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const AgeValue = styled.div`
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  font-size: 55px;
  line-height: 1;
  letter-spacing: 0.2px;
`;

const AgeUnit = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-weight: 800;
  font-size: 18px;
`;

const Rule = styled.div`
  margin: 14px 0 14px;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const TwoCols = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.72);
  font-weight: 800;
  font-size: 14px;
`;

const StatValue = styled.div`
  color: rgba(255, 255, 255, 0.93);
  font-weight: 900;
  font-size: 34px;
  line-height: 1.1;
`;

const MeterRow = styled.div`
  display: grid;
  grid-template-columns: 98px 1fr;
  align-items: center;
  gap: 14px;
`;

const Blocks = styled.div`
  display: flex;
  gap: 7px;
  justify-content: flex-start;
`;

const Block = styled.span`
  width: 10px;
  height: 18px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.55);
`;

const Meter = styled.div`
  height: 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.14);
  overflow: hidden;
`;

const MeterFill = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #caa55a 0%, #e4c06a 100%);
  border-radius: 999px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  padding-top: 8px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

const BottomItem = styled.div`
  color: rgba(255, 255, 255, 0.72);
  font-weight: 900;
  font-size: 18px;
  white-space: nowrap;

  @media (max-width: 980px) {
    font-size: 16px;
    white-space: normal;
  }
`;

const Medical = () => {
  return (
    <Page>
      <Inner>
        <TopBar>
          <Brand>مديد</Brand>
        </TopBar>

        <Main>
          {/* LEFT: headline + CTA */}
          <Left>
            <Kicker>ابدأ بإطالة</Kicker>
            <Title>عمرك الصحي</Title>
            <CTA>انضم الى قائمة الانتظار</CTA>
          </Left>

          {/* RIGHT: stats card */}
          <Right>
            <Card>
              <CardTop>
                <div />
                <CardTopRight>
                  <CardLabel>عمرك</CardLabel>
                  <AgeRow>
                    <AgeValue>8.6-</AgeValue>
                    <AgeUnit>سنة</AgeUnit>
                  </AgeRow>
                </CardTopRight>
              </CardTop>

              <Rule />

              <TwoCols>
                <Stat>
                  <StatLabel>العمر الزمني</StatLabel>
                  <StatValue>33.4</StatValue>
                </Stat>

                <Stat>
                  <StatLabel>العمر البيلوجي</StatLabel>
                  <StatValue>42</StatValue>
                </Stat>
              </TwoCols>

              <MeterRow>
                <Blocks>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Block key={i} />
                  ))}
                </Blocks>
                <Meter>
                  <MeterFill />
                </Meter>
              </MeterRow>
            </Card>
          </Right>
        </Main>

        {/* Bottom row (same order/placement as the reference) */}
        <Bottom>
          <BottomItem>١٥٠ ريال فقط</BottomItem>
          <BottomItem>فحص مخبري بـ ٨٠ علامة صحية</BottomItem>
          <BottomItem>تتبع نتائجك على مدار الحياة</BottomItem>
          <BottomItem>فريق طبي خاص</BottomItem>
        </Bottom>
      </Inner>
    </Page>
  );
};

export default Medical;
