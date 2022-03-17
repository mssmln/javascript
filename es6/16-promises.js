// you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. 
// Promise is a constructor function, so you need to use the new keyword to create one. 
// It takes a function, as its argument, with two parameters, resolve and reject. These are methods used to determine the outcome of the promise
// A promise has three states: pending, fulfilled, and rejected

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got data');
  } else {  
    reject('Data not received');
  }
});

// then method is executed immediately after your promise is fulfilled with resolve
makeServerRequest.then(result => {
  console.log(result);
});

// catch is the method used when your promise has been rejected
makeServerRequest.catch(error => {
  console.log(error);
});