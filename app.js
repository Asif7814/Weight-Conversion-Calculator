let submitBtn = document.getElementById("submitBtn");
let weight, weightMeasurements, newWeight;

submitBtn.onclick = function () { 
    weight = Number(document.getElementById("weight").value);
    weightMeasurements = document.querySelector('input[type="radio"]:checked').value;

    newWeight;
    if (weightMeasurements == "kg") {
        newWeight = Math.round(weight * 2.205);
        document.getElementById("result").textContent = `${weight}kg = ${newWeight}lbs`;
    } else { 
        newWeight = Math.round(weight / 2.205);
        document.getElementById("result").textContent = `${weight}lbs = ${newWeight}kg`;
    }
}