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
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
      message: 'Passwords must be at least 8 characters long, and contain one capital letter and one number'
    }
  },
};

export default registerConstraints;