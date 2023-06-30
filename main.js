var bill = document.getElementById("bill")
var people = document.getElementById("people")

var total = document.getElementById("total")
var tip = document.getElementById("tip")

var tips = document.querySelectorAll('[name="rad"]')
var labels = document.querySelectorAll('section label')
var porcent = [0.05,0.10,0.15,0.25,0.5]
var cust = document.getElementById("custom")

var valor = 0
var valortip = 0

function custom(){
    valortip = ((bill.value*(cust.value*0.01))/people.value)
    valor = bill.value/people.value
    console.log(valortip)
    escrever()
}

function calcular(){
    valor = bill.value/people.value

    for(i = 0; i < 5; i++){
        if(tips[i].checked == true){
            valortip = valor*porcent[i]
            labels[i].style.background = 'hsl(172, 67%, 45%)'
            labels[i].style.color = 'hsl(183, 100%, 15%)'
            labels[i].style.fontWeight = '600'
        }else{
            labels[i].style.background = 'hsl(183, 100%, 15%)'
            labels[i].style.color = 'white'
            labels[i].style.fontWeight = '500'
        }
    }
    
    valor = valor+valortip
    escrever()
}

function resetar(){
    bill.value = 0
    people.value = 1
    cust.value = ''
    calcular()
}

function escrever(){
    tip.innerHTML = valortip.toFixed(2)
    total.innerHTML = valor.toFixed(2)
}
