sap.ui.define([], () => {
	"use strict";

	return {


		statusText(sStatus) { 
            var value;

			switch (sStatus) {
				case "A":
                    value = "A status"
					return value;
				case "B":
                    value = "B status"
					return value;
				case "C":
                    value = "C status"
					return value;
				default:
					return sStatus;
			}

		},
		statusT(sStatus,para2) { 
            var value;

			switch (sStatus) {
				case "A":
                    if(para2>10){return "egine";}
				case "B":
                    value = "e status"
					return value;
				case "C":
                    value = "f status"
					return value;
				default:
					return sStatus;
			}

		}



	};
});