const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUserById, updateUser, deleteUser, changeUserStatus} = require('../controllers/user');

router.post('/users', createUser);            // Crear usuario
router.get('/users', getUsers);               // Leer todos los usuarios
router.get('/users/:id', getUserById);        // Leer un usuario por ID
router.put('/users/:id', updateUser);         // Actualizar un usuario
router.delete('/users/:id', deleteUser);  // Eliminar un usuario (si lo deseas, o cambiar a desactivar)
router.patch('/users/:id/status', changeUserStatus);  // Cambiar el status del usuario

module.exports = router;
