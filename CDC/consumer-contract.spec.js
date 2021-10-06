const { Pact } = require('@pact-foundation/pact');
const path = require('path');
const { addNewTask } = require('./consumer');

const PORT = 9000;
const URL = 'http://localhost';

const provider = new Pact({
  consumer: 'Consumer',
  provider: 'Provider',
  port: 9000,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
});

describe('ToDo Service', () => {
    describe('When a request to add task', () => {
      beforeAll(() =>
        provider.setup().then(() => {
          provider.addInteraction({
            uponReceiving: 'a request to list all movies',
            withRequest: {
              method: 'post',
              path: '/task',
              headers: {
                "Content-Type": "application/json"
              },
              body: {
                Name: "Buy some milk"
              }
            },
            willRespondWith: {
              status: 201,
              body: eachLike(
                {
                  succes: true,
                },
                { min: 5 }
              ),
            },
          });
        })
      );
  
      test('should return the correct data', async () => {
        const response = await addNewTask(URL, PORT, "Buy some milk",false);
        console.log("***********************")
        console.log(response)
        expect(response[0].name).toBe('Buy some milk');
        expect(response[0].IsDone).toBe(false);
      });
  
      afterEach(() => provider.verify());
      afterAll(() => provider.finalize());
    });
  });