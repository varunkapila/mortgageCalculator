$( document ).ready(function() {
   $( "button" ).click(function() {
var interestRate = $('#interest').val();   
var loanTerm = $('#term').val();
var loanBalance = $('#balance').val();
var period = $('#period option:selected ').val();







   // monthly interest rate       
    var monthlyInterestRate = (interestRate / 100) / period;          

    // number of payments
  var numberOfPayments = loanTerm * period;

    // compounded interest rate
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

    // interest quotient
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
   var monthlyPayment = loanBalance * interestQuotient;
$("#outputText").html("Your monthly payment will be"+ monthlyPayment); 
   


});    
});