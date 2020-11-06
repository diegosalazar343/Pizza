//Business Logic
function Account(name, order, total) {
  this.name = name;
  this.order = [];
  this.total = 0;
}


//Users Logic
$(document).ready(function(){
  $("form#account").submit(functin(event) {
    event.preventDefault();

    const name= $("input#name").val();
    $("#name-id").show()

  })
})
