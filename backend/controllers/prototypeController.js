import Prototype from '../models/prototypeModel.js';

export const uploadPrototype = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const prototype = new Prototype({ imageUrl });
    await prototype.save();
    res.status(201).json({ message: 'Prototype uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPrototypes = async (req, res) => {
    try {
      const prototypes = await Prototype.find();
      res.status(200).json(prototypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
