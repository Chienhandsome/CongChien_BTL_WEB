var plusBtn = document.querySelectorAll(".plus-btn");
plusBtn.forEach((item)=>{
    item.addEventListener("click",()=>{
        var itemEl = item.parentElement;
        var input = itemEl.querySelector("#amount");
        var amount = input.value;
        amount++
        input.value = amount
    })
})

var minusBtn = document.querySelectorAll(".minus-btn");
minusBtn.forEach((item)=>{
    item.addEventListener("click",()=>{
        var itemEl = item.parentElement;
        var input = itemEl.querySelector("#amount");
        var amount = input.value;
        if(amount>1)
        amount--
        input.value = amount
    })
})
var inputValue = document.querySelectorAll("#amount");
inputValue.forEach((inputValue)=>{
    inputValue.addEventListener("input",()=>{
        amount = inputValue.value;
        amount = parseInt(amount);
        amount = (isNaN(amount)||inputValue.value==0)?1:amount;
        inputValue.value = amount
    })
})

