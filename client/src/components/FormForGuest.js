import { useState, useEffect } from 'react';
import shortid from 'shortid';

import api from '../services/guestService';

export default function FormForGuest({ onSubmit }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    async function renderGuests() {
      api
        .fetchGuests()
        .then(response => {
          setGuests([...response.data]);
        })
        .catch(error => {
          console.log(error);
        });
    }

    renderGuests();
  }, []);

  async function createGuest() {
    const id = shortid.generate();
    api
      .createGuest({ name, feedback, id })
      .then()
      .catch(error => {
        console.log(error);
      });
  }

  async function renderGuests() {
    api
      .fetchGuests()
      .then(response => {
        setGuests([...response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'feedback':
        setFeedback(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createGuest();
    renderGuests();
    reset();
  };

  const reset = () => {
    setName('');
    setFeedback('');
  };

  return (
    <>
      <h1>Form for feedback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Feedback
          <input
            type="text"
            name="feedback"
            value={feedback}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Post your feedback!</button>
      </form>
      {guests.length > 0 && (
        <>
          <h1>Look at the feedbacks we already have</h1>
          <ul>
            {guests.map(({ name, feedback, id }) => (
              <li key={id}>
                <p>{name}</p>
                <p>{feedback}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
