import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid #e5e7eb;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  padding: 1.25rem;
  direction: rtl;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const BannerContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
  text-align: right;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.4;

  @media (max-width: 767px) {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.9375rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    width: auto;
    min-width: 300px;
  }

  @media (min-width: 768px) {
    flex-shrink: 0;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;
  white-space: nowrap;
  min-height: 44px; // Better touch target on mobile

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (max-width: 639px) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
    width: 100%;
  }
`;

const SecondaryButton = styled(Button)`
  color: #374151;
  background-color: #e5e7eb;
  border: 1px solid #d1d5db;

  &:hover {
    background-color: #d1d5db;
    border-color: #9ca3af;
  }

  &:active {
    background-color: #c1c5cb;
  }
`;

const PrimaryButton = styled(Button)`
  color: white;
  background-color: #ff7143;
  order: -1; // Show first on mobile

  &:hover {
    background-color: #fc5017;
  }

  &:active {
    background-color: #e5420f;
  }

  @media (min-width: 640px) {
    order: 0; // Reset order on larger screens
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  direction: rtl;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 767px) {
    padding: 0.5rem;
    align-items: flex-end;
  }
`;

const Modal = styled.div`
  background: white;
  border-radius: 0.75rem;
  max-width: 42rem;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    max-height: 90vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 0;
  }
`;

const ModalContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 767px) {
    padding: 1.25rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 600;
  color: #111827;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #4b5563;
    background-color: #f3f4f6;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CookieSection = styled.div`
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
  text-align: right;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    padding-bottom: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const CookieHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  gap: 1rem;
`;

const CookieTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Checkbox = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  color: #2563eb;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 0.125rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const CookieDescription = styled.p`
  font-size: 0.9375rem;
  color: #4b5563;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 639px) {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
`;

const ModalButton = styled(Button)`
  @media (max-width: 639px) {
    width: 100%;
  }
`;

const ModalSecondaryButton = styled(SecondaryButton)`
  @media (max-width: 639px) {
    width: 100%;
  }
`;

const ModalPrimaryButton = styled(PrimaryButton)`
  @media (max-width: 639px) {
    width: 100%;
    order: 0;
  }
`;

const CookieConsent = ({ onConsentChange }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  });

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    saveConsent(allConsent);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    saveConsent(minimalConsent);
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
    setShowSettings(false);
  };

  const saveConsent = (consentData) => {
    setConsent(consentData);
    // Call the parent callback with consent data
    // The parent (App.js) will handle saving to localStorage
    if (onConsentChange) {
      onConsentChange(consentData);
    }
  };

  const handleConsentChange = (type, value) => {
    setConsent((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <>
      {/* Cookie Banner */}
      <BannerContainer>
        <BannerContent>
          <BannerLayout>
            <TextSection>
              <Title>نحن نقدر خصوصيتك</Title>
              <Description>
                نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك وتقديم
                إعلانات أو محتوى مخصص وتحليل حركة المرور. بالنقر على "قبول
                الكل"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.
              </Description>
            </TextSection>
            <ButtonGroup>
              <SecondaryButton onClick={() => setShowSettings(true)}>
                إدارة التفضيلات
              </SecondaryButton>
              <SecondaryButton onClick={handleRejectAll}>
                رفض الكل
              </SecondaryButton>
              <PrimaryButton onClick={handleAcceptAll}>قبول الكل</PrimaryButton>
            </ButtonGroup>
          </BannerLayout>
        </BannerContent>
      </BannerContainer>

      {/* Settings Modal */}
      {showSettings && (
        <ModalOverlay>
          <Modal>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>تفضيلات ملفات تعريف الارتباط</ModalTitle>
                <CloseButton onClick={() => setShowSettings(false)}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </CloseButton>
              </ModalHeader>

              <div>
                {/* Necessary Cookies */}
                <CookieSection>
                  <CookieHeader>
                    <CookieTitle>ملفات تعريف الارتباط الضرورية</CookieTitle>
                    <Checkbox
                      type="checkbox"
                      checked={consent.necessary}
                      disabled
                    />
                  </CookieHeader>
                  <CookieDescription>
                    هذه الملفات ضرورية لعمل الموقع الإلكتروني بشكل صحيح. لا يمكن
                    تعطيلها.
                  </CookieDescription>
                </CookieSection>

                {/* Analytics Cookies */}
                <CookieSection>
                  <CookieHeader>
                    <CookieTitle>ملفات تعريف الارتباط التحليلية</CookieTitle>
                    <Checkbox
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) =>
                        handleConsentChange("analytics", e.target.checked)
                      }
                    />
                  </CookieHeader>
                  <CookieDescription>
                    تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع موقعنا
                    الإلكتروني من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول.
                  </CookieDescription>
                </CookieSection>

                {/* Marketing Cookies */}
                <CookieSection>
                  <CookieHeader>
                    <CookieTitle>ملفات تعريف الارتباط التسويقية</CookieTitle>
                    <Checkbox
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) =>
                        handleConsentChange("marketing", e.target.checked)
                      }
                    />
                  </CookieHeader>
                  <CookieDescription>
                    تُستخدم هذه الملفات لتتبع الزوار عبر المواقع الإلكترونية.
                    تساعد في عرض إعلانات ذات صلة وجذابة للمستخدمين.
                  </CookieDescription>
                </CookieSection>

                {/* Functional Cookies */}
                <CookieSection>
                  <CookieHeader>
                    <CookieTitle>ملفات تعريف الارتباط الوظيفية</CookieTitle>
                    <Checkbox
                      type="checkbox"
                      checked={consent.functional}
                      onChange={(e) =>
                        handleConsentChange("functional", e.target.checked)
                      }
                    />
                  </CookieHeader>
                  <CookieDescription>
                    تتيح هذه الملفات وظائف محسنة وتخصيص، مثل مقاطع الفيديو
                    والدردشة المباشرة.
                  </CookieDescription>
                </CookieSection>
              </div>

              <ModalFooter>
                <ModalSecondaryButton onClick={() => setShowSettings(false)}>
                  إلغاء
                </ModalSecondaryButton>
                <ModalPrimaryButton onClick={handleSaveSettings}>
                  حفظ التفضيلات
                </ModalPrimaryButton>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default CookieConsent;
