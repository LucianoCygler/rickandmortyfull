const axios = require("axios");
const { KEY, URL } = process.env;

const getCharDetail = async (req, res) => {
  try {
    const { characterId } = req.params;

    const response = await axios.get(
      `${URL}/character/${characterId}?key=${KEY}`
    );
    const { id, name, species, image, gender, origin } = response.data;

    res.status(200).json({ id, name, species, image, gender, origin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getCharDetail = (req, res) => {
//   const { id } = req.params;

//   axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => {
//       const { id, name, species, image, gender, origin } = response.data;

//       res.status(200).json({ id, name, species, image, gender, origin });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// };
// const getCharDetail = (res, id) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => {
//             const obj = {
//                 image: response.data.image,
//                 name: response.data.name,
//                 gender: response.data.gender,
//                 status: response.data.status,
//                 origin: response.data.origin,
//                 species: response.data.species
//             }
//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.end(JSON.stringify(obj));
//         })
//         .catch((error) => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end(error.message);

//         })
// }

module.exports = { getCharDetail };
