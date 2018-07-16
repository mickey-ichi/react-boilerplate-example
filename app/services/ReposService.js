class ReposService {
  constructor(axios) {
    this.axios = axios;
  }

  getRepos(username) {
    this.axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        type: 'all',
        sort: 'updated',
      },
    });
  }
}

export default ReposService;
