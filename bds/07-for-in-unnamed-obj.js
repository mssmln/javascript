// Iterate Through the Keys of an Object with a for...in Statement
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
};
  
function countOnline(usersObj) {
    let c = 0;
    for (let user in usersObj) {
        if (usersObj[user].online) c++;
    }
    return c;
}

console.log(countOnline(users));