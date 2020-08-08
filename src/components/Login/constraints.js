const loginConstraints = {
    email: {
      presence: {
        allowEmpty: false,
        message: '^Field can\'t be blank'
      },
      email: {
        message: 'must be a valid email address'
      }
    },
    password: {
      presence: {
        allowEmpty: false,
        message: '^Field can\'t be blank'
      },
    },
  };
  
  export default loginConstraints;