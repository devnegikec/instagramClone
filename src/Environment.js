const {
	Environment,
	Network,
	RecordSource,
	Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  // 4
  return fetch('https://api.graph.cool/relay/v1/cj8beln1l01tq0161cxeki75v', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})
// 5
const environment = new Environment({
  network,
  store,
})
// 6
export default environment
