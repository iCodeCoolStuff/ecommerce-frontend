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
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      message: 'must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    }
  },
};

export default registerConstraints;