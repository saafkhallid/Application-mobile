const Planing = require('../models/Planing')
const RDV = require('../models/Rdv');
const User = require('../models/User');

exports.planing = async (req,res)=>{
     try{
 const planing = new Planing ({
     ...req.body

 })
 const save = planing.save();
 if(save) return res.status(200).json(planing)
       
     } catch (err) {
        return res.status(500).json({msg: err.message})
    }

}

exports.getPlaning = async (req, res) => {
    try {
        const planing = await Planing.findOne().sort({ _id: -1 }).limit(-1)
        if (planing) return res.status(200).json(planing)
    } catch (error) {
        throw Error(error)
    }
}
exports.rdv = async (req, res) => {
    const { firstName, lastName, email, phone, CIN, rdvHour } = req.body
    const user = new User({
        firstName,
        lastName,
        email,
        phone,
        CIN,
    })
    const rdv = new RDV({
        id_user: user._id,
        rdvHour
    })
    try {
        const saveUser = await user.save();
        const saveRdv = await rdv.save();
        if (saveUser && saveRdv) return res.status(201).json(user + rdv)

    } catch (error) {
        throw Error(error)
    }

}
