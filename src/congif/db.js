
const mongoose = require("mongoose");

const connect = async () => {
	client = await mongoose.connect("mongodb+srv://glamour:glamour@cluster0.jsjxrad.mongodb.net/glamour");
	return client;
};

module.exports = connect;

