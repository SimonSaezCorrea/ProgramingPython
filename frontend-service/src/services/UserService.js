import axios from 'axios';

const USER_API_URL = "http://localhost:8080/user";

class UserService {

    getConnect(){
        return axios.get(USER_API_URL + "/connect");
    }
}

export default new UserService();