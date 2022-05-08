// name, phoneNumber, email, password
import axios from 'axios';

const API_URL = '/api/users/';

class AuthService {
  async register(userData) {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
      localStorage.setItem('user', this.serialize(response.data));
    }

    return response.data;
  }

  async login(userData) {
    const response = await axios.post(API_URL + 'login', userData);
    if (response.data) {
      localStorage.setItem('user', this.serialize(response.data));
    }

    return response.data;
  }

  async logout() {
    localStorage.removeItem('user');
  }

  serialize(data) {
    return JSON.stringify(data);
  }
}

const authService = new AuthService();

export default authService;
