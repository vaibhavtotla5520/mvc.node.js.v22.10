
const BaseModel = require('../System/BaseModel');

class TestModel extends BaseModel {
  constructor() {
    super();
  }

  exampleQuery() {
    return this.select('SELECT * FROM example_table', []);
  }
}

module.exports = TestModel;
