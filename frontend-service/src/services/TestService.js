import axios from 'axios';

const TEST_API_URL = "http://localhost:8080/test";

class TestService {

    getCantTestUser(id_user){
        return axios.get(TEST_API_URL + "/quest");
    }
}

export default new TestService();