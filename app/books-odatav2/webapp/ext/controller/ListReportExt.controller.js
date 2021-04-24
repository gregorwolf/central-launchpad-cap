sap.ui.controller("demo.booksodatav2.ext.controller.ListReportExt", {

	onInitSmartFilterBarExtension: function (oEvent) {
		var sUrl = this.getView().getModel().aBindings[0].oModel.sServiceUrl + "/Books";
        $.ajax({
            type: "GET",
            dataType: "json",
            url: sUrl,
            success: function (oData) {
                // This works
                console.log("Response OK")
            },
            error: function (oError) {
                // Returns error
                console.log("Error")
            }
        });
	}
});