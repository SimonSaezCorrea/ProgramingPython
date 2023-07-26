import axios from 'axios';

const TEST_API_URL = "http://localhost:8080/test";

class TestService {
    getTestId(id_test){
        return axios.get(TEST_API_URL + "/" + id_test);
    }
    getCantTestUser(difficulty){
        return axios.get(TEST_API_URL + "/quest/difficulty/" + difficulty);
    }
    getImage(id_quest){
        return axios.get(TEST_API_URL + "/quest/image/" + id_quest);
    }
    createTest(test){
        return axios.post(TEST_API_URL, test)
    }
}

export default new TestService();