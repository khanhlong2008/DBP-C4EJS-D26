let start_btn = document.querySelector("#Start");
let stop_btn = document.querySelector("#Stop");
let time = document.querySelector("#txt");
let dspPrg = document.querySelector("#display");

function change() {
  let remain = parseInt(dspPrg.innerHTML);
  dspPrg.innerHTML = remain + value;
}
function tick() {
  change(-1);
}
start_btn.addEventListener("click",()=>{
    dspPrg.innerHTML = time.value
    setInterval(tick,1000)
    //1000 minisecond = 1 giay 

})