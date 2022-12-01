const Users = require('../models/users.models')
const uuid = require('uuid')
const findAllUsers = async () => {
    const data = await Users.findAll()
    return data 
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where:{
            id: id
        }
    })
    return data 
}

const createUser = async (data) => {
    const newUsers = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    })
    return newUsers
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where:{
            id: id
        }
    })
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    deleteUser
}


