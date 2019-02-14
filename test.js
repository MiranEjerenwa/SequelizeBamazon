const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const db = require('./models');
const expect = chai.expect;


// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

describe('GET /api/examples', function() {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function() {
      request = chai.request(server);
      return db.sequelize.sync({ force: true });
    });
  
    it('should find all examples', function(done) {
      // Add some examples to the db to test with
      db.product.bulkCreate([
        {product_name: 'Sprite', department_name: 'Sugars', price: 4.99, stock_quantity: 22},
        {product_name: 'Coke', department_name: 'Sugars', price: 3.99, stock_quantity: 10},
        {product_name: 'Lemon', department_name: 'Healthy', price: 5.99, stock_quantity: 32}
      ]).then(function() {
        console.log("in products test")
        // Request the route that returns all examples
        request.get('/api/products').end(function(err, res) {
          let responseStatus = res.status;
          let responseBody = res.body;
          console.log("in products text")
          // Run assertions on the response
  
          expect(err).to.be.null;
  
          expect(responseStatus).to.equal(200);
          
  
          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(3);
  
          // expect(responseBody[0])
          //   .to.be.an('object')
          //   .that.includes({ product_name: 'Sprite', department_name: 'Sugars', price: 4.99, stock_quantity: 22 });
  
        //   expect(responseBody[1])
        //     .to.be.an('object')
        //     .that.includes({product_name: 'Coke', department_name: 'Sugars', price: 3.99, stock_quantity: 10});
  
        //   expect(responseBody[2])
        //   .to.be.an('object')
        //   .that.includes({ username: 'Chan', password: 'newPass' });
  
        //   expect(responseBody[3])
        //   .to.be.an('object')
        //   .that.includes({ username: 'Muhammad', password: 'password' });
  
          // The `done` function is used to end any asynchronous tests
         return done();
        });
      });
    });
  });