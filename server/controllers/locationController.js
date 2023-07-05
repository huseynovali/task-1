const Location = require('../models/locationSchema');

const locationController ={

 getAllLocations :async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json(error);
  }
},


 createLocation : async (req, res) => {
  const { name, icon } = req.body;
  try {
    const newLocation = await Location.create({ name, icon });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json(error);
  }
},


 getLocation : async (req, res) => {
  const { locationId } = req.params;
  try {
    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(404).json({ message: 'location not found' });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json(error);
  }
},

 updateLocation : async (req, res) => {
  const { locationId } = req.params;
  const { name, icon } = req.body;
  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      locationId,
      { name, icon },
      { new: true }
    );
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ error: 'location update !' });
  }
},


 deleteLocation : async (req, res) => {
  const { locationId } = req.params;
  try {
    const deletedLocation = await Location.findByIdAndDelete(locationId);
    if (!deletedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json({ message: 'Location deleted !' });
  } catch (error) {
    res.status(500).json(error);
  }
}

}

module.exports = {
  locationController
};
