module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f5b433209c1760da664e86467753ab65'),
  },
});
