import axios from "axios";

export default {
    // Gets all books
    getCompany: function () {
        return axios.get("/api/companies");
    }
};
