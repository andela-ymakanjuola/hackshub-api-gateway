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
        url: ''
      },

      notification: {
        url: ''
      }
    }
  },

  port: process.env.PORT || 5000

};