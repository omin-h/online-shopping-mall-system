const brandList = require('../models/brandListModel');


//get all brandlist function
const getAllbrandlist = async (req, res) => {
    try {
        const brands = await brandList.find({});

        res.json(brands);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//get brandlist by ID function
const getbrandlistById = async (req, res) => {
    try {
      const brand = await Prd.findById(req.params.id);
  
      if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
      }
  
      res.json(brand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  
  module.exports = {getAllbrandlist, getbrandlistById};