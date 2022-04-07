const { faker } = require('@faker-js/faker');

class Empresa {
    constructor() {
      this.id = faker.datatype.number({ min: 100, max: 999});
      this.name =  faker.name.firstName()
      this.address = {
          street : faker.address.streetAddress(),
          city : faker.address.city(),
          state : faker.address.state(),
          postal_code : faker.address.zipCode('####'),
          country : faker.address.country()
      }      
    }
}

//export default Empresa;
module.exports = Empresa;