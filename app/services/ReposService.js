import axios from '../config/axios';

class ReposService {
  /**
   *
   * @param {string} username
   * @returns {*}
   */
  getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        type: 'all',
        sort: 'updated',
      },
    });
  }
}

export default ReposService;
