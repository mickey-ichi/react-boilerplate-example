import axios from 'config/axios';
import ReposService from './ReposService';

import Cookies from './Cookies';

const cookies = new Cookies();

export { cookies };

const reposService = new ReposService(axios);

export { reposService };
