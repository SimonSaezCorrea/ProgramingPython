import axios from 'axios';

const USER_API_URL = "http://localhost:8080/user";

class UserService {

    getConnect(){
        return axios.get(USER_API_URL + "/connect");
    }

    getConfirmationUser(user, pass){
        return axios.get(USER_API_URL + "/connect/"+ user + "/" +pass);
    }

    logout(){
        return axios.get(USER_API_URL + "/logout");
    }
}

export default new UserService();