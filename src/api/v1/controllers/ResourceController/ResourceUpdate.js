const { updateResource } = require("../../services/ResourceServices");
const { getData, updateData } = require("../../databases/SimpleDatabase");

const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      // 400
      throw new Error("Missing resource id.");
    }
    const { content } = req.body;
    if (!content) {
      // 400
      throw new Error("Missing resource data.");
    }

    const resource = await updateResource(
      { getRemoteData: getData, updateRemoteData: updateData },
      { id, data: content }
    );

    res
      .status(200)
      .send({ message: `Resource ${id} has been updated`, resource });
    console.log(`Resource ${id} updated.`); // Log
  } catch (error) {
    res.status(500).send({ error: { message: error.message } });
    console.error(error);
  }
};

module.exports = update;
