import axios from 'axios';

axios.defaults.baseURL = 'https://feedback-page.herokuapp.com/guests/';

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
      url: 'https://feedback-page.herokuapp.com/guests/',
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
