import React from "react";
import {
  ArContainerF,
  ArContainerFCon,
  ArContainerFHe,
  ArContainerFPara,
  ArContainerS,
  ArContainerSImg,
  ArSubContainerF,
  ArWrapper,
} from "./Divider.elements";
import Study from "../../assets/study.svg";

const Divider = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFHe>افهم الآخرين</ArContainerFHe>
          <ArContainerFPara>
            تعرف على أنماط الشخصيات المختلفة وكيف تؤثر في طريقة تعاملك مع الحياة
            اليومية. سواء كنت من النوع الحماسي، التحليلي، الودود أو العملي، كل
            شخصية لها قوتها وتحدياتها. اكتشف الخصائص والمهارات الفريدة لشخصيتك
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg src={Study} />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Divider;
