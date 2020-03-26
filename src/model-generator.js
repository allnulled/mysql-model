const path = require("path");
const LifecycleIterator = require("lifecycle-iterator");
const MySQLSchema = require("mysql-schema");

class ModelGenerator {

	static create(...args) {
		return new this(...args);
	}

	static get DEFAULT_OPTIONS() {
		return {
			configurations: {

			},
			extensions: {},
			options: {
				outputDirectory: path.resolve(process.cwd(), "model-generator"),
			}
		};
	}

	constructor(options = {}) {
		Object.assign(this, this.constructor.DEFAULT_OPTIONS, options);
	}

	generateFor(options = {}, configurations = {}, extensions = {}) {
		return LifecycleIterator.create({
			$scope: this,
			$cycle: [
				"onFormatInput",
				"onGenerateSchema",
				"onGenerateModelClass",
				"onGenerateModels"
			]
		}).start();
	}

	onFormatInput() {
		Object.assign(this.options, this.constructor.DEFAULT_OPTIONS.options, options);
		Object.assign(this.configurations, this.constructor.DEFAULT_OPTIONS.configurations, configurations);
		Object.assign(this.extensions, this.constructor.DEFAULT_OPTIONS.extensions, extensions);
	}

	onGenerateSchema() {
		return MySQLSchema.getSchema({
			...settings.options,
			configurations: settings.configurations,
			extensions: settings.extensions
		});
	}

	onGenerateModelClass(schema) {
		console.log(schema);
		return schema;
	}

	onGenerateModels(settings) {
		console.log(schema);
		return schema;
	}

}

module.exports = ModelGenerator;