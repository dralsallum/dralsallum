import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartRedux"; // <-- adjust path if needed
import Cross from "../../assets/crossFirst.png";

/* Outer page container */
const PageContainer = styled.div`
  background: #edf4f7;
  margin: 20px 30px;
  padding: 10px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

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
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1.5rem;
    order: 2; /* Show after OrderSummary on mobile */
  }
`;

const BillingInfo = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

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

const PaymentInfo = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 1rem;
  }
`;

const PaymentTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PaymentParagraph = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 1rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  input {
    margin-right: 0.5rem;
  }
`;

const CardIcons = styled.div`
  margin-left: 1rem;
  img {
    height: 20px;
    margin-right: 0.25rem;
  }
`;

const CardFieldRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const PaymentField = styled.div`
  flex: 1;

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #444;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  input {
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

const TermsCheckbox = styled.div`
  margin-top: 1rem;

  label {
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    color: #333;
    cursor: pointer;

    input {
      margin-right: 0.5rem;
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

const BuyNowButton = styled.button`
  margin-top: 2rem;
  background: #ff7143;
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;
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
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    margin-left: 0;
  }
`;

const CouponWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  input {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 6px 0 0 6px;
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
    border-radius: 0 6px 6px 0;
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
  margin-top: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Handle removing a product from cart
  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  // 1) UPDATED: handle buy now to call your Express backend and create a Tap charge
  const handleBuyNow = async () => {
    try {
      // Grab the necessary cart data:
      const payload = {
        amount: cart.total, // total from cart
        currency: "USD", // or the currency you want
        items: cart.products.map((product) => ({
          name: product.title,
          quantity: product.quantity,
          unit_price: product.price,
        })),
      };

      // Make a POST request to your new backend route ("/api/tap-charge")
      const response = await fetch("http://localhost:8000/api/tap-charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // If Tap responded with a transaction.url, redirect user to Tap's hosted page
      if (data?.transaction?.url) {
        window.location.href = data.transaction.url;
      } else {
        console.error("Tap charge creation failed:", data);
        alert("Failed to create payment. Check console or logs.");
      }
    } catch (error) {
      console.error("Error in handleBuyNow:", error);
      alert("Something went wrong while processing payment with Tap.");
    }
  };

  return (
    <PageContainer>
      <CheckoutWrapper>
        {/* Page title & login prompt */}
        <TitleRow>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <LoginPrompt>
            Returning customer? <a href="#">Click here to login</a>
          </LoginPrompt>
        </TitleRow>

        <CheckoutContent>
          <OrderSummary>
            <SummaryTitle>Order Summary</SummaryTitle>
            {cart.products.length === 0 ? (
              <p style={{ marginBottom: "1rem" }}>
                Your cart is empty. Add something to see it here.
              </p>
            ) : (
              cart.products.map((product) => (
                <SummaryItem key={product._id}>
                  <div>
                    {product.title} x {product.quantity}
                    <br />
                    <strong>
                      ${(product.price * product.quantity).toFixed(2)}
                    </strong>
                  </div>
                  <CrossIcon
                    src={Cross}
                    alt="Remove item"
                    onClick={() => handleRemove(product._id)}
                  />
                </SummaryItem>
              ))
            )}

            <CouponWrapper>
              <input type="text" placeholder="Coupon code" />
              <button>Apply</button>
            </CouponWrapper>

            <SummaryItem>
              <span>Subtotal</span>
              <strong>${cart.total.toFixed(2)}</strong>
            </SummaryItem>

            <TotalAmount>
              <span>Total</span>
              <span>${cart.total.toFixed(2)}</span>
            </TotalAmount>
          </OrderSummary>

          <BillingColumn>
            <BillingInfo>
              <BillingTitle>Your Billing Information</BillingTitle>
              <FormField>
                <label>Email *</label>
                <input type="email" placeholder="Email" />
              </FormField>
              <FormField>
                <label>Name *</label>
                <input type="text" placeholder="First and last name" />
              </FormField>
              <FormField>
                <label>Street address *</label>
                <input type="text" placeholder="Street address" />
              </FormField>
              <FormField>
                <label>Town / City *</label>
                <input type="text" placeholder="Town or city" />
              </FormField>
              <FormField>
                <label>Postcode *</label>
                <input type="text" placeholder="Postcode" />
              </FormField>
              <FormField>
                <label>Select a country / region *</label>
                <select>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
              </FormField>
              <FormField>
                <label>State</label>
                <input type="text" placeholder="State (if applicable)" />
              </FormField>
              <FormField>
                <label>VAT number (Optional)</label>
                <input type="text" placeholder="VAT number" />
              </FormField>
            </BillingInfo>

            <PaymentInfo>
              <PaymentTitle>Payment Information</PaymentTitle>
              <PaymentParagraph>
                All transactions are secure and encrypted. No card information
                is ever stored on our site.
              </PaymentParagraph>

              <RadioGroup>
                <RadioOption>
                  <input type="radio" name="paymentMethod" defaultChecked />
                  Credit or Debit Card
                  <CardIcons>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                      alt="Visa"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Mastercard-logo.svg"
                      alt="Mastercard"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Amex.svg"
                      alt="Amex"
                    />
                  </CardIcons>
                </RadioOption>
              </RadioGroup>

              <FormField>
                <label>Card number *</label>
                <input type="text" placeholder="Card number" />
              </FormField>

              <CardFieldRow>
                <PaymentField>
                  <label>Expiry date *</label>
                  <input type="text" placeholder="MM / YY" />
                </PaymentField>
                <PaymentField>
                  <label>CVC *</label>
                  <input type="text" placeholder="CVC" />
                </PaymentField>
              </CardFieldRow>

              <TermsCheckbox>
                <label>
                  <input type="checkbox" />I have read and agree to the website{" "}
                  <a href="#">Terms and conditions</a> *
                </label>
              </TermsCheckbox>

              <BuyNowButton onClick={handleBuyNow}>Buy Now</BuyNowButton>
            </PaymentInfo>
          </BillingColumn>
        </CheckoutContent>
      </CheckoutWrapper>
    </PageContainer>
  );
};

export default Checkout;
