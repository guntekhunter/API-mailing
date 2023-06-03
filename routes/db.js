const {UsersConteroller} = require("../controller")

const findAlldata = async () => {
    const data = await Users.findAll();
    console.log(data)
    return data
};

module.exports = {
    findAlldata
}