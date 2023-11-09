const { getResource } = require("../../services/ResourceServices");
const { getData } = require("../../databases/SimpleDatabase");

// Minimize API calls
const get = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      // 400
      throw new Error("Missing resource id.");
    }

    const resource = await getResource({ getRemoteData: getData }, { id });
    res.status(200).send({ message: "Resource found.", resource });

    console.log(`Resource ${resource.id} accessed.`); // Log
  } catch (error) {
    res.status(500).send({ error: { message: error.message } });
    console.error(error);
  }
};

module.exports = get;
