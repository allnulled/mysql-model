const fs = require("fs");
const { expect } = require("chai");
const { ModelGenerator } = require(__dirname + "/../src/index.js");

describe("ModelGenerator class", function() {

	it("works", function(done) {
		ModelGenerator.generateFor({
			schema: {
				user: "test",
				password: "test",
				host: "127.0.0.1",
				port: 3306,
				database: "database2",
				configurations: false,
				extensions: {
					general: {},
					perModel: {},
					perColumn: {},
				},
				asJson: false,
				output: __dirname + "/api-1",
			},
			modelGenerator: {
				sources: {
					//
				},
				extensions: {
					general: {},
					perModel: {},
					perColumn: {},
				}
			}
		}).then(() => {

		});
	});

});