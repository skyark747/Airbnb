import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Display from '../globalcontext/View';

const Form = ({checkindate,checkoutdate,numberOfGuests}) => {
  const { View, SetView } = useContext(Display);
  const [price, SetPrice] = useState(0);
  const [tprice,settprice]=useState(0);
  useEffect(() => {
    SetPrice(View.price_per_night * 7);
    settprice((View.price_per_night * 7) + 29 + 89);
  }, [])

  const Add_Booking = async () => {
    const token = localStorage.getItem('Token');
    console.log(token);
        const url = 'http://localhost:3000/api/bookings';
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                images:View.img_url,
                Stay_detail:View.stay_details,
                Stay_place: View.place,
                Host: View.name,
                check_in_date: checkindate,
                check_out_date: checkoutdate,
                guests: numberOfGuests,
                total_price: tprice
              }),
          });
      const data = await res.json();
      alert(data.msg);

      };
    return (
      <StyledWrapper>
        <div className="container">
          <div className="card cart">
            <label className="title">CHECKOUT</label>
            <div className="steps">
              <div className="step">

                <div>
                  <span>PAYMENT METHOD</span>
                  <p>Visa</p>
                  <p>**** **** **** 4243</p>
                </div>
                <hr />
                <div className="promo">
                  <span>HAVE A PROMO CODE?</span>
                  <form className="form">
                    <input className="input_field" placeholder="Enter a Promo Code" type="text" />
                    <button>Apply</button>
                  </form>
                </div>
                <hr />
                <div className="payments">
                  <span>PAYMENT</span>
                  <div className="details">
                    <span>Subtotal:</span>
                    <span>${price}</span>
                    <span>Cleaning Fee:</span>
                    <span>$29.00</span>
                    <span>Airbnb Service Fee:</span>
                    <span>$89.40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card checkout">
            <div className="footer">
              <label className="price">${tprice}</label>
              <button className="checkout-btn" onClick={Add_Booking}>Book Now</button>
            </div>
          </div>
        </div>
      </StyledWrapper>
    );
  }

  const StyledWrapper = styled.div`
  /* Body */
  .container {
    display: grid;
    grid-template-columns: auto;
    gap: 0px;
  }

  hr {
    height: 1px;
    background-color: #E5C7C5;
    border: none;
  }

  .card {
    width: 400px;
    background: #F4E2DE;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .title {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #E5C7C5;
    font-weight: 700;
    font-size: 11px;
    color: #000000;
  }

  /* Cart */
  .cart {
    border-radius: 19px 19px 0px 0px;
  }

  .cart .steps {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .cart .steps .step {
    display: grid;
    gap: 10px;
  }

  .cart .steps .step span {
    font-size: 13px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 8px;
    display: block;
  }

  .cart .steps .step p {
    font-size: 11px;
    font-weight: 600;
    color: #000000;
  }

  /* Promo */
  .promo form {
    display: grid;
    grid-template-columns: 1fr 80px;
    gap: 10px;
    padding: 0px;
  }

  .input_field {
    width: auto;
    height: 36px;
    padding: 0 0 0 12px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #E5C7C5;
    background-color: #F4E2DE;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #F3D2C9;
    background-color: #F4E2DE;
  }

  .promo form button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 100%;
    height: 36px;
    background: #F3D2C9;
    box-shadow: 0px 0.5px 0.5px #F3D2C9, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 5px;
    border: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
  }

  /* Checkout */
  .payments .details {
    display: grid;
    grid-template-columns: 10fr 1fr;
    padding: 0px;
    gap: 5px;
  }

  .payments .details span:nth-child(odd) {
    font-size: 12px;
    font-weight: 600;
    color: #000000;
    margin: auto auto auto 0;
  }

  .payments .details span:nth-child(even) {
    font-size: 13px;
    font-weight: 600;
    color: #000000;
    margin: auto 0 auto auto;
  }

  .checkout .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 20px;
    background-color: #ECC2C0;
  }

  .price {
    position: relative;
    font-size: 22px;
    color: #2B2B2F;
    font-weight: 900;
  }

  .checkout .checkout-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 36px;
    background: #F3D2C9;
    box-shadow: 0px 0.5px 0.5px #E5C7C5, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
    border-radius: 7px;
    border: 1px solid #ECC2C0;
    color: #000000;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }`;

  export default Form;
