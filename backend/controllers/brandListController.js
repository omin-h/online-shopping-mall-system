import { brandList } from '../models/brandListModel.js';

// Get all brand list function
export async function getAllbrandlist(req, res, next) {
  try {
    const response = await brandList.find();
    res.json(response);
  } catch (error) {
    res.json({ error });
  }
}

// Add brand list function
export async function addbrandList(req, res, next) {
  try {
    const brand = new brandList({
      brandName: req.body.brandName,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    });
    const response = await brand.save();
    res.json(response);
  } catch (error) {
    res.json({ error });
  }
}

// Get brand list by ID function
export async function getbrandlistById(req, res) {
  try {
    const brand = await brandList.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
