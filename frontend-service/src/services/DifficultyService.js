import axios from 'axios';

const DIFFICULTY_API_URL = "http://localhost:8080/difficulty";

class TestService {

    getDifficulty(){
        return axios.get(DIFFICULTY_API_URL);
    }
}

export default new TestService();