/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices/controller/MainVew.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainVew Controller");

	QUnit.test("I should test the MainVew controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
