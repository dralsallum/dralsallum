import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AbCon,
  AbConHe,
  AbConHi,
  AbConPa,
  AbConSub,
  AbHi,
  AbHiLi,
  AbHiUl,
  AbWr,
  DaCon,
  DaSp,
  DaSubCon,
  DaSubPa,
  DaWr,
  ItFi,
  ItFiCon,
  ItFiSub,
  ItFiSubAt,
  ItFiWra,
  ItFo,
  ItFoBut,
  ItTh,
  ItThPa,
  ItThi,
  ItTwSub,
  ItTwoPa,
  ItTwoSpa,
  ItTwoSub,
  IteButAt,
  IteButMa,
  IteConOn,
  IteOn,
  IteOnAt,
  IteSubWra,
  IteTw,
  IteTwCo,
  IteTwCoPa,
  IteTwCoPar,
  IteTwCon,
  IteTwWr,
  IteWra,
  ItemButIc,
  LoCon,
  LoOnHe,
  LoOnPara,
  LoTw,
  LoTwCo,
  LoTwSuCo,
  LoTwWr,
  LoWr,
  PrCon,
  PrCons,
  PrConsSp,
  PrConsSps,
  PrMo,
  PrSuCon,
  PrSuSp,
  PrSubCon,
  PrWr,
  PrWra,
  WoCon,
  WoHe,
  WoOne,
  WoOneHe,
  WoTw,
  WoTwAt,
  WoTwCon,
  WoTwDivO,
  WoTwDivOn,
  WoTwPa,
  WoTwSp,
  WoTwSpa,
  WoWra,
  FinWrap,
  Loading,
  StyledSpinner,
  LoadingBarContainer,
  LoadingBar,
} from "./Item.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHeart,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Recommendation from "../Recommendation/Recommendation";

