import '../styles/dashboard.css'
import {useNavigate} from 'react-router-dom'
export default function dashboard(){
    const navigate = useNavigate();
    return (
        <>
            <div class="dashboard-container">
                <h1 class="dashboard-title">Tourist Ticket Booking</h1>
                <div class="button-container">
                    <button onClick={()=>{navigate('/tour')}}>Book My Tour</button>
                    <button onClick={()=>{navigate('/travel')}}>Book Travel</button>
                    <button onClick={()=>{navigate('/hotel')}}>Book My Hotel</button>
                    <button onClick={()=>{navigate('/tour')}}>Book My Tourist Spot</button>
                </div>
            </div>
        </>
    )
}
