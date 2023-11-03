const { ResourceModel } = require("../models/ResourceModel");

const validate = (resource) => {
  if (!Object.keys(ResourceModel).every((key) => resource[key] !== undefined)) {
    throw new Error("Resource is not valid.");
  }
};

const createResource = async (
  { getRemoteData, createRemoteData },
  { id, content }
) => {
  if ((await getRemoteData(id)) !== undefined) {
    throw new Error("Resource already existed.");
  }

  const resource = { id, ...content };
  validate(resource);
  await createRemoteData(resource);
  return resource;
};

const getResource = async ({ getRemoteData }, { id }) => {
  const resource = await getRemoteData(id);
  if (!resource) {
    throw new Error("Resource not found.");
  }
  return resource;
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
  deleteResource,
};
