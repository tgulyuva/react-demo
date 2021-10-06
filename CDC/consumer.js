const axios = require('axios');

const addNewTask = (URL, PORT, taskName, isDone) => {
    const data = {
      name: taskName,
      IsDone: isDone,
    };
    axios
      .post(`${URL}:${PORT}/task`, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.message));
  };
  
  module.exports = {
    addNewTask
  };