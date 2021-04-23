QUnit.config.autostart = false;

sap.ui.define([
	"sap/ui/test/Opa5",
    "demo/booksodatav2/test/integration/pages/Common",
	"sap/suite/ui/generic/template/integration/testLibrary/ListReport/pages/ListReport",
	"sap/suite/ui/generic/template/integration/testLibrary/ObjectPage/pages/ObjectPage",
	"demo/booksodatav2/test/integration/ListTest"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "demo.booksodatav2.view",
		testLibs: {
			fioriElementsTestLibrary: {
				Common: {
					appId: "demo.booksodatav2",
					entitySet: "Books"
				}
			}
		}
	});
});