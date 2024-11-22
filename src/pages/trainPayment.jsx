import '../styles/trainPayment.css'
import React, { useState } from 'react';

export default function trainPayment(){
    const [trainType, setTrainType] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats] = useState({
        seater: ['W1', 'M2', 'A3', 'A6'],
        sleeper: ['UW1', 'LW3', 'A2', 'UW6'],
    });

    const calculateCost = () => {
        const cost = trainType === 'seater' ? selectedSeats.length * 150 : selectedSeats.length * 250;
        return cost;
    };

    const toggleSeatSelection = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const createSeatElement = (seatNumber, type) => {
        const isBooked = (bookedSeats[trainType] || []).includes(seatNumber);
        return (
            <div
                key={seatNumber}
                className={`seat ${type} ${isBooked ? 'booked' : selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
                onClick={() => !isBooked && toggleSeatSelection(seatNumber)}
            >
                {seatNumber}
            </div>
        );
    };

    const generateSeats = () => {
        if (!trainType) return null;

        if (trainType === 'seater') return generateSeaterSeats();
        if (trainType === 'sleeper') return generateSleeperSeats();
    };

    const generateSeaterSeats = () => {
        const rows = 6;
        const seatTypes = ['window', 'middle', 'aisle'];
        return (
            <div className="seat-box" style={{width:'auto'}}>
                <h3>Seater Configuration</h3>
                {Array.from({ length: rows }).map((_, row) => (
                    <div className="seat-row" key={`row-${row}`}>
                        {seatTypes.map((type, index) =>
                            createSeatElement(`${type[0].toUpperCase()}${row * seatTypes.length + index + 1}`, type)
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const generateSleeperSeats = () => {
        const rows = 4;
        const seatTypes = ['window', 'aisle'];
        return (
            <>
                {['Upper Berth', 'Lower Berth'].map((berth, berthIndex) => (
                    <div className="seat-box" key={berth}>
                        <h3>{berth}</h3>
                        {Array.from({ length: rows }).map((_, row) => (
                            <div className="seat-row" key={`row-${berthIndex}-${row}`}>
                                {seatTypes.map((type, index) =>
                                    createSeatElement(
                                        `${berthIndex === 0 ? 'U' : 'L'}${type[0].toUpperCase()}${row * seatTypes.length + index + 1}`,
                                        type
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Book Your Train Seat</h2>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" required pattern="[0-9]{10}" />
                </div>
                <div className="form-group">
                    <label htmlFor="seats">Number of Seats</label>
                    <input type="number" id="seats" value={selectedSeats.length} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="train-type">Train Type</label>
                    <select id="train-type" onChange={(e) => setTrainType(e.target.value)} required>
                        <option value="" disabled selected>
                            Select Train Type
                        </option>
                        <option value="seater">Seater</option>
                        <option value="sleeper">Sleeper</option>
                    </select>
                </div>
                <div className="seat-grid">{generateSeats()}</div>
                <div className="cost-display">Total Cost: ₹{calculateCost()}</div>
                <div className="form-group">
                    <button type="submit">Book Seat</button>
                </div>
            </form>
        </div>
    );
}


