//import  faker from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

class Usuario {
    constructor() {
      this.id = faker.datatype.number({ min: 100, max: 999});
      this.first_name =  faker.name.firstName()
      this.last_name = faker.name.lastName()
      this.phone = faker.phone.phoneNumber('9##-###-###');
      this.email = faker.internet.email();
      this.password = faker.internet.password(10);
    }
}

//export default Usuario;
module.exports = Usuario;