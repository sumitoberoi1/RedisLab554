const model = require("./model");
const getById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = model.filter(person => person.id === id);
      if (person.length > 0) {
        resolve(person[0]);
      } else {
        reject(new Error("Something went wrong "));
      }
    }, 5000);
  });
};

module.exports = { getById };
