const { deleteResource } = require("../../services/resource");
const {
  getData,
  deleteData,
} = require("../../../../databases/simple-database");

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      // 400
      throw new Error("Missing resource id.");
    }

    await deleteResource(
      { getRemoteData: getData, deleteRemoteData: deleteData },
      { id }
    );
    res.status(200).send({ message: `Resource ${id} has been deleted` });

    console.log(`Resource ${id} deleted.`); // Log
  } catch (error) {
    res.status(500).send({ error: { message: error.message } });
    console.error(error);
  }
};

module.exports = remove;
