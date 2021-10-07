const assert = require('assert')
const { Pact } = require('@pact-foundation/pact')
const axios = require("axios");
// postTask = async (task, apiBaseUrl) => {
//   console.log("************** çalıştım *****************")
//  return axios
//       .post(apiBaseUrl +"/task/add", {
//         name: task,
//         IsDone: false
//       });
// } 
const postTodo = (content, apiBaseUrl) => axios.post(apiBaseUrl + "/task/add", { Name: content })

const fetchTodolist = (apiBaseUrl) => axios.get(apiBaseUrl + "/task/getall")
describe('Pact with todo API', () => {
    const provider = new Pact({
      port: 3001,
      consumer: 'todo-list-front',
      provider: 'todo-list-backend',
      pactfileWriteMode: 'overwrite'
    })
  
    before(() => provider.setup())
    after(() => provider.finalize())
    
    describe('When a post request is sent to the Todo API', () => {
      before(async () => {
        return provider.addInteraction({
          state: 'there are todo',
          uponReceiving: 'a post request for todo',
          withRequest: {
            path: '/task/add',
            method: 'POST',
            body: {
              Name: 'Buy some milk'
            }
          },
          willRespondWith: {
            body:{
              "success":true
            },
            status: 201,
          },
        })
      })
  
      it("'Buy the milk' to be added to to-do list", async () => {
        postTodo('Buy some milk', "http://localhost:3001").then((response) => {
          assert.ok(response.status)
        }).catch((error) => {
          console.log(error.message);
        });
      })
    })
  })