const axios = require("axios");
const { KEY, URL } = process.env;

const getCharById = async (req, res) => {
  try {
    const { id: charId } = req.params;

    const response = await axios.get(`${URL}/${charId}?key=${KEY}`);

    const { id, name, species, image, gender } = response.data;

    res.status(200).json({ id, name, species, image, gender });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getCharById =  async (req, res) => {

//   const { id } = req.params;

//   axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => {
//       const { id, name, species, image, gender } = response.data;

//       res.status(200).json({ id, name, species, image, gender });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// };

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => {
//             const obj = {
//                 id: response.data.id,
//                 image: response.data.image,
//                 name: response.data.name,
//                 gender: response.data.gender,
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

module.exports = { getCharById };
// se puede modularizar
