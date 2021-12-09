var mongoose = require('mongoose');

var EmployeeSchema =  new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   
});
// Export Contact model
var Employee = mongoose.model('employee', EmployeeSchema)
module.exports = Employee
module.exports.get = function (callback, limit) {
    Employee.find(callback).limit(limit);
}