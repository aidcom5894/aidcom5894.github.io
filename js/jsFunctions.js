// Function to display date and time stars here
function showDateTime()
{
	
}

// Function to display date and time ends here



// Function for displaying the result starts here
function displayResult()
{
	var ResultShow = document.getElementById("ResultDisplay");

	var principalAmount = document.getElementById('principal_amount').value;
	var interestTiming = document.getElementById('time').value;
	var rateInterest = document.getElementById('newAmount').innerHTML;
	
	if(ResultShow.style.display === "none")
	{
		ResultShow.style.display = "block";
	}
	else
	{
		ResultShow.style.display = "none";
	}

	document.getElementById('simpleInterestResult').innerHTML = principalAmount*interestTiming*rateInterest;

}
// Function for displaying the result ends here



// Function for resetting the derived result starts here
function resetResult()
{
	location.reload();
}
// Function for resetting the derived result ends here



// Function for calculating rate of interest starts here
function calculateInterest()
{
	var fixedAmount = 100;
	var newer = document.getElementById('rateofinterest').value;

	document.getElementById('newAmount').innerHTML = newer/fixedAmount;
}
// Function for calculating rate of interest ends here