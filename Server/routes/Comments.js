const express = require('express');
const router = express.Router();
const { Comments } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get("/:employeeId", async (req,res) => {
    const employeeId = req.params.employeeId;
    const comments = await Comments.findAll({ where: {EmployeeId: employeeId} });
    res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});

module.exports = router;