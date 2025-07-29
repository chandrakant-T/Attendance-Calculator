let TotalDays = document.getElementById("TotalDays")
let PresentDays = document.getElementById("PresentDays")
let resultText = document.querySelector("#result h3")
const submitbtn = document.getElementById("submit")
let calresult
let finalresult
submitbtn.addEventListener("click",()=>{
    calresult = (parseInt(PresentDays.value)/parseInt(TotalDays.value)) * 100;
    finalresult = calresult.toFixed(2);
    resultText.innerHTML = `Your Attendance is: <span class="resultspan">${calresult.toFixed(2)}%</span>`
})




