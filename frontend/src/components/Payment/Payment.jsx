import React from 'react'
import './Payment.css'
import { useStates } from '../../States'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Payment = () => {
  const navigate=useNavigate();
  const viewtraindetails =()=>{
    navigate("/viewtraindetails");
    toast.success("Payment Successfully!")
  }
    const {price } = useStates();
  return (
  
    <div className='paymentpage-top'>
 
    <div className="wrrapper">
      <h2>Ticket Price Payment</h2>
      <form method="POST">
        <h4 className='payment-header1'>Account</h4>
       
        <div className="input-group">
          <div className="input-box">
            <input
              type="email"
              placeholder="Email Adress"
              required
              className="name"
            />
            <i className="fa fa-envelope icon" />
          </div>
        </div>
       
        <div className="input-group">
          <div className="input-box">
            <h4 >Payment Details</h4>
            <input
              type="radio"
              name="pay"
              id="bc1"
              defaultChecked
              className="radio"
            />
            <label htmlFor="bc1">
              <span>
                <i className="fa fa-cc-visa" /> Credit Card
              </span>
            </label>
            <input type="radio" name="pay" id="bc2" className="radio" />
            <label htmlFor="bc2">
              <span>
                <i className="fa fa-cc-paypal" /> Net Banking
              </span>
            </label>
          </div>
        </div>
        <div className="input-group">
          <h6 >Card Number :</h6>
          <div className="input-box">
            <input
              type="tel"
              placeholder="Card Number"
              required
              className="name"
              maxLength={16}
            />
            <i className="fa fa-credit-card icon" />
          </div>
        </div>
        <div className="input-group">
            <h6 className=''> Card CVC :</h6>
          <div className="input-box">
            <input type="tel" placeholder="CVC" maxLength={3} required className="name" />
            <i className="fa fa-user icon" />
          </div>
          <div className="input-box">
            <h6 className='payment-header1'>Card Validity :</h6>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
        </div>
       <div className='Total-price'>
        <h1>Total Price : ₹.{price} </h1>
       </div>
        <div className="input-group">
          <div className="input-box">
            <button type="submit" onClick={viewtraindetails}>PAY NOW</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  
  
  )
}

export default Payment