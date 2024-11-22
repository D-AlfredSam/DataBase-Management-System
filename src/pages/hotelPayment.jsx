import { useParams } from "react-router-dom"
import '../styles/hotelPayment.css'
export default function hotelPayment(){
    const {hotelName} = useParams();
    return (
        <>
            <div class="container">
                <h2>Payment Details for Booking</h2>
                <form action="http://localhost:8090/api/company/hotel/book" method="POST">
            
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required/>
                    </div>            
                    <div class="form-group">
                        <label for="hotelName">Hotel Name</label>
                        <input type="text" id="hotelName" name="hotelName" value={hotelName} readonly/>
                    </div>
                    <div class="form-group">
                        <label for="roomType">Room Type</label>
                        <select id="roomType" name="roomType" required>
                            <option value="standard">Standard</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>

            
                    <div class="payment-section">
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
                    </div>

                    <button type="submit" class="submit-btn">Confirm and Book</button>
                </form>
            </div>
        </>
    )
}