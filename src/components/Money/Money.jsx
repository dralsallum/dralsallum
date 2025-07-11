import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, clearCart } from "../../redux/cartRedux";
import Cross from "../../assets/crossFirst.png";
import { publicRequest } from "../../requestMethods";
import { Link, useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  background: #edf4f7;
  margin: 20px 30px;
  padding: 10px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  direction: rtl;
  text-align: right;
  @media (max-width: 768px) {
    margin: 10px;
    padding: 8px;
  }
`;

const CheckoutWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 0 0.5rem;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CheckoutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const LoginPrompt = styled.p`
  font-size: 0.95rem;
  color: #666;
  a {
    color: #ff7143;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: -1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: -1rem;
`;

const CheckoutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
`;

const BillingColumn = styled.div`
  flex: 3;
  margin-right: 2rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
    order: 2;
    width: 100%;
  }
`;

const BillingInfo = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BillingTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const PaymentInfo = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PaymentTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const BankDetails = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e9ecef;

  h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: #555;
    font-size: 0.95rem;

    strong {
      color: #333;
      margin-left: 0.5rem;
    }
  }
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #444;
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
  input,
  select {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 1rem;
    color: #333;
    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.65rem;
    }
  }
`;

const FileUploadField = styled.div`
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #444;
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  input[type="file"] {
    width: 100%;
    border: 2px dashed #ccc;
    border-radius: 6px;
    padding: 1rem;
    font-size: 1rem;
    color: #333;
    background: #f8f9fa;
    cursor: pointer;

    &:hover {
      border-color: #ff7143;
      background: #fff;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.75rem;
    }
  }
