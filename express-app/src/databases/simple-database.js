const someDatabase = {};

const connect = async () => {
  // Connection to remote database
  // ...
  return someDatabase;
};

const createData = async (data) => {
  const database = await connect();
  database[data.id] = { ...data };
  return database[data.id];
};

const getData = async (id) => {
  const database = await connect();
  return database[id];
};

const updateData = async (id, data) => {
  const database = await connect();
  database[id] = { ...database[id], ...data };
  return database[id];
};

const deleteData = async (id) => {
  const database = await connect();
  delete database[id];
};

module.exports = {
  createData,
  getData,
  updateData,
  deleteData,
};
