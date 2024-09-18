function convertTemperature() {
    let temp = parseFloat(document.getElementById("temp").value);
    let fromUnit = document.getElementById("firstunit").value;
    let toUnit = document.getElementById("secondunit").value;
    let result;

    if (fromUnit === "C" && toUnit === "F") {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === "F" && toUnit === "C") {
        result = (temp - 32) * 5/9;
    } else {
        result = temp; // Same units
    }

    document.getElementById("res").value = result.toFixed(2);
}

function clearFields(){
    document.getElementById('temp').value="";
    document.getElementById('firstunit').value="C";
    document.getElementById('secondunit').value="C";
    document.getElementById('res').value="";

}