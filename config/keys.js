module.exports = {
  app: {
    name: 'Meditation Mitra',
    serverURL: process.env.BASE_SERVER_URL
  },
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGO_URI
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: '7d'
  }
};