`;

const UploadPreview = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;

  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const TermsCheckbox = styled.div`
  margin-top: 1rem;
  label {
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    color: #333;
    cursor: pointer;
    input {
      margin-left: 0.5rem;
      margin-right: 0;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  a {
    color: #ff7143;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 1.5rem;
    padding: 1rem;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #444;
  strong {
    color: #333;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CrossIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-right: 0;
  }
`;

const CouponWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  input {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 0 6px 6px 0;
    padding: 0.75rem;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.65rem;
    }
  }
  button {
    background: #ff7143;
    color: #fff;
    border: none;
    padding: 0 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 6px 0 0 6px;
    font-size: 1rem;
    &:hover {
      opacity: 0.9;
    }
    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0 0.75rem;
    }
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SubmitButton = styled.button`
  background: #ff7143;
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;
  }
`;

const Spinner = styled.div`
  border: 2px solid #fff;
  border-top: 2px solid #ff7143;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Money = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("المملكة العربية السعودية");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [receiptFile, setReceiptFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [receiptPreview, setReceiptPreview] = useState(null);

  const navigate = useNavigate();

  // Refs
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const cityRef = useRef(null);
  const streetRef = useRef(null);
  const termsRef = useRef(null);
  const fileRef = useRef(null);

  // Remove product
  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  // Validate form + receipt
  const validateForm = () => {
    if (!email) {
      setErrorMessage("يرجى تعبئة حقل البريد الإلكتروني.");
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (!name) {
      setErrorMessage("يرجى تعبئة حقل الاسم الكامل.");
      nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (!country) {
      setErrorMessage("يرجى اختيار الدولة.");
      return false;
    }
    if (!city) {
      setErrorMessage("يرجى تعبئة حقل المدينة.");
      cityRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (!street) {
      setErrorMessage("يرجى تعبئة حقل عنوان الشارع.");
      streetRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    if (!termsAccepted) {
      setErrorMessage("يرجى الموافقة على الشروط والأحكام للمتابعة.");
      termsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    if (cart.products.length === 0) {
      setErrorMessage("سلة التسوق فارغة. يرجى إضافة منتجات للمتابعة.");
      return false;
    }
    if (!receiptFile) {
      setErrorMessage("يرجى تحميل صورة الإيصال.");
      fileRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    setErrorMessage("");
    return true;
  };

  // Handle checkout & receipt upload
  const handleCheckout = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      // 1) Create order
      const orderData = {
        userId: localStorage.getItem("userId") || "guestUser",
        products: cart.products.map((p) => ({
          productId: p._id,
          quantity: p.quantity,
        })),
        amount: cart.total,
        address: { country, city, street, email, name },
        status: "pending",
      };
      const orderRes = await publicRequest.post("/orders", orderData);
      const orderId = orderRes.data._id;

      // 2) Upload receipt image
      const formData = new FormData();
      formData.append("receipt", receiptFile);
      await publicRequest.post(`/orders/${orderId}/receipt`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // 3) Clear cart & navigate to success
      dispatch(clearCart());
      navigate("/payment-success");
    } catch (err) {
      console.error("Error processing order or uploading receipt:", err);
      setErrorMessage(
        "حدث خطأ أثناء إرسال الطلب أو تحميل الإيصال. يرجى المحاولة مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <CheckoutWrapper>
        <TitleRow>
          <CheckoutTitle>الدفع</CheckoutTitle>
          <LoginPrompt>
            هل أنت عميلٌ سابق؟ <Link to="/login">انقر هنا لتسجيل الدخول</Link>
          </LoginPrompt>
        </TitleRow>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <CheckoutContent>
          <OrderSummary>
            <SummaryTitle>ملخص الطلب</SummaryTitle>
            {cart.products.length === 0 ? (
              <p style={{ marginBottom: "1rem" }}>
                سلة التسوق فارغة. أضف منتجات لعرضها هنا.
              </p>
            ) : (
              cart.products.map((product) => (
                <SummaryItem key={product._id}>
                  <div>
                    {product.title} × {product.quantity}
                    <br />
                    <strong>
                      {"ر.س" + (product.price * product.quantity).toFixed(2)}
                    </strong>
                  </div>
                  <CrossIcon
                    src={Cross}
                    alt="حذف المنتج"
                    onClick={() => handleRemove(product._id)}
                  />
                </SummaryItem>
              ))
            )}

            <CouponWrapper>
              <input type="text" placeholder="كود القسيمة" />
              <button>تطبيق</button>
            </CouponWrapper>

            <SummaryItem>
              <span>المجموع الفرعي</span>
              <strong>{"ر.س" + cart.total.toFixed(2)}</strong>
            </SummaryItem>

            <TotalAmount>
              <span>الإجمالي</span>
              <span>{"ر.س" + cart.total.toFixed(2)}</span>
            </TotalAmount>

            <TermsCheckbox ref={termsRef}>
              <label>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                لقد قرأت وأوافق على <Link to="/policy">الشروط والأحكام</Link>
              </label>
            </TermsCheckbox>

            <ButtonContainer>
              <SubmitButton onClick={handleCheckout} disabled={loading}>
                {loading ? <Spinner /> : "أرسل الطلب"}
              </SubmitButton>
            </ButtonContainer>
          </OrderSummary>

          <BillingColumn>
            <BillingInfo>
              <BillingTitle>معلومات الفوترة</BillingTitle>
              <FormField>
                <label>البريد الإلكتروني *</label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="مثال: name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
              <FormField>
                <label>الاسم الكامل *</label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="الاسم الأول واسم العائلة"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormField>
              <FormField>
                <label>اختر دولة/منطقة *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="المملكة العربية السعودية">
                    المملكة العربية السعودية
                  </option>
                  <option value="الإمارات العربية المتحدة">
                    الإمارات العربية المتحدة
                  </option>
                  <option value="قطر">قطر</option>
                  <option value="البحرين">البحرين</option>
                  <option value="الكويت">الكويت</option>
                </select>
              </FormField>
              <FormField>
                <label>المدينة / البلدة *</label>
                <input
                  ref={cityRef}
                  type="text"
                  placeholder="أدخل اسم المدينة"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormField>
              <FormField>
                <label>عنوان الشارع *</label>
                <input
                  ref={streetRef}
                  type="text"
                  placeholder="أدخل عنوان الشارع"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </FormField>
            </BillingInfo>
            <PaymentInfo>
              <PaymentTitle>معلومات الدفع</PaymentTitle>
              <BankDetails>
                <h3>تفاصيل الحساب البنكي</h3>
                <p>
                  ارفع ايصال التحويل وفي ٢٤ساعة سيتم ارسال رابط الدورة لايميلك
                </p>
                <p>
                  <strong>اسم البنك:</strong> بنك الرياض
                </p>
                <p>
                  <strong>رقم الحساب:</strong> 2601971299940
                </p>
                <p>
                  <strong>الآيبان:</strong> SA0220000002601971299940
                </p>
                <p>
                  <strong>اسم المستفيد:</strong> مؤسسة سعود خالد فهد السلوم
                  للتجارة
                </p>
              </BankDetails>

              <FileUploadField ref={fileRef}>
                <label>رفع إيصال الدفع *</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setReceiptFile(e.target.files[0])}
                />
                {receiptPreview && (
                  <UploadPreview>
                    <img src={receiptPreview} alt="معاينة الإيصال" />
                    <p>تم رفع الإيصال بنجاح</p>
                  </UploadPreview>
                )}
              </FileUploadField>
            </PaymentInfo>
          </BillingColumn>
        </CheckoutContent>
      </CheckoutWrapper>
    </PageContainer>
  );
};

export default Money;
