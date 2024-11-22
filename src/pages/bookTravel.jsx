import '../styles/bookTravel.css'
import { useNavigate } from 'react-router-dom';
export default function bookTravel(){
    
    function toggleOption(option) {
        if (option == 'bus'){
            document.getElementById('train').style.display='none';
            document.getElementById('bus').style.display='block';
        }
        else{
            document.getElementById('train').style.display='block';
            document.getElementById('bus').style.display='none';
        }
    }

    const navigate = useNavigate();
    function checkAvail(){
        navigate('/travel/available');
    }

    return(
        <>

            <div class="form-container">
                <h2>Book Travel</h2>
                <div class="toggle-buttons">
                    <button id="train-btn"  onClick={()=>{toggleOption('train')}}>Train</button>
                    <button id="bus-btn" onClick={()=>{toggleOption('bus')}}>Bus</button>
                </div>

                
                <div id="train" class="travel-option active">
                    <div class="description">
                        <p>Book your train tickets with convenient options.</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <input type="text" name="departure" placeholder="Departure Station" required/><br/>
                        <input type="text" name="arrival" placeholder="Arrival Station" required/><br/>
                        <select name="class" required>
                            <option value="">Select Class</option>
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First Class</option>
                        </select><br/>
                        <input type="date" name="date" required/><br/>
                        <button class="book-button" onClick={()=>{checkAvail()}}>Check Book Train</button>
                    </div>
                </div>
                

                
                <div id="bus" class="travel-option">
                    <div class="description">
                        <p>Book your bus tickets with multiple route options.</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <input type="text" name="departure" placeholder="Departure City" required/><br/>
                        <input type="text" name="arrival" placeholder="Arrival City" required/><br/>
                        <select name="type" required>
                            <option value="">Select Bus Type</option>
                            <option value="regular">Regular</option>
                            <option value="luxury">Luxury</option>
                            <option value="sleeper">Sleeper</option>
                        </select><br/>
                        <input type="date" name="date" required/><br/>
                        <button class="book-button" onClick={()=>{checkAvail()}}>Check Book Bus</button>
                    </div>
                </div>
            </div>
        </>
    )
}