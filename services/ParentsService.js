import axios from 'axios';

const PARENTS_BASE_URL = "http://localhost:8080/api/parents";

class ParentsService {
    getParents() {
        return axios.get(PARENTS_BASE_URL);
    }

    createParents(parents) {
        return axios.post(PARENTS_BASE_URL, parents);
    }

    getParentsId(parentId) {
        return axios.get(`${PARENTS_BASE_URL}/${parentId}`);
    }

    updateParents(parentId, parents) {
        return axios.put(`${PARENTS_BASE_URL}/${parentId}`, parents);
    }

    deleteParents(parentId) {
        return axios.delete(`${PARENTS_BASE_URL}/${parentId}`);
    }
}

const parentsServiceInstance = new ParentsService();

export default parentsServiceInstance;
