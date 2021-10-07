
const axios = require("axios");

const postTask = (task, apiBaseUrl) => axios.post(apiBaseUrl + "/todo", { Name: task })

module.exports = {  postTask };
