const express = require('express')
const router = express.Router()
//modelName
const Batch = require('../Models/Batch')



router.get('/all', async function (req, res) {
    try {
        const response = await Batch.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        const {
            BatchId,
            CallDate,
            Time,
            Name,
            Mobile,
            Service,
            CallStatus,
            FollowupDate,
            FollowupTime,
            LastCall,
            Counseller,
            Action,
            Invoice,
        } = req.body
        const tempsale = await new Batch({
            BatchId,
            CallDate,
            Time,
            Name,
            Mobile,
            Service,
            CallStatus,
            FollowupDate,
            FollowupTime,
            LastCall,
            Counseller,
            Action,
            Invoice,
        })
        const response = await tempsale.save();
        // const response = await Batch.insertMany(salesclosureData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

module.exports = router