import { useState } from 'react';
import EventCard from './Eventcard';
import './Eventlist.css';

const initialEvents = [
  {
    id: 1,
    title: 'Cultural Day',
    category: 'Culture',
    description:
      'Celebrate music, dance, art, and cultures from across campus.',
    date: 'November 12, 2026',
    venue: 'Open Air Stage',
    registrations: 0,
  },
  {
    id: 2,
    title: 'Sports Meet',
    category: 'Sports',
    description:
      'Join exciting games and sports competitions with your friends.',
    date: 'November 18, 2026',
    venue: 'College Sports Ground',
    registrations: 0,
  },
  {
    id: 3,
    title: 'Tech Symposium',
    category: 'Technology',
    description:
      'Explore technology, coding competitions, and innovative projects.',
    date: 'November 22, 2026',
    venue: 'Main Auditorium',
    registrations: 0,
  },
];

function EventList() {
  const [events, setEvents] = useState(initialEvents);
  const [favorites, setFavorites] = useState([]);
  const [registered, setRegistered] = useState([]);

  const handleRegister = (id) => {
    if (registered.includes(id)) {
      alert('You have already registered for this event!');
      return;
    }

    setRegistered((previous) => [...previous, id]);

    setEvents((previous) =>
      previous.map((event) =>
        event.id === id
          ? {
              ...event,
              registrations: event.registrations + 1,
            }
          : event
      )
    );
  };

  const handleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const handleRemove = (id) => {
    setEvents((previous) =>
      previous.filter((event) => event.id !== id)
    );

    setFavorites((previous) =>
      previous.filter((item) => item !== id)
    );

    setRegistered((previous) =>
      previous.filter((item) => item !== id)
    );
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: Date.now(),
      title: 'New Campus Event',
      category: 'Campus',
      description:
        'Join us to learn new skills and connect with students.',
      date: 'December 5, 2026',
      venue: 'College Auditorium',
      registrations: 0,
    };

    setEvents((previous) => [...previous, newEvent]);
  };

  return (
    <section className="events-page">
      <header className="events-header">
        <p className="events-eyebrow">DISCOVER YOUR CAMPUS</p>

        <h1>Upcoming Events</h1>

        <p className="events-subtitle">
          Find opportunities to learn, connect, and participate.
        </p>

        <button
          className="add-event-btn"
          onClick={handleAddEvent}
        >
          Add Sample Event
        </button>
      </header>

      {events.length === 0 ? (
        <p className="no-events">No events available.</p>
      ) : (
        <div className="event-list">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={handleRegister}
              onFavorite={handleFavorite}
              onRemove={handleRemove}
              isFavorite={favorites.includes(event.id)}
              isRegistered={registered.includes(event.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default EventList;
