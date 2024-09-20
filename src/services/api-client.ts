import axios from "axios";

export default axios.create({
    baseURL: "https://rawg.io/api",
    params: {
        key: "4870c83416ba49fb99e38aae929409af"
    }
})