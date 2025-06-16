
const BaseController = require('../System/BaseController');
const TestModel = require('../Models/TestModel');

class TestController extends BaseController {
  constructor() {
    super();
    this.testmodel = new TestModel();
  }

  exampleMethod(req, res) {
    res.send('Example method in TestController');
  }
}

module.exports = TestController;
