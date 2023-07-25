import axios from 'axios';

const TEST_API_URL = "http://localhost:8080/test";

class TestService {

    getCantTestUser(){
        return axios.get(TEST_API_URL + "/quest");
    }
    createTest(test){
        return axios.post(TEST_API_URL, test)
    }
}

export default new TestService();