import axios from 'axios';

export default {
    getAllBooks: function(){
        return axios.get("/api/getallbooks")
    },
    addBook: function(data){
        return axios.post("/api/addbook", data)
    }
}