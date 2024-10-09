const Client = require("../models/Client");

// Crear un nuevo cliente
const createClient = async (req, res) => {
  try {
    const { name, email, address, phone } = req.body;

    // Validamos que los campos requeridos estén presentes
    if (!name || !email || !address) {
      return res
        .status(400)
        .json({ message: "Nombre, email y dirección son obligatorios." });
    }

    // Creamos el cliente
    const client = await Client.create({
      name,
      email,
      address,
      phone, // phone es opcional
    });

    res.status(201).json({ message: "Cliente creado con éxito", client });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Si hay algún error de validación (por ejemplo, el email ya existe)
      return res
        .status(400)
        .json({ message: "Error de validación", error: error.errors });
    }
    // Cualquier otro error
    res.status(500).json({ message: "Error al crear cliente", error });
  }
};

// Obtener todos los clientes
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes", error });
  }
};

// Obtener un cliente por ID
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cliente", error });
  }
};

// Actualizar un cliente
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, address, phone } = req.body;

    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Actualizamos los campos del cliente
    client.name = name || client.name;
    client.email = email || client.email;
    client.address = address || client.address;
    client.phone = phone || client.phone;

    await client.save();

    res.status(200).json({ message: "Cliente actualizado con éxito", client });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cliente", error });
  }
};

// Eliminar un cliente
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    await client.destroy();
    res.status(200).json({ message: "Cliente eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cliente", error });
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
