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

  const input = { id, ...content };
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
