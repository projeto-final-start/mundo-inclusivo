import React, { useState } from "react";
import "./Agenda.css";

function AgendaEspecialista() {
    const [events, setEvents] = useState([]);

    const handleAddEvent = () => {
        const newEvent = {
            id: Math.random(),
            title: "Meeting",
            date: new Date().toISOString().slice(0, 10),
            time: "10:00 AM",
            location: "Office",
        };
        setEvents([...events, newEvent]);
    };

    const handleRemoveEvent = (id) => {
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
    };

    return (
        <div className="agenda">
            <h1>Agenda</h1>
            <button onClick={handleAddEvent}>Add Event</button>
            {events.map((event) => (
                <div key={event.id} className="event">
                    <h3>{event.title}</h3>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                    <button onClick={() => handleRemoveEvent(event.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default AgendaEspecialista;
