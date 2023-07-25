import axios from 'axios';

const QUEST_API_URL = "http://localhost:8080/quest";

class QuestService {
    createQuest(quest){
        return axios.post(QUEST_API_URL, quest);
    }
}

export default new QuestService();