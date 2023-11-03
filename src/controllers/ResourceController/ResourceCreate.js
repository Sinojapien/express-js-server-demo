const { createResource } = require("../../services/ResourceServices");
const { createData, getData } = require("../../databases/SimpleDatabase");

const create = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Missing resource id.");
    }
    const { content } = req.body;
    if (!content) {
      throw new Error("Missing resource content.");
    }

    const resource = await createResource(
      { getRemoteData: getData, createRemoteData: createData },
      { id, content }
    );
    res.status(201).send({ message: "Resource created.", resource });

    console.log(`Resource ${resource.id} created.`); // Log
  } catch (error) {
    res.status(500).send({ error: { message: error.message } });
    console.error(error);
  }
};

module.exports = create;
