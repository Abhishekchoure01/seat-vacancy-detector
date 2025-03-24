import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS for styling

const TOTAL_SEATS = 6; // Change this based on your setup

function App() {
    // Seat states: true (occupied), false (available)
    const [seats, setSeats] = useState(Array(TOTAL_SEATS).fill(false));
    const [timers, setTimers] = useState(Array(TOTAL_SEATS).fill(0));

    // Function to toggle seat status
    const toggleSeat = (index) => {
        setSeats((prevSeats) => {
            const newSeats = [...prevSeats];
            newSeats[index] = !newSeats[index];

            // Reset timer if occupied
            if (newSeats[index]) {
                setTimers((prevTimers) => {
                    const newTimers = [...prevTimers];
                    newTimers[index] = 0; // Reset timer on occupation
                    return newTimers;
                });
            }

            return newSeats;
        });
    };

    // Timer logic for occupied seats
    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prevTimers) =>
                prevTimers.map((time, index) => (seats[index] ? time + 1 : time))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [seats]);

    return (
        <div className="container">
            <h1>Seat Vacancy Detector</h1>
            <div className="seat-layout">
                {seats.map((occupied, index) => (
                    <div
                        key={index}
                        className={`seat ${occupied ? 'occupied' : 'available'}`} // ✅ Fixed here
                        onClick={() => toggleSeat(index)}
                    >
                        <p>Seat {index + 1}</p>
                        {occupied && <p className="timer">Occupied: {timers[index]}s</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

