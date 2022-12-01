const controllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    controllers.findAllUsers()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({massage: err.message})
    })

}

const getUserById = (req, res) => {
    const {id} = req.params

    controllers.getUsersByid(id)
        .then(data => {
            if (data) {
                res.status(201).json(data)
            } else {
                res.status(404).json({massage: 'invalid ID'})
            }
        })
        .catch(err  => {
            res.status(404).json({massage: err.massage})
        })
}

const postUser = (req, res) => {
    const {firstName, lastName, email, password, birthday} = req.body
    if (firstName && lastName && email && password && birthday) {
        //? Ejecutamos el controllerusers
        controllers.createUser({firstName, lastName, email, password, birthday})
            .then( data => {res.status(201).json(data)})
            .catch(err => {res.status(401).json(err.message)})
        } else {
            //? Error cuando no mandan todos los datos necesarios para crear un usuario
            res.status(400).json({message: 'All fields must be completed', fields: {firstName: 'string',lastName: 'string',email: 'example@example.com',password: 'string',birthday: 'YYYY/MM/DD'}})
        }
}

const patchUser = () => {
    
}

const deleteUser = (req, res) => {
    const {id} = req.params
    usersControllers.deleteUser(id)
        .then((data) => {
            if (data) {
                res.status(204).json();
            } else {
                res.status(404).json({ message: "Invalid ID" });
            }})
        .catch((err) => {res.status(400).json({ message: err.message });});
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    deleteUser
}


