let like_butt=document.getElementsByClassName("like_butt")

let plus_btn=document.getElementsByClassName("plus-btn")
let minus_btn=document.getElementsByClassName("minus-btn")
let Quant=document.getElementsByClassName("Quant")
let prices=[1379,176.00,500.00]
let finalPrice=document.getElementById("finalPrice")
let delete_butt=document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")

for (let index = 0; index < like_butt.length; index++) {
    // Like button
    like_butt[index].addEventListener("click",function(){
        if(like_butt[index].style.color==="red"){
            like_butt[index].style.color="black"
        }
        else{
            like_butt[index].style.color="red"
        }
    })

    // Plus button

    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        finalPrice.value=Number(finalPrice.value)+prices[index]
    })

    // Minus button
    minus_btn[index].addEventListener("click",function(){
        if(Quant[index].value!=="0"){
            Quant[index].value=Number(Quant[index].value)-1
            finalPrice.value=Number(finalPrice.value)-prices[index]
        }
    })
    
    // Delete button
    delete_butt[index].addEventListener("click",function(){
        finalPrice.value=Number(finalPrice.value)-(prices[index]*Number(Quant[index].value))
        Item[index].style.display="none"
        
    })

}
