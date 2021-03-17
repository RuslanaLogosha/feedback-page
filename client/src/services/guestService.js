import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/guests/';

async function fetchGuests() {
  try {
    const ratings = await axios();
    return ratings;
  } catch (error) {
    new Error('No response from server');
  }
}

async function createGuest(body) {
  const { name, feedback, id } = body;
  try {
    const ratings = await axios({
      method: 'post',
      url: 'http://localhost:5000/guests/',
      data: {
        name,
        feedback,
        id,
      },
    });
    return ratings;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchGuests, createGuest };

export default api;
