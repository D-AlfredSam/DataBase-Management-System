import '../styles/bookHotel.css'
import { useNavigate } from 'react-router-dom';
export default function BookHotel() {
    const hotels = [
        {
            name: "Hotel Sunshine",
            description: "Located in the heart of the city, offering comfortable rooms and excellent service.",
            facilities: "Free Wi-Fi, Pool, Spa, Gym, Complimentary Breakfast",
            contact: "+1 234 567 890",
            email: "sunshine@hotel.com"
        },
        {
            name: "Ocean View Resort",
            description: "Enjoy breathtaking views and luxury accommodations, just steps from the beach.",
            facilities: "Ocean View, Free Wi-Fi, Pool, Kids' Zone, Free Breakfast",
            contact: "+1 987 654 321",
            email: "oceanview@resort.com"
        },
        {
            name: "Mountain Escape Lodge",
            description: "A peaceful retreat in the mountains, offering cozy rooms and a variety of outdoor activities.",
            facilities: "Mountain View, Spa, Outdoor Activities, Free Breakfast",
            contact: "+1 456 789 123",
            email: "mountainescape@lodge.com"
        }
    ];

    const navigate=useNavigate();
    const bookRoom = (hotelName) => {
        navigate("/hotel/payment/"+hotelName)
    };

    return (
        <>
        <div class="container">
            <h2>Select a Hotel</h2>
            <div style={{overflowY:'auto'}}>
            {
                hotels.map(item => (
                    <div class="hotel-item">
                    <div class="hotel-details">
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                        <p>Facilities: {item.facilities}</p>
                    </div>
                    <div class="hotel-contact">
                        <p>Contact: {item.contact} | Email: {item.email}</p>
                    </div>
                    <button class="book-room-btn" onClick={()=>{bookRoom(item.name)}}>Book My Room</button>
                    </div>
                ))
            }
            </div>
        </div>
        </>
    );
}
