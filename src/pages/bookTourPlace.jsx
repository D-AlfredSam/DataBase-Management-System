import '../styles/bookTourPlace.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
export default function bookTourPlace(){
    const [touristPlaces, setTouristPlaces] = useState([]);
   

    useEffect(() => {
        const fetchTouristPlaces = async () => {
            try {
                const response = await fetch('http://localhost:8090/api/company');
                const data = await response.json();
                setTouristPlaces(data);
                console.log(data);
            } catch (error) {
                setError(error.message);
            } 
        };

        fetchTouristPlaces();
    }, []);

    const navigate = useNavigate()
    function bookedtour(place){
        alert("booking tour to "+place)
        navigate('/tour/payment/'+place)
    }
    return(
        <>            
                <div class="container">
                    <h2>Tourist Places</h2>
                    <div>
                        {
                            touristPlaces.map(item=>(
                                <div>item</div>
                            ))
                        }
                    </div>
                </div>
        </>
    )
}