const axios = require("axios");

const functions = {
  soma: (valor1, valor2) => valor1 + valor2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Paulo" };
    user["lastName"] = "Sarmento";
    return user;
  },

  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/9")
      .then((response) => response.data)
      .catch((error) => console.log(error)),
};

module.exports = functions;
