const mongoHost = process.env.MONGO_HOST || 'localhost';

const testConfig = {
  env: 'test',
  jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
  db: `mongodb://${mongoHost}/express-mongoose-es6-rest-api-test`,
  port: 4040
};

export default testConfig;
