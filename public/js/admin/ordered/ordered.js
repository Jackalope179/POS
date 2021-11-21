$('#admin-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    console.log(button)
    document.getElementById('paymentID').value = button.data('id')
    console.log("test: ", document.getElementById('paymentID').value)
    RenderFoodPayment();
});


let foodPayments = [];
function getAllFoodPayment() {
  let foodList = $(".food-payment").toArray();
  foodList.forEach((foodItem) => {
    let name = $(foodItem).find(".food-name").attr("value");
    let amount = $(foodItem).find(".food-amount").attr("value");
    let price = $(foodItem).find(".food-Price").attr("value");
    let paymentID = $(foodItem).find(".food-paymentid").attr("value");

    foodPayments.push({
      name: name,
      amount: amount,
      paymentID: paymentID,
      price: price,
    });
  });
  console.log("test: ", foodPayments);
}
getAllFoodPayment();



function RenderFoodPayment() {
    var temp = ``;
    let foodPaymentModal = document.querySelector(".order-detail");
    for (var i = 0; i < foodPayments.length; i++) {
      if (Number(foodPayments[i].paymentID) == Number(document.getElementById('paymentID').value)) {
          temp += `
                            <tr>
                            <td>${foodPayments[i].name}</td>
                            <td>${foodPayments[i].amount}</td>
                            <td>${NumberWithCommas (Number(foodPayments[i].price))}</td>
                            </tr>
                  `;
      }
      else{ console.log(foodPayments[i].paymentID)}
    }
    foodPaymentModal.innerHTML = temp;
  }

  function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
  }
// showDetail()