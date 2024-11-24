const Access = require('../models/access');

// Registrar un acceso (Create)
const registerAccess = async (req, res) => {
   const { userId, accessDate } = req.body;
   try {
       const access = new Access({ user: userId, accessDate, accessGranted: true });
       await access.save();
       res.status(201).json({ message: 'Acceso registrado exitosamente', access });
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
};

// Leer todos los accesos (Read)
const getAccesses = async (req, res) => {
   try {
       const accesses = await Access.find().populate('user');
       res.status(200).json(accesses);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};

// Leer un acceso por ID (Read)
const getAccessById = async (req, res) => {
   const { id } = req.params;
   try {
       const access = await Access.findById(id).populate('user');
       if (!access) return res.status(404).json({ message: 'Acceso no encontrado' });
       res.status(200).json(access);
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};

// Actualizar un acceso (Update)
const updateAccess = async (req, res) => {
   const { id } = req.params;
   const updates = req.body; // Ej. {accessGranted: false}
   try {
       const access = await Access.findByIdAndUpdate(id, updates, { new: true });
       if (!access) return res.status(404).json({ message: 'Acceso no encontrado' });
       res.status(200).json({ message: 'Acceso actualizado exitosamente', access });
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};

// Eliminar un acceso (Delete)
const deleteAccess = async (req, res) => {
   const { id } = req.params;
   try {
       const access = await Access.findByIdAndDelete(id);
       if (!access) return res.status(404).json({ message: 'Acceso no encontrado' });
       res.status(200).json({ message: 'Acceso eliminado exitosamente' });
   } catch (error) {
       res.status(500).json({ error: error.message });
   }
};
module.exports = {
   registerAccess,
   getAccesses,
   getAccessById,
   updateAccess,
   deleteAccess,
}