// src/EventDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/events/${id}/details/`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the event details!', error);
      });
  }, [id]);

  const handleRegister = () => {
    axios.post(`http://localhost:8000/api/events/${id}/register/`, {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // assuming token is stored in localStorage
      }
    })
      .then(response => {
        alert('You have successfully registered for this event!');
      })
      .catch(error => {
        console.error('There was an error registering for the event!', error);
      });
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <img src={event.image_url} alt={event.title} />
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{new Date(event.date).toLocaleString()}</p>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default EventDetails;
