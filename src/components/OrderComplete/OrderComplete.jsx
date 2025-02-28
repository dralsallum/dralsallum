import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";

const SuccessContainer = styled.div`
  background: #edf4f7;
  margin: 20px 30px;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  direction: rtl;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 20px;
  }
`;

const SuccessWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const OrderDetails = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: right;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const OrderId = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const Button = styled.button`
  background: #ff7143;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const OrderComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get("orderId");

    const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const { data } = await publicRequest.get(`/orders/${orderId}`);
          setOrderDetails(data);
        } catch (error) {
          console.error("Error fetching order details:", error);
          // If we can't get order details from the server, try to get from localStorage
          const lastOrder = localStorage.getItem("lastOrder");
          if (lastOrder) {
            setOrderDetails(JSON.parse(lastOrder));
          }
        }
      } else {
        // If no orderId in URL, check localStorage
        const lastOrder = localStorage.getItem("lastOrder");
        if (lastOrder) {
          setOrderDetails(JSON.parse(lastOrder));
        }
      }
      setLoading(false);
    };

    fetchOrderDetails();
  }, [location]);

  const handleContinueShopping = () => {
    // Clear the localStorage order info
    localStorage.removeItem("lastOrder");
    navigate("/");
  };

  if (loading) {
    return (
      <SuccessContainer>
        <SuccessWrapper>
          <Title>جارٍ تحميل تفاصيل الطلب...</Title>
        </SuccessWrapper>
      </SuccessContainer>
    );
  }

  return (
    <SuccessContainer>
      <SuccessWrapper>
        <Title>تم استلام طلبك بنجاح!</Title>
        <Message>
          شكراً لك على طلبك. سنرسل لك تأكيداً عبر البريد الإلكتروني قريباً.
        </Message>

        {orderDetails && (
          <OrderDetails>
            <OrderId>
              رقم الطلب: {location.search.split("=")[1] || "طلب جديد"}
            </OrderId>

            <p>
              <strong>الاسم:</strong>{" "}
              {orderDetails.name || orderDetails.billingInfo?.name}
            </p>
            <p>
              <strong>البريد الإلكتروني:</strong>{" "}
              {orderDetails.email || orderDetails.billingInfo?.email}
            </p>
            <p>
              <strong>العنوان:</strong>{" "}
              {`${orderDetails.street || orderDetails.billingInfo?.street}, ${
                orderDetails.city || orderDetails.billingInfo?.city
              }, ${orderDetails.country || orderDetails.billingInfo?.country}`}
            </p>

            <p>
              <strong>إجمالي المبلغ:</strong>{" "}
              {"ر.س" + (orderDetails.total || orderDetails.amount).toFixed(2)}
            </p>
          </OrderDetails>
        )}

        <Button onClick={handleContinueShopping}>متابعة التسوق</Button>
      </SuccessWrapper>
    </SuccessContainer>
  );
};

export default OrderComplete;
