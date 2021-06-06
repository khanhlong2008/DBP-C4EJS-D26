let congbtn = document.getElementById('Cong')
let trubtn = document.getElementById('Tru')
let dspPrg = document.getElementById('dsp')

function update(result){
    let value = dspPrg.innerHTML
    value = parseInt(value)
    value = value + result
    dspPrg.innerHTML = value
}

congbtn.addEventListener("click",() => update(1));
trubtn.addEventListener("click",()=> update(-1));