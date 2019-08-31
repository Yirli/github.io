

	var selectedTextFields=[];
	var stars=["star1","star2","star3","star4","star5","star6","star7","star8","star9","star10"];
	var amount = 0; //cantidad de dinero por convertir
	var amountTextField=0; //el text field que tiene la cantidad
	var dolarExchange = [0.00178117, 1,1.22142, 0.000290399,0.139732,1.11042,0.0501301, 0.0180820,0.240699, 1.02186]

	window.onload = function() {

	    var inputs = document.getElementsByTagName("input"); 

	    for (var i = 0; i < inputs.length; i++) {
	        inputs[i].disabled = true;	
		}

		 for(var i = 0; i<stars.length;i++)
		 	document.getElementById(stars[i]).style.visibility="hidden";

}


	function loadstar(idDiv,textId) {
		document.getElementById(textId).disabled = false;
    	document.getElementById(idDiv).style.visibility="visible";
    	fillSelectedTextList(textId);
	}

	function fillSelectedTextList(textId){
		selectedTextFields[selectedTextFields.length] = textId;
	}
	

	function validateAmount(textValue, idText){
		if (!/^(([0-9]*[.])?[0-9])*$/.test(textValue)) 
      		alert("El valor " + textValue + " no es un número");
      	else{
      		amount=textValue;
      		amountTextField = idText;
      		eraseOtherCells(idText);
      		removeAmountTextField(idText);
      		}
      	}

    function removeAmountTextField(idText){
    	for( var i = 0; i < selectedTextFields.length; i++){ 
		   if ( selectedTextFields[i] == idText) {
		     selectedTextFields.splice(i, 1); 
		   }
		}

    }

	function eraseOtherCells(id){

		for (var i = 1; i <= 10; i++) {
			document.getElementById(i).disabled = true;
			if(i!=id)
				document.getElementById(i).value="";
		}
		
	}

	function cleanTextFields(){
		for (var i = 1; i <= 10; i++) {
			document.getElementById(i).value="";
			document.getElementById(i).disabled=false;
		}
		cleanStarts();
		
	}

	function cleanStarts(){
		for(var i=0;i<stars.length;i++){
			document.getElementById(stars[i]).style.visibility="hidden";
		}
	}


	function conversion(){
		var convertedAmount=0;
		var dolars=amount*dolarExchange[amountTextField-1];

		for(var i = 0; i<selectedTextFields.length; i++){
			convertedAmount = dolars/dolarExchange[selectedTextFields[i]-1];
			document.getElementById(selectedTextFields[i]).value=convertedAmount.toFixed(3);
		}
	}


	