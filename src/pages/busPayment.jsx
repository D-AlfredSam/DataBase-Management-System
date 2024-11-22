import React, { useState } from "react";
import "../styles/busPayment.css"; 

export default function busPayment(){
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [busType, setBusType] = useState("");
    const [totalCost, setTotalCost] = useState(0);

    const bookedSeatsData = {
        normal: ["W1", "A2", "A5"],
        "semi-sleeper": ["W2", "A3", "W4"],
        sleeper: ["UW1", "LW2", "UW3", "LW4"],
    };

    const handleBusTypeChange = (e) => {
        setBusType(e.target.value);
        setSelectedSeats([]);
        setTotalCost(0);
    };

    const handleSeatSelection = (seatNumber) => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const calculateCost = () => {
        const costPerSeat =
            busType === "normal"
                ? 200
                : busType === "semi-sleeper"
                ? 300
                : busType === "sleeper"
                ? 500
                : 0;
        return selectedSeats.length * costPerSeat;
    };

    const createSeatElement = (seatNumber, type, bookedSeats) => {
        const isBooked = bookedSeats.includes(seatNumber);
        const isSelected = selectedSeats.includes(seatNumber);

        return (
            <div
                key={seatNumber}
                className={`seat ${type} ${isBooked ? "booked" : ""} ${
                    isSelected ? "selected" : ""
                }`}
                onClick={() => !isBooked && handleSeatSelection(seatNumber)}
            >
                {seatNumber}
            </div>
        );
    };

    const generateSeats = () => {
        const bookedSeats = bookedSeatsData[busType] || [];
        const seatGrid = [];
        const totalSeats = 50; // Ensure at least 50 seats are shown
        const seatTypes = ["window", "aisle"];
        const rows = Math.ceil(totalSeats / seatTypes.length);
    
        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            seatTypes.forEach((type, index) => {
                const seatNumber =
                    busType === "sleeper"
                        ? `${row % 2 === 0 ? "U" : "L"}${type[0].toUpperCase()}${
                              row * seatTypes.length + index + 1
                          }`
                        : `${type[0].toUpperCase()}${row * seatTypes.length + index + 1}`;
                if (row * seatTypes.length + index < totalSeats) {
                    seatRow.push(createSeatElement(seatNumber, type, bookedSeats));
                }
            });
            seatGrid.push(
                <div className="seat-row" key={`row-${row}`}>
                    {seatRow}
                </div>
            );
        }
        return seatGrid;
    };
    
    
    
    

    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Book Your Bus Seat</h2>
            </div>
            <form action="/submit-bus-booking" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="seats">Number of Seats</label>
                    <input
                        type="number"
                        id="seats"
                        name="seats"
                        min="1"
                        value={selectedSeats.length}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bus-type">Bus Type</label>
                    <select
                        id="bus-type"
                        name="bus-type"
                        required
                        onChange={handleBusTypeChange}
                    >
                        <option value="" disabled selected>
                            Select Bus Type
                        </option>
                        <option value="normal">Normal</option>
                        <option value="semi-sleeper">Semi-Sleeper</option>
                        <option value="sleeper">Sleeper</option>
                    </select>
                </div>

                <div className="seat-grid">{busType && generateSeats()}</div>

                <div className="cost-display">
                    Total Cost: ₹{calculateCost()}
                </div>

                <div className="form-group">
                    <button type="submit">Book Seat</button>
                </div>
            </form>
        </div>
    );
};


