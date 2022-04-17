const getDrinks = () => {
    const response = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                        .then(data => data.json())
                        .then(val => console.log(val))

    return response
}

console.log(getDrinks())

Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch(error => {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
