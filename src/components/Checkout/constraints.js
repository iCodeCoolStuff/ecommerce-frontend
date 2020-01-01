const shippingConstraints = {
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
  address1: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    type: 'string',
  }, 
  address2: {
    type: 'string'
  },
  city: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    numericality: false,
    type: 'string',
  },
  region: {
    type: 'string'
  },
  zip: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    numericality: true,
    format: {
      pattern: /^\d{5}(?:[-\s]\d{4})?$/,
      message: 'must be a valid zip code'
    }
  },
  country: {
    presence: {
      allowEmpty: false
    },
    numericality: false,
    type: 'string',
  },
};

const creditConstraints = {
  name: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    numericality: false,
    type: 'string',
  },
  cardNumber: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    format: {
      pattern: '^(?:[0-9]{16})$',
      message: 'must be a valid credit card number'
    }
  },
  expirationDate: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    format: {
      pattern: /^(?:0[1-9]|1[0-2])\/[0-9]{2}$/
    }
  },
  cvv: {
    presence: {
      allowEmpty: false,
      message: '^Field can\'t be blank'
    },
    numericality: true,
    format: {
      pattern: /^[0-9]{3}$/
    }
  }
};

export { shippingConstraints, creditConstraints};