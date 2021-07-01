import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://192.168.0.100:3333',
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
