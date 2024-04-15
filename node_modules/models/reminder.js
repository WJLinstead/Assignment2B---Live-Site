const mongoose = require("mongoose");

const dataSchemaObj = {
    name: {type: String, require: true},
    month: {type: Date, require: true},
    day: {type: Date, require: true},
    year: {type: Date, require: true}
}

const mongooseSchema = mongoose.Schema(dataSchemaObj);
module.exports = mongoose.model("Reminder", mongooseSchema);