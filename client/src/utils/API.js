import axios from "axios";

export default {
    //Get all Heroes
    getHeroes: function() {
        return axios.get("/api/heroes");
    },
    //Get the hero with the matching ID
    getHeroes: function(id) {
        return axios.get("/api/heroes" + id);
    },
    //Delete the hero by the ID
    deleteHero: function(id) {
        return axios.delete("/api/heroes" + id);
    },
    //Save a new hero to the database
    saveHero: function(heroData) {
        return axios.post("/api/heroes", heroData);
    }
};