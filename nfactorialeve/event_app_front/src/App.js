// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/events/')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Upcoming Events</h1>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-item">
            {event.image_url && <img src={event.image_url} alt={event.title} />}
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-date">{new Date(event.date).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
