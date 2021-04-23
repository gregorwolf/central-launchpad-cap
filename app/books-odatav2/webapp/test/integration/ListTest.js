sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/opaQunit"
], function(Opa5, opaTest) {
	"use strict";

	opaTest("I can load the List Report and display all existing Applications", function(Given, When, Then) {
		var isStarted = Given.iStartMyApp();
		isStarted.then(function(){
        
        When.onTheGenericListReport
			.iExecuteTheSearch()
			.and
			.iLookAtTheScreen();

		Then.onTheGenericListReport
			.theResultListIsVisible();
		})

	});

	opaTest("I can navigate to the Object Page; its title and some exemplary fields are correctly displayed", function(Given, When, Then) {
		When.onTheGenericListReport
			.iNavigateFromListItemByLineNo(0);

        When.onTheGenericObjectPage
            .iNavigateBack();
            
        When.onTheGenericListReport
			.iLookAtTheScreen().and
        	.iTeardownMyApp();
	});
});
