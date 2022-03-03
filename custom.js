

 function productChange(product,increase,price){
    let input =  document.getElementById(product+'-count')
    const count = parseInt(input.value);
    let countNum = count;
    if(increase == true){
        countNum = count + 1;
    }if (increase == false && count>1) {
        countNum = count - 1;
    }
    document.getElementById(product + '-count').value = countNum;
    const total = countNum * price;
    document.getElementById(product+'-total').innerText = "$" + total;
    totalCalculator();
 }
 



function totalCalculator(){ 
const totalPhone = inputValue('phone');
const totalCase = inputValue('case');

const totalPrice = totalPhone * 1219 + totalCase * 59;
const total = document.getElementById("total-price").innerText = "$" + totalPrice;

const tax = Math.round(totalPrice * 0.1);
document.getElementById("total-tax").innerText = "$" + tax;
const grandTotal = totalPrice + tax;
document.getElementById("grand-total").innerText = "$" + grandTotal;

}


function inputValue(product){
    const productInput = document.getElementById(product + '-count');
    const total= parseInt(productInput.value);
    return total;
}











// kire masud

// function productChange(increase){
//     const input = document.getElementById("case-count");
//     const countNum = parseInt(input.value);
//      let newCountNum = countNum;
//     if(increase == true){
//         newCountNum = countNum + 1;
//     }if(increase == false && countNum > 1){
//         newCountNum = countNum - 1;
//     }
//     input.value = newCountNum;
//     const caseTotal = newCountNum * 59;
//      document.getElementById("case-total").innerText = "$" + caseTotal; 
// }









// document.getElementById("phone-icrease").addEventListener("click" , function(){
//    const input =  document.getElementById("phone-count")
//    const count = parseInt(input.value);
//    const countNum = count + 1;
//    input.value = countNum;
//    const totalPrice = countNum * 1219; 
//    document.getElementById("total-price").innerText = "$" + totalPrice;

// });


// document.getElementById("phone-decrease").addEventListener("click", function(){
//     const input = document.getElementById("phone-count");
//     const count = parseInt(input.value);
//     const countNum = count - 1;
//     input.value = countNum;
//     const totalPrice = countNum * 1219;
//     document.getElementById("total-price").innerText = "$" + totalPrice;
    
// });






//     document.getElementById("case-increse").addEventListener("click",function(){
//     const input = document.getElementById("case-count");
//     const countNum = parseInt(input.value);
//     const newCountNum = countNum + 1;
//     input.value = newCountNum;
//     const caseTotal = newCountNum * 59;
//      document.getElementById("case-total").innerText = "$" + caseTotal; 
// });


// document.getElementById("case-decrese").addEventListener("click",function(){
//     const input = document.getElementById("case-count");
//     const countNum = parseInt(input.value);
//     const newCountNum = countNum - 1;
//     input.value = newCountNum;
//     const caseTotal = newCountNum * 59;
//      document.getElementById("case-total").innerText = "$" + caseTotal; 
// });




