const registerConstraints = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    numericality: false,
    type: 'string',
  }, 
  lastName: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    numericality: false,
    type: 'string',
  },
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
    format: {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: 'Passwords must be at least 8 characters long, and contain one letter and one number'
    }
  },
};

export default registerConstraints;