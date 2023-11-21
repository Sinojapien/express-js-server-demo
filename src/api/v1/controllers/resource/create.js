const { createResource } = require("../../services/resource");
const { createData } = require("../../repositories/resource");

const create = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      // 400
      throw new Error("Missing resource content.");
    }

    const resource = await createResource(
      { createRemoteData: createData },
      content
    );
    res.status(201).send({ message: "Resource created.", resource });

    console.log(`Resource ${resource.id} created.`); // Log
  } catch (error) {
    res.status(500).send({ error: { message: error.message } });
    console.error(error);
  }
};

module.exports = create;
