// src/components/EventForm.js

import React, { useState } from 'react';

function EventForm() {
  const [eventName, setEventName] = useState('');
 

  const handleFormSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div>
      <h2>Crear Nuevo Evento</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Campos del formulario */}
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
}

export default EventForm;
