const mongoHost = process.env.MONGO_HOST || 'localhost';

const devConfig = {
  env: 'development',
  MONGOOSE_DEBUG: true,
  jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
  db: `mongodb://${mongoHost}/express-mongoose-es6-rest-api-development`,
  port: 4040
};

export default devConfig;
