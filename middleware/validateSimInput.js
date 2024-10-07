const validateSimInput = (req, res, next) => {
    const { simNumber } = req.body;

    if (!simNumber) {
        return res.status(400).json({ message: 'SIM number is required', success: false });
    }

    next();
};

module.exports = validateSimInput;