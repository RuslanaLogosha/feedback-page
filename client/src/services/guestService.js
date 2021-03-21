import axios from 'axios';

axios.defaults.baseURL = 'https://feedback-page.herokuapp.com/guests/';
// axios.defaults.baseURL = 'http://localhost:5000/guests/';

async function fetchGuests() {
  try {
    const feedbacks = await axios();
    return feedbacks;
  } catch (error) {
    new Error('No response from server');
  }
}

async function createGuest(body) {
  const { name, feedback, id } = body;
  try {
    const feedbacks = await axios({
      method: 'post',
      url: 'https://feedback-page.herokuapp.com/guests/',
      // url: 'http://localhost:5000/guests/',
      data: {
        name,
        feedback,
        id,
      },
    });

    return feedbacks;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchGuests, createGuest };

export default api;
