const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
 btn.addEventListener('click', function(e){

    const name = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
     const categroy = e.target.parentNode.childNodes[5].childNodes[1].innerText;

     const playerSection = document.getElementById('player-section');
     playerSection.classList.add('flex')
     playerSection.classList.add('flex-col')
     playerSection.classList.add('gap-3')
 
    const newDiv = document.createElement('div');
    newDiv.classList.add('flex');
  

      newDiv.classList.add('justify-between');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = categroy;
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
    playerSection.appendChild(newDiv)
    updateValue(price);
    grandTotal()

    

const firstcartCount = getAllValue('cart');
if(firstcartCount + 1 > 6){
    alert('limit ses');
    return
}



    // update budget
const budget = getAllValue('budget');
document.getElementById('budget').innerText = budget - parseInt(price);




const cartCount  = getAllValue('cart');
document.getElementById('cart').innerText = cartCount +1;

const lefts = getAllValue('left');
document.getElementById('left').innerText = lefts -1

 })
}

function updateValue (value){
      const totalCost = getAllValue('total-cost');
      const sum = totalCost + parseInt(value)
      document.getElementById('total-cost').innerText = sum
}









function grandTotal (status){
    const totalCost = getAllValue('total-cost');
    if(status== undefined ){
   
        document.getElementById('grand-total').innerText = totalCost
    }else{
const couponCode = document.getElementById('coupon-code').value;
if(couponCode == 'love420'){
const discount = totalCost * 0.2;
document.getElementById('grand-total').innerText = totalCost -discount;
}else{
    alert('please vaild coupon')
}
    }

}







function getAllValue(element){
    const price = document.getElementById(element).innerText;
    const converValue = parseInt(price);
return converValue
}







// function checkPerametar (status){
// if(status == undefined){
//     console.log('first')
// }else{
//     console.log('second')
// }
// }
// checkPerametar()