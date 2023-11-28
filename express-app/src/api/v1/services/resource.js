const { ResourceModel } = require("../models/resource");

const validate = (resource) => {
  if (
    !Object.keys(ResourceModel)
      .filter((key) => key !== "id")
      .every((key) => resource[key] !== undefined)
  ) {
    throw new Error("Resource is not valid.");
  }
};

const createResource = async ({ createRemoteData }, input) => {
  validate(input);
  const resource = await createRemoteData(input);
  return resource;
};

const getResource = async ({ getRemoteData }, { id }) => {
  const resource = await getRemoteData(id);
  if (!resource) {
    throw new Error("Resource not found.");
  }
  return resource;
};

const updateResource = async (
  { getRemoteData, updateRemoteData },
  { id, data }
) => {
  const resource = await getRemoteData(id);
  if (!resource) {
    throw new Error("Resource not found.");
  }

  // Constructing from input
  const newData = {};
  if (data.username !== undefined) {
    newData.username = data.username;
  }
  if (data.password !== undefined) {
    newData.password = data.password;
  }
  if (Object.keys(newData).length <= 0) {
    throw new Error("Missing update data.");
  }

  const newResource = await updateRemoteData(resource.id, data);
  return newResource;
};

const deleteResource = async ({ getRemoteData, deleteRemoteData }, { id }) => {
  const resource = await getRemoteData(id);
  if (!resource) {
    throw new Error("Resource not found.");
  }
  await deleteRemoteData(resource.id);
};

module.exports = {
  createResource,
  getResource,
  updateResource,
  deleteResource,
};
