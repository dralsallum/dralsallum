import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AdCon,
  AdConSec,
  AgBut,
  AgCon,
  AgPa,
  ApConOn,
  ApConTw,
  ApFo,
  ApFoIn,
  ApFoInput,
  ApFoNo,
  ApHe,
  ApHeBe,
  ApHeDi,
  ApNo,
  ApSubWrap,
  ApWrap,
  AqAra,
  AqAraOne,
  AqAraOnePa,
  AqAraTwo,
  AqCon,
  AqMain,
  AqSec,
  AqSubCon,
  AqSubSec,
  ConFi,
  ConFo,
  ConOn,
  ConTh,
  ConTo,
  HiFiLa,
  HiFiOp,
  HiFiSel,
  HiOnIn,
  HiOnLa,
  HiOnSp,
  HiTwLa,
  HiWraOn,
  MasterOne,
  MasterTwo,
  TmBut,
  TmCon,
  TmEq,
  TmIn,
  TmInCon,
  TmInLab,
  TmInSpan,
  TmInSubCon,
} from "./Apply.elements";

const Apply = () => {
  const [isMasterOneVisible, setIsMasterOneVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [otherSpecialty, setOtherSpecialty] = useState("");
  const [sector, setSector] = useState(""); // Government or Private sector
  const [hasLoans, setHasLoans] = useState(""); // Previous loans
  const [salaryRange, setSalaryRange] = useState("");
  const [disciplineOptions, setDisciplineOptions] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const professionOptions = {
    ممرض: ["ممرض سريري", "ممرض جراحي"],
    طبيب: ["اخرى", "اطفال", "جراحة", "باطنة", "اعصاب"],
    مبرمج: [
      "تصميم",
      "الواجهة الأمامية",
      "الواجهة الخلفية",
      "علوم البيانات",
      "أخرى",
    ],
    مهندس: ["اخرى", "بترولي", "معماري", "ميكانيكي", "كهربائي", "ميداني"],
    مدرس: ["اخرى", "علوم دينية", "احياء", "فيزياء", "رياضيات"],
    اداري: ["اداري تجاري", "قطاع صحي"],
  };

  // Salary range options
  const salaryRanges = [
    "أقل من 5,000 ريال",
    "5,000 - 10,000 ريال",
    "10,000 - 15,000 ريال",
    "15,000 - 20,000 ريال",
    "20,000 - 30,000 ريال",
    "أكثر من 30,000 ريال",
  ];

  const submitApplication = async () => {
    setIsLoading(true);
    const applicationData = {
      email,
      phone,
      firstName,
      lastName,
      profession,
      discipline,
      otherSpecialty,
      sector,
      hasLoans,
      salaryRange,
    };

    try {
      // Make the API call to submit the application
      const response = await fetch(
        "https://dralsallumapi-8efe1bd8f8df.herokuapp.com/api/uploads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicationData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle the response
      const result = await response.json();
      console.log(result);
      // Maybe show a success message or redirect the user
      navigate("/");
    } catch (error) {
      // Handle any errors
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  const handleInputChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const validateEmail = (email) => {
    // Regex for basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleButtonClick = () => {
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }

    setIsMasterOneVisible(!isMasterOneVisible);
  };

  useEffect(() => {
    if (profession) {
      setDisciplineOptions(professionOptions[profession] || []);
    }
  }, [profession]);

  // Loading spinner component
  const LoadingSpinner = () => (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          border: "2px solid #ffffff40",
          borderTop: "2px solid #ffffff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <span>جاري الإرسال...</span>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );

  return (
    <>
      <ApWrap>
        <ApSubWrap>
          <ApConOn>
            <ApHe>حان الوقت للارتقاء بمستوى مهنتك إلى المستوى التالي</ApHe>
            <ApHeBe>
              بغض النظر عن المكان الذي ترغب في الذهاب إليه، لدينا فرص في مواقع
              متعددة في جميع أنحاء البلاد
            </ApHeBe>
            <ApHeDi></ApHeDi>
          </ApConOn>
          <ApConTw>
            <AqCon></AqCon>
            <AqMain>
              <AqSec>
                <AqSubSec>
                  <AqAra>
                    <AqAraOne>
                      <AqAraOnePa>
                        خُذ الخطوة الأولى لبدء مسيرتك المهنية الجديدة
                      </AqAraOnePa>
                    </AqAraOne>
                    <AqAraTwo>
                      <ApFo onSubmit={(e) => e.preventDefault()}>
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoIn type="text" />
                        <ApFoInput type="text" />
                        <ApFoNo>
                          <ApNo></ApNo>
                        </ApFoNo>
                        <AdCon>
                          <AdConSec>
                            {isMasterOneVisible && (
                              <MasterOne>
                                <TmCon>
                                  <ConOn>
                                    <svg></svg>
                                  </ConOn>
                                  <ConTo>
                                    <svg></svg>
                                  </ConTo>
                                  <ConTh>
                                    <svg></svg>
                                  </ConTh>
                                  <ConFo>
                                    <svg></svg>
                                  </ConFo>
                                  <ConFi>
                                    <svg></svg>
                                  </ConFi>
                                  <TmEq>
                                    <TmInCon>
                                      <TmInSubCon>
                                        <TmInLab htmlFor="emailInput"></TmInLab>
                                        <TmIn
                                          id="emailInput"
                                          type="email"
                                          placeholder="ايميل *"
                                          value={email}
                                          onChange={handleEmailChange}
                                        />
                                        {emailError && (
                                          <TmInSpan>{emailError}</TmInSpan>
                                        )}
                                      </TmInSubCon>
                                    </TmInCon>
                                    <TmBut onClick={handleButtonClick}>
                                      ابدا
                                    </TmBut>
                                  </TmEq>
                                  <a href=""></a>
                                  <a href=""></a>
                                  <a href=""></a>
                                </TmCon>
                              </MasterOne>
                            )}
                            {!isMasterOneVisible && (
                              <MasterTwo>
                                <HiWraOn>
                                  <HiOnLa htmlFor="">ايميل *</HiOnLa>
                                  <HiOnIn
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) =>
                                      handleInputChange(e, setEmail)
                                    }
                                    disabled={isLoading}
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">رقم الجوال *</HiTwLa>
                                  <HiOnIn
                                    id="phone"
                                    type="text"
                                    placeholder="رقم الجوال"
                                    value={phone}
                                    onChange={(e) =>
                                      handleInputChange(e, setPhone)
                                    }
                                    disabled={isLoading}
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">الاسم الاول *</HiTwLa>
                                  <HiOnIn
                                    id="firstName"
                                    type="text"
                                    placeholder="الاسم الاول"
                                    value={firstName}
                                    onChange={(e) =>
                                      handleInputChange(e, setFirstName)
                                    }
                                    disabled={isLoading}
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">اسم العائلة *</HiTwLa>
                                  <HiOnIn
                                    id="LastName"
                                    type="text"
                                    placeholder="اسم العائلة"
                                    value={lastName}
                                    onChange={(e) =>
                                      handleInputChange(e, setLastName)
                                    }
                                    disabled={isLoading}
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>المهنة *</HiFiLa>
                                  <HiFiSel
                                    id="profession"
                                    value={profession}
                                    onChange={(e) =>
                                      handleSelectChange(e, setProfession)
                                    }
                                    disabled={isLoading}
                                  >
                                    <HiFiOp value="">-- اختر المهنة --</HiFiOp>
                                    {Object.keys(professionOptions).map(
                                      (key) => (
                                        <HiFiOp key={key} value={key}>
                                          {key}
                                        </HiFiOp>
                                      )
                                    )}
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>الشهادة *</HiFiLa>
                                  <HiFiSel
                                    id="discipline"
                                    value={discipline}
                                    onChange={(e) =>
                                      handleSelectChange(e, setDiscipline)
                                    }
                                    disabled={!profession || isLoading}
                                  >
                                    <HiFiOp value="">-- اختر الشهادة --</HiFiOp>
                                    {disciplineOptions.map((option) => (
                                      <HiFiOp key={option} value={option}>
                                        {option}
                                      </HiFiOp>
                                    ))}
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>تخصصات اخرى *</HiFiLa>
                                  <HiFiSel
                                    id="otherSpecialty"
                                    value={otherSpecialty}
                                    onChange={(e) =>
                                      handleSelectChange(e, setOtherSpecialty)
                                    }
                                    disabled={isLoading}
                                  >
                                    <HiFiOp value="">-- تخصصات اخرى --</HiFiOp>
                                    <HiFiOp value="technician">فني</HiFiOp>
                                    <HiFiOp value="police-officer">
                                      ضابط شرطة
                                    </HiFiOp>
                                    <HiFiOp value="military">عسكري</HiFiOp>
                                    <HiFiOp value="civil-defense">
                                      الدفاع المدني
                                    </HiFiOp>
                                    <HiFiOp value="firefighter">إطفائي</HiFiOp>
                                    <HiFiOp value="border-guard">
                                      حرس الحدود
                                    </HiFiOp>
                                    <HiFiOp value="security-guard">
                                      حارس أمن
                                    </HiFiOp>
                                    <HiFiOp value="government-employee">
                                      موظف حكومي
                                    </HiFiOp>
                                    <HiFiOp value="accountant">محاسب</HiFiOp>
                                    <HiFiOp value="driver">سائق</HiFiOp>
                                    <HiFiOp value="designer">مصمم</HiFiOp>
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>القطاع *</HiFiLa>
                                  <HiFiSel
                                    id="sector"
                                    value={sector}
                                    onChange={(e) =>
                                      handleSelectChange(e, setSector)
                                    }
                                    disabled={isLoading}
                                  >
                                    <HiFiOp value="">-- اختر القطاع --</HiFiOp>
                                    <HiFiOp value="government">حكومي</HiFiOp>
                                    <HiFiOp value="private">خاص</HiFiOp>
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>هل لديك قروض سابقة؟ *</HiFiLa>
                                  <HiFiSel
                                    id="hasLoans"
                                    value={hasLoans}
                                    onChange={(e) =>
                                      handleSelectChange(e, setHasLoans)
                                    }
                                    disabled={isLoading}
                                  >
                                    <HiFiOp value="">-- اختر --</HiFiOp>
                                    <HiFiOp value="yes">نعم</HiFiOp>
                                    <HiFiOp value="no">لا</HiFiOp>
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiFiLa>الراتب الشهري *</HiFiLa>
                                  <HiFiSel
                                    id="salaryRange"
                                    value={salaryRange}
                                    onChange={(e) =>
                                      handleSelectChange(e, setSalaryRange)
                                    }
                                    disabled={isLoading}
                                  >
                                    <HiFiOp value="">
                                      -- حدد نطاق الراتب --
                                    </HiFiOp>
                                    {salaryRanges.map((range, index) => (
                                      <HiFiOp key={index} value={range}>
                                        {range}
                                      </HiFiOp>
                                    ))}
                                  </HiFiSel>
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <HiTwLa htmlFor="">السيرة *</HiTwLa>
                                  <HiOnIn
                                    id="resume"
                                    type="file"
                                    placeholder="resume"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    disabled={isLoading}
                                  />
                                  <HiOnSp></HiOnSp>
                                </HiWraOn>
                                <HiWraOn>
                                  <AgCon>
                                    <AgPa>* حقول اجبارية</AgPa>
                                    <AgPa></AgPa>
                                    <AgPa>
                                      "أوافق على استلام البريد الإلكتروني،
                                      والرسائل النصية الآلية والمكالمات الهاتفية
                                      (بما في ذلك المكالمات التي تحتوي على محتوى
                                      مُسجل مُسبقًا) من ونيابةً عن اللميديكال،
                                      والشركات التابعة لها."
                                      <a href="">اريني المزيد</a>
                                    </AgPa>
                                  </AgCon>
                                </HiWraOn>
                                <HiWraOn>
                                  <AgBut
                                    type="button"
                                    onClick={submitApplication}
                                    disabled={isLoading}
                                    style={{
                                      opacity: isLoading ? 0.7 : 1,
                                      cursor: isLoading
                                        ? "not-allowed"
                                        : "pointer",
                                    }}
                                  >
                                    {isLoading ? <LoadingSpinner /> : "ارسال!"}
                                  </AgBut>
                                </HiWraOn>
                              </MasterTwo>
                            )}
                          </AdConSec>
                        </AdCon>
                      </ApFo>
                    </AqAraTwo>
                  </AqAra>
                </AqSubSec>
              </AqSec>
            </AqMain>
            <AqSubCon></AqSubCon>
          </ApConTw>
        </ApSubWrap>
      </ApWrap>
    </>
  );
};

export default Apply;
