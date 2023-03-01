
	
	function copyFunction() {
		// Get the text field
		var copyText = document.getElementById("pid").value;
		var copyQuote = document.getElementById("quote").value;
		//console.log(copyQuote.length);
		if(copyQuote.length === 0){
			var query = `select id, name, pse__Milestone_Cost__c, ds_Labor_Rate__c, ds_Non_Labor_Cost__c, pse__Planned_Hours__c, ds_Travel_Hours__c, DS_Labor_Cost__c, ds_Travel_Cost__c,  ds_Travel_Expense__c from pse__Milestone__c 
				where  Oracle_Project_ID__c = '${copyText}'
				and RecordTypeView__c = 'Service Feature'`
				
		}
		else{
			var query = `select id, name, pse__Milestone_Cost__c, ds_Labor_Rate__c, ds_Non_Labor_Cost__c, pse__Planned_Hours__c, ds_Travel_Hours__c, DS_Labor_Cost__c, ds_Travel_Cost__c,  ds_Travel_Expense__c from pse__Milestone__c 
			where  Oracle_Project_ID__c = '${copyText}'
			and RecordTypeView__c = 'Service Feature'
			and DS_Quote_Number__c = '${copyQuote}'`
		}
	    
		// Select the text field
		// copyText.select();
		// copyText.setSelectionRange(0, 99999); // For mobile devices
	  
		// Copy the text inside the text field
		navigator.clipboard.writeText(query);
		
		// Alert the copied text
		alert(`The Query is copied PID: ${copyText} Quote: ${copyQuote}, click ok: `);
	  }



function myFunction() {
	// var show = document.getElementByTagName("template")[0];
	// var clon = show.contentType.cloneNode(true);
	// document.body.appendChild(clon);

	var x = document.getElementById("fname").value;
	console.log(x)
	const products = JSON.parse(x);
    var laborCost  = 0
	var travelCost  = 0
	var expenseCost  = 0
	var amount  = 0

	
	   let placeholder = document.querySelector("#data-output");
	   let out = "";
	   for(let product of products){

		product.total_labor_cost_mn = product.ds_Labor_Rate__c * product.pse__Planned_Hours__c;
		
		product.total_travel_cost_mn = product.ds_Labor_Rate__c * product.ds_Travel_Hours__c;

		product.total_expenses_cost_mn = product.ds_Non_Labor_Cost__c + product.ds_Travel_Expense__c;
		
		laborCost += product.total_labor_cost_mn;
		travelCost += product.total_travel_cost_mn;
		expenseCost += product.total_expenses_cost_mn
		// console.log(laborCost);
	      out += `
	         <tr>
	            <td>${product.Id}</td>
	            <td>${product.Name}</td>
	            <td>${product.pse__Milestone_Cost__c}</td>
				<td>${product.ds_Labor_Rate__c}</td>
				<td>${product.ds_Non_Labor_Cost__c}</td>
	            <td>${product.pse__Planned_Hours__c}</td>
				<td>${product.ds_Travel_Hours__c}</td>
				<td>${product.ds_Travel_Expense__c}</td>
				<td>${product.total_labor_cost_mn}</td>
				<td>${product.total_travel_cost_mn}</td>
				<td>${product.total_expenses_cost_mn}</td>
	         </tr>
	      `;
	   }

	   amount = laborCost + travelCost;
	   totalCostBudget = amount + expenseCost;
	   let placeHolder5 = document.querySelector('#totalCostBudget');
	   placeHolder5.innerHTML = `Total Amount: ${totalCostBudget}`;
	   let placeHolder4 = document.querySelector('#amount');
	   placeHolder4.innerHTML = `Amount: ${amount}`;
	   let placeHolder1 = document.querySelector('#laborCost');
	   placeHolder1.innerHTML = `Labor Cost: ${laborCost}`;
	   let placeHolder2 = document.querySelector('#travelCost');
	   placeHolder2.innerHTML = `Travel Cost: ${travelCost}`;
	   let placeHolder3 = document.querySelector('#expenseCost');
	   placeHolder3.innerHTML = `Expense Amount: ${expenseCost}`;
	   placeholder.innerHTML = out;
	};
	
