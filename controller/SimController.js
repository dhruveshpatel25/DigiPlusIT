const SimModel = require('../models/simcard');

const activateSim = async (req, res) => {
    try {
        const { simNumber } = req.body;
        const simCard = await SimModel.findOne({ simNumber });
        if (!simCard) {
            return res.status(404).json({ error: 'SIM card not found', success: false });
        }
        if (simCard.status === 'active') {
            return res.status(400).json({ message: 'SIM is already active', success: true });
        }
        simCard.status = 'active';
        simCard.activationDate = new Date();
        await simCard.save();
        res.status(200).json({ message: "SimCard activated", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

const deactivateSim = async (req, res) => {
    try {
        const { simNumber } = req.body;
        const simCard = await SimModel.findOne({ simNumber });
        if (!simCard) {
            return res.status(404).json({ error: 'SIM card not found', success: false });
        }
        if (simCard.status === 'inactive') {
            return res.status(400).json({ message: 'SIM is already inactive', success: true });
        }
        simCard.status = 'inactive';
        await simCard.save();
        res.status(200).json({ message: "SimCard deactivated", success: true });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

const getSimDetails = async (req, res) => {
    try {
        const { simNumber } = req.params;
        const simCard = await SimModel.findOne({ simNumber });
        if (!simCard) {
            return res.status(404).json({ error: 'SIM card not found', success: false });
        }
        return res.status(200).json(simCard);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

module.exports = {
    activateSim,
    deactivateSim,
    getSimDetails,
};
