const pool = require('../models/db');

// Get all donors
const getAllBeneficiaries = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM beneficiaries');
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Add a new donor
const addBeneficiaries = async (req, res) => {
    const { name, contact, donation_type, amount } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO donors (name, contact, donation_type, amount) VALUES (?, ?, ?, ?)', [name, contact, donation_type, amount]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getAllBeneficiaries, addBeneficiaries };