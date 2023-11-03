const someDatabase = {};

const connect = async () => {
  // Connection to remote database
  // ...
  return someDatabase;
};

const createData = async (data) => {
  const database = await connect();
  database[data.id] = { ...data };
};

const getData = async (id) => {
  const database = await connect();
  return database[id];
};

const deleteData = async (id) => {
  const database = await connect();
  delete database[id];
};

module.exports = {
  createData,
  getData,
  deleteData,
};
