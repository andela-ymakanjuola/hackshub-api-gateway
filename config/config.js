module.exports = {
  route: {
    development: {
      users: {
        url: 'http://localhost:5555/'
      },

      notification: {
        url: 'http://localhost:3000/'
      }
      
    },
    test: {
      users: {
        url: 'http://localhost:5555/'
      },

      notification: {
        url: 'http://localhost:3000/'
      }
    },
    production: {
      users: {
        url: 'https://hackshub-user-service.herokuapp.com/'
      },

      notification: {
        url: 'https://notification-email-api.herokuapp.com/'
      }
    }
  },

  port: process.env.PORT || 5000

};