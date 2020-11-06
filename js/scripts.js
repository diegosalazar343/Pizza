//Business Logic
function Account(name, order, total) {
  this.name = name;
  this.order = [];
  this.total = 0;
}

Account.prototype.pizzaOrder = function determineAmount(input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14, input15, input16, input17, input18) {
  const valTotal = input1 + input2 + input3 + input4 + input5
    + input6 + input7 + input8 + input9 + input10 + input11 + input12 + input13 + input14 + input15 + input16 + input17 + input18;
  if (valTotal <= 6){
    this.total = "$7";
  } else if (valTotal <= 8){
    this.total = "$10";
  } else if (valTotal <= 13){
    this.total = "$15";
  } else {
    this.total = "$20";
  }
  return this.total;
}

//Users Logic
$(document).ready(function(){
  $("form#account").submit(function(event) {
    event.preventDefault();

    const name= $("input#name").val();
    $("#name-id").show()
    let newAccount = new Account(name);
  })
  $("form#pizza").submit(function(event){
    event.preventDefault();

    let
  })
})
