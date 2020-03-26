const { expect } = require("chai");
const { ModelGenerator } = require(__dirname + "/../src/index.js");

describe("ModelGenerator class", function() {

	it("works", function(done) {
		ModelGenerator.generateFor({
			credentials: {
				user: "test",
				password: "test",
				database: "database2",
				host: "127.0.0.1",
				port: 3306,
			},
			configurations: {

			},
			extensions: {
				
			}
		})
	});

});