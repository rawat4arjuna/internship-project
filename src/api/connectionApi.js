const {
    Stitch,
    RemoteMongoClient,
  } = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('internship-shixg');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodbs').db('internship');

  export  function Connection ()
  {
    return db
  }