const Item = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://agency-saudi-688c7ddad04b.herokuapp.com/api/products/find/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        if (error.response) {
          // Log more details about the error
          console.log("Error response data:", error.response.data);
          console.log("Error status:", error.response.status);
          console.log("Error headers:", error.response.headers);
        }
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <Loading>
        <LoadingBarContainer>
          <LoadingBar />
        </LoadingBarContainer>
      </Loading>
    );
  }

  return (
    <>
      <IteWra>
        <IteSubWra>
          <div></div>
          <IteConOn>
            <IteOn>
              <IteOnAt href=""></IteOnAt>
              <i></i>
              Results
            </IteOn>
            <IteTw>
              <IteTwCon>
                <ItFi>
                  <div></div>
                  <ItFiCon>
                    <ItFiSub>
                      <ItemButIc>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          style={{
                            color: "blue",
                            height: "14px",
                            width: "10px",
                            cursor: "pointer",
                            marginRight: "5px", // Add some spacing between icon and text
                          }}
                        />
                      </ItemButIc>
                      <ItFiSubAt href="">النتائج</ItFiSubAt>
                    </ItFiSub>
                    <ItTwSub>
                      <ItTwoSub>
                        <ItTwoPa>
                          Job ID <ItTwoSpa>139108</ItTwoSpa>
                        </ItTwoPa>
                      </ItTwoSub>
                      <ItTh>
                        <ItThPa>⬤</ItThPa>
                      </ItTh>
                      <ItThi></ItThi>
                      <ItFo>
                        <ItFoBut>
                          <ItemButIc>
                            <FontAwesomeIcon
                              icon={faHeart}
                              style={{
                                display: "block",
                                color: "blue",
                                height: "20px",
                                width: "20px",
                                cursor: "pointer",
                              }}
                            />
                          </ItemButIc>
                        </ItFoBut>
                      </ItFo>
                    </ItTwSub>
                  </ItFiCon>
                  <ItFiWra>
                    <WoWra>
                      <WoCon>
                        <WoHe>الوظيفة</WoHe>
                        <div>
                          <div></div>
                        </div>
                      </WoCon>
                      <WoOne>{product.titleEng}</WoOne>
                      <WoOneHe>{product.title}</WoOneHe>
                      <WoTw>
                        <WoTwSp>
                          <i></i>
                        </WoTwSp>
                        <WoTwCon>
                          <WoTwAt href="">
                            <WoTwPa>
                              <WoTwDivOn></WoTwDivOn>
                              <WoTwDivOn>{product.hospital}</WoTwDivOn>
                              <WoTwDivOn></WoTwDivOn>
                              <WoTwSpa></WoTwSpa>
                              <WoTwSpa></WoTwSpa>
                              <WoTwSpa>{product.country}</WoTwSpa>
                              <WoTwSpa>, </WoTwSpa>
                              <WoTwSpa>{product.city}</WoTwSpa>
                              <WoTwSpa> </WoTwSpa>
                              <WoTwSpa>02554</WoTwSpa>
                            </WoTwPa>
                          </WoTwAt>
                        </WoTwCon>
                      </WoTw>
                    </WoWra>
                    <PrWr>
                      <PrCon>
                        <PrSubCon>
                          <PrSuCon>
                            <PrSuSp>
                              <i></i>
                            </PrSuSp>
                            <PrMo>
                              <PrWra>{product.duration}</PrWra>
                              <PrCons>
                                <PrConsSp>
                                  <PrConsSps>{product.maxPrice}</PrConsSps>
                                  <PrConsSps>ريال</PrConsSps>
                                  <PrConsSps> - </PrConsSps>
                                  <PrConsSps>{product.minPrice}</PrConsSps>
                                  <PrConsSps>ريال</PrConsSps>
                                </PrConsSp>
                              </PrCons>
                            </PrMo>
                          </PrSuCon>
                        </PrSubCon>
                      </PrCon>
                    </PrWr>
                    <DaWr>
                      <DaCon>
                        <DaSp>
                          <i></i>
                        </DaSp>
                        <DaSubCon>
                          <DaSubPa>Nov 24, 2023</DaSubPa>
                        </DaSubCon>
                      </DaCon>
                    </DaWr>
                  </ItFiWra>
                </ItFi>
                <IteTwCo>
                  <AbWr>
                    <AbCon>
                      <AbConHi>تفاصيل الوظيفة</AbConHi>
                      <AbHi>
                        {product.desc}
                        <br />
                        <br />
                        <strong>أبرز الفرص</strong>
                        <AbHiUl>
                          <AbHiLi>
                            الراتب الأساسي يصل إلى {product.maxPrice} ألف دولار
                            مع الخبرة
                          </AbHiLi>
                          <AbHiLi>
                            إمكانية الدخل السنوي تصل إلى {product.minPrice} ألف
                            دولار
                          </AbHiLi>
                          <AbHiLi>فرصة لإدارة لوحة مرضاك الخاصة </AbHiLi>
                          <AbHiLi>الانتساب إلى مستشفى ماس جنرال الراقي</AbHiLi>
                          <AbHiLi>مؤهل لإعفاء القروض</AbHiLi>
                          <AbHiLi>
                            مزايا كاملة تشمل 30 يومًا من الإجازة السنوية{" "}
                          </AbHiLi>
                        </AbHiUl>
                        <br />
                        <strong>بيئة العمل</strong>
                        <br />
                        مجتمع خلاب يتمتع بمناظر طبيعية خلابة في إعداد جزيرة
                        الأحلام، نانتاكيت هو المكان المثالي للعائلات والأفراد
                        على حد سواء ليسموه بيتهم. مع مجموعة متنوعة من المرافق
                        وفرص لا نهاية لها لاستكشاف الطبيعة الجميلة في الهواء
                        الطلق، ستمتلك كل ما تحتاجه وأكثر.
                        <AbHiUl>
                          <AbHiLi>
                            أحياء آمنة وصديقة للعائلات تضم منازل رائعة
                          </AbHiLi>
                          <AbHiLi>نظام مدرسي محلي رائع</AbHiLi>
                          <AbHiLi>
                            منارات شاهقة تعمل كرموز تاريخية للمنطقة
                          </AbHiLi>
                          <AbHiLi>
                            مجموعة متنوعة من المحلات البوتيكية والمطاعم الممتازة
                            في جميع أنحاء الجزيرة بأكملها
                          </AbHiLi>
                          <AbHiLi>
                            القدرة على تجربة جميع خيارات الترفيه في نيو إنجلاند
                            - على بُعد رحلات بالعبّارة من بوسطن وكيب كود
                          </AbHiLi>
                        </AbHiUl>
                      </AbHi>
                    </AbCon>
                    <AbCon>
                      <AbConHe>المنشاة</AbConHe>
                      <AbConSub></AbConSub>
                      <AbConSub>مستشفى الرعاية الحادة قصير الأجل</AbConSub>
                    </AbCon>
                    {/*map once you figure it out remove display none from LoWr */}
                    <LoWr>
                      <LoCon>
                        <LoOnHe>معلومات عن المنطقة</LoOnHe>
                        <LoOnPara>
                          مع كوخها ذو القرميد الأبيض، وشوارعها المزينة بالنرجس،
                          ومناراتها ونزلها الساحرة، نانتاكيت هي المكان المثالي
                          للهروب من المدينة. استمتع بتجربة العمل في مستشفى
                          الجزيرة، وفي وقت فراغك، اذهب للتسوق للتحف، أو اركب
                          الدراجة عبر المروج العشبية أو تذوق المأكولات البحرية
                          الطازجة في الجزيرة
                        </LoOnPara>
                      </LoCon>
                      <LoTw>
                        <LoTwWr>
                          <LoTwCo>
                            <LoTwSuCo>
                              <div>
                                <div></div>
                                <div></div>
                              </div>
                              <iframe src="" frameborder="0"></iframe>
                              <div></div>
                            </LoTwSuCo>
                          </LoTwCo>
                        </LoTwWr>
                      </LoTw>
                    </LoWr>
                    <AbCon>
                      <AbConHe>من نحن</AbConHe>
                      <AbConSub></AbConSub>
                      <AbConSub>
                        <AbConPa>
                          نسعى لنكون المؤسسة الأكثر ثقة وابتكارًا وتأثيرًا في
                          مساعدة المؤسسات الصحية على تقديم رعاية المرضى بجودة
                          عالية تتطور باستمرار لجعل الرعاية الصحية أكثر إنسانية
                          وفعالية وقابلية للتحقيق
                        </AbConPa>
                      </AbConSub>
                    </AbCon>
                  </AbWr>
                  <IteTwWr>
                    <IteTwCoPar>
                      <IteTwCoPa>
                        * تُقدر التقديرات المالية لأغراض إعلامية وتشمل الأجور
                        بالساعة، بالإضافة إلى تعويضات مصاريف الوجبات والنفقات
                        العرضية ومصاريف السكن التي تتحملها الشركة نيابةً عنك.
                        يرجى التحدث مع مسؤول التوظيف لمزيد من التفاصيل
                      </IteTwCoPa>
                    </IteTwCoPar>
                  </IteTwWr>
                </IteTwCo>
              </IteTwCon>
              <div></div>
            </IteTw>
          </IteConOn>
          <IteButMa>
            <IteButAt to={"/upload"}>قدم الان</IteButAt>
          </IteButMa>
          <div></div>
        </IteSubWra>
      </IteWra>
      <FinWrap>
        <Recommendation />
      </FinWrap>
    </>
  );
};

export default Item;
