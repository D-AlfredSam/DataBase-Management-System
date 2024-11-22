import '../styles/availableTravel.css'
import {useNavigate} from "react-router-dom"
export default function availableTravel(){

    const travelOptions = [
        { type: 'Train', id: '101', class: 'Economy', departure: '09:00 AM', arrival: '12:00 PM', price: '$20' },
        { type: 'Bus', id: '204', class: 'Luxury', departure: '10:30 AM', arrival: '02:30 PM', price: '$30' },
        { type: 'Train', id: '302', class: 'Business', departure: '01:00 PM', arrival: '04:30 PM', price: '$45' },
        { type: 'Bus', id: '108', class: 'Standard', departure: '03:30 PM', arrival: '07:00 PM', price: '$25' }
    ];

    const navigate = useNavigate()

    function book(values){
        alert('Booking '+values[0]+' '+values[1]+'!')
        if (values[0] == 'Bus'){
            navigate('/travel/bus')
        }
        else{
            navigate('/travel/train')
        }
    }
    return(
        <>
            <div class="results-container">
                <div class="header">
                    <h2>Available Travel Options</h2>
                </div>
                <div class="travel-list">
                    {
                        travelOptions.map(item => (
                            <div class="travel-item">
                                <div class="details">
                                    <strong>{item.type} {item.id} - {item.class} Class</strong>
                                    <span>Departure: {item.departure} | Arrival: {item.arrival}</span>
                                    <span>Price: {item.price}</span>
                                </div>
                                <button class="book-now" onClick={()=>{book([item.type,item.id])}}>Book Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}