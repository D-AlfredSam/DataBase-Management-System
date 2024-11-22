import '../styles/tourPayment.css'
import '../styles/hotelPayment.css'
import { useParams } from 'react-router-dom'
export default function tourPay(){
    const {place} = useParams();
    return(
        <>
            <div class="container">
        <h2>Book Your Visit</h2>
        <form action="http://localhost:8090/api/company/place/book" method="POST">
            <label for="place">Tourist Place</label>
            <input type="text" name="name" value={place} readOnly/>
          
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required/>

            <label for="date">Date of Visit</label>
            <input type="date" id="date" name="date" required/>

            <h3>Payment Details</h3>
            <div class="form-group">
                <label for="cardNumber">Card Number</label>
                <input type="number" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required/>
            </div>
            <div class="form-group">
                <label for="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required/>
            </div>
            <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="number" id="cvv" name="cvv" placeholder="123" required/>
            </div>  
            <div class="form-group">
                <label for="upiId">UPI ID (optional)</label>
                <input type="text" id="upiId" name="upiId" placeholder="your-upi-id@bank"/>
            </div>

            <button type="submit" class="submit-btn">Confirm Booking</button>
        </form>
    </div>
        </>
    )
}