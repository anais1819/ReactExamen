// src/components/EventList.js

import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function EventList() {
  const { events, fetchEvents } = useContext(AppContext);

  useEffect(() => {
    fetchEvents();  
  }, [fetchEvents]);

  return (
    <div>
      <h2>Lista de Eventos Pendientes</h2>
      
    </div>
  );
}

export default EventList;
