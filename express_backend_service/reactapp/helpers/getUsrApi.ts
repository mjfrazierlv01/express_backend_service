/** This api allows the user to get the data from the URL.  */

/** Todo - Fix typescript errors - line 27 */

const axios = require("axios");

exports.getUserData = async (req, res) => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/users");
  let getUserData = response.data.map(
    (getUser: {
      name: any;
      phone: any;
      address: { street: any; suite: any; city: any; zipcode: any };
    }) => {
      return {
        name: getUser.name,
        phone: getUser.phone,
        address: {
          street: getUser.address.street,
          suite: getUser.address.suite,
          city: getUser.address.city,
          zipcode: getUser.address.zipcode
        }
      };
    }
  );
  await res.json({ getUserData: getUserData });
};
