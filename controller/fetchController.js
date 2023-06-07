const axios = require('axios');
const Ticker = require('../model/fetchModel');

const fetchAndStoreData = async (req, res, next) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = response.data;
    const top10Data = Object.values(data).slice(0, 10);

    await Ticker.deleteMany({}); // Remove existing data before inserting new data
    const addData = await Ticker.insertMany(top10Data);

    res.status(200).json({data: addData });
  } catch (error) {
    console.error('Error fetching and storing data', error);
    res.status(500).send({ success: false, message: "Error fetching and storing data" });
  }
}


module.exports = {
  fetchAndStoreData
};
