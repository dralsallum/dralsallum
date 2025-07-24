import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

const PageContainer = styled.div`
  background: #edf4f7;
  margin: 20px 30px;
  padding: 10px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  direction: rtl;
  text-align: right;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 10px;
    padding: 8px;
  }
`;

const ResultWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

const StatusIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${(props) =>
    props.success ? "#4caf50" : props.pending ? "#ff9800" : "#f44336"};
  border-radius: 50%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
`;

const StatusTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) =>
    props.success ? "#4caf50" : props.pending ? "#ff9800" : "#f44336"};
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatusMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff7143;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: right;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const OrderDetails = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  text-align: right;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;

  .label {
    font-weight: 600;
    color: #333;
  }

  .value {
    color: #666;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled.button`
  background: #ff7143;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e85a2b;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #ff7143;
  border: 2px solid #ff7143;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #ff7143;
    color: #fff;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

const PaymentResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderDetails, setOrderDetails] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const orderId = searchParams.get("order_id");
  const tapStatus = searchParams.get("status");

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }

    const checkOrderStatus = async () => {
      try {
        console.log(
          `Checking order status for ${orderId}, retry ${retryCount}`
        );

        const response = await publicRequest.get(
          `/tap-charge/status/${orderId}`
        );
        console.log("Order status response:", response.data);

        const { status, paymentStatus } = response.data;

        setOrderDetails(response.data);
        setOrderStatus(status);

        // Handle different payment statuses from Tap
        if (
          paymentStatus === "CAPTURED" ||
          paymentStatus === "captured" ||
          status === "completed"
        ) {
          // Payment is definitely successful
          setOrderStatus("completed");
          dispatch(clearCart());
          console.log("Payment successful - cart cleared");
          setLoading(false);
          return;
        }

        // If payment is still processing and we haven't retried too many times
        if (
          (status === "processing" ||
            status === "pending" ||
            paymentStatus === "initiated") &&
          retryCount < 5
        ) {
          console.log(
            `Payment still processing, will retry (${retryCount + 1}/5)`
          );
          setIsProcessing(true);

          // Retry with increasing intervals
          const retryDelay =
            retryCount === 0
              ? 3000
              : retryCount === 1
              ? 5000
              : retryCount === 2
              ? 8000
              : 12000;

          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
          }, retryDelay);

          return; // Don't set loading to false yet
        }

        // If we've exhausted retries or got a final status
        if (
          status === "failed" ||
          status === "cancelled" ||
          paymentStatus === "DECLINED" ||
          paymentStatus === "CANCELLED"
        ) {
          setOrderStatus(status);
        } else if (retryCount >= 5) {
          // Too many retries, but status is still pending - treat as error
          console.log("Max retries reached, treating as error");
          setOrderStatus("error");
        }

        setLoading(false);
        setIsProcessing(false);
      } catch (error) {
        console.error("Error checking order status:", error);

        if (retryCount < 3) {
          // Retry on API errors too
          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
          }, 3000);
        } else {
          setOrderStatus("error");
          setLoading(false);
          setIsProcessing(false);
        }
      }
    };

    checkOrderStatus();
  }, [orderId, dispatch, retryCount]);

  // Auto-redirect to success page if completed
  useEffect(() => {
    if (orderStatus === "completed") {
      const redirectTimer = setTimeout(() => {
        navigate("/payment-success");
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [orderStatus, navigate]);

  if (loading || isProcessing) {
    return (
      <PageContainer>
        <ResultWrapper>
          <LoadingSpinner />
          <StatusMessage>
            {isProcessing
              ? `جاري التحقق من حالة الدفع... (المحاولة ${retryCount + 1})`
              : "جاري التحقق من حالة الدفع..."}
          </StatusMessage>
          {retryCount > 0 && (
            <InfoText style={{ color: "#666", fontSize: "0.9rem" }}>
              قد تستغرق معالجة الدفع بضع دقائق، يرجى الانتظار...
            </InfoText>
          )}
        </ResultWrapper>
      </PageContainer>
    );
  }

  if (!orderId) {
    return (
      <PageContainer>
        <ResultWrapper>
          <StatusIcon success={false}>❌</StatusIcon>
          <StatusTitle success={false}>خطأ</StatusTitle>
          <StatusMessage>
            لم يتم العثور على معرف الطلب. يرجى المحاولة مرة أخرى.
          </StatusMessage>
          <ButtonContainer>
            <PrimaryButton onClick={() => navigate("/")}>
              العودة للصفحة الرئيسية
            </PrimaryButton>
          </ButtonContainer>
        </ResultWrapper>
      </PageContainer>
    );
  }

  const isSuccess = orderStatus === "completed";
  const isPending = orderStatus === "processing" || orderStatus === "pending";
  const isFailed = orderStatus === "failed" || orderStatus === "cancelled";
  const isError = orderStatus === "error";

  return (
    <PageContainer>
      <ResultWrapper>
        <StatusIcon success={isSuccess} pending={isPending}>
          {isSuccess ? "✓" : isPending ? "⏳" : "❌"}
        </StatusIcon>

        <StatusTitle success={isSuccess} pending={isPending}>
          {isSuccess && "تم الدفع بنجاح!"}
          {isPending && "معالجة الدفع"}
          {isFailed && "فشل في الدفع"}
          {isError && "خطأ في النظام"}
        </StatusTitle>

        <StatusMessage>
          {isSuccess &&
            "شكراً لك! تم استلام طلبك ومعالجة الدفع بنجاح. سيتم توجيهك لصفحة النجاح..."}
          {isPending && "يتم الآن معالجة عملية الدفع. يرجى الانتظار قليلاً..."}
          {isFailed &&
            "لم تكتمل عملية الدفع. يرجى المحاولة مرة أخرى أو التواصل معنا."}
          {isError && "حدث خطأ أثناء التحقق من حالة الطلب."}
        </StatusMessage>

        {orderDetails && (
          <OrderDetails>
            <InfoTitle>تفاصيل الطلب</InfoTitle>
            <DetailRow>
              <span className="label">رقم الطلب:</span>
              <span className="value">{orderId.slice(-8).toUpperCase()}</span>
            </DetailRow>
            <DetailRow>
              <span className="label">حالة الطلب:</span>
              <span className="value">
                {orderStatus === "completed"
                  ? "مكتمل"
                  : orderStatus === "processing"
                  ? "قيد المعالجة"
                  : orderStatus === "pending"
                  ? "في الانتظار"
                  : orderStatus === "failed"
                  ? "فاشل"
                  : orderStatus === "cancelled"
                  ? "ملغي"
                  : "غير معروف"}
              </span>
            </DetailRow>
            {orderDetails.paymentId && (
              <DetailRow>
                <span className="label">معرف الدفع:</span>
                <span className="value">
                  {orderDetails.paymentId.slice(-8)}
                </span>
              </DetailRow>
            )}
            {orderDetails.paymentStatus && (
              <DetailRow>
                <span className="label">حالة الدفع:</span>
                <span className="value">{orderDetails.paymentStatus}</span>
              </DetailRow>
            )}
          </OrderDetails>
        )}

        {isPending && (
          <InfoBox>
            <InfoTitle>معالجة الدفع</InfoTitle>
            <InfoText>
              يتم الآن معالجة عملية الدفع الخاصة بك. قد تستغرق هذه العملية بضع
              دقائق.
            </InfoText>
            <InfoText>سيتم تحديث الصفحة تلقائياً عند اكتمال المعالجة.</InfoText>
            {retryCount > 0 && (
              <InfoText>محاولة التحقق رقم {retryCount + 1} من 6...</InfoText>
            )}
          </InfoBox>
        )}

        <ButtonContainer>
          <PrimaryButton onClick={() => navigate("/")}>
            العودة للصفحة الرئيسية
          </PrimaryButton>
          {(isSuccess || isFailed || isError) && (
            <SecondaryButton onClick={() => navigate("/contact")}>
              تواصل معنا
            </SecondaryButton>
          )}
          {isSuccess && (
            <SecondaryButton onClick={() => navigate("/payment-success")}>
              عرض تفاصيل النجاح
            </SecondaryButton>
          )}
        </ButtonContainer>
      </ResultWrapper>
    </PageContainer>
  );
};

export default PaymentResult;
