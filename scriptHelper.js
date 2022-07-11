// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   `
}
function validateInput(testInput) {   
        if (testInput==="") {
            return "Empty";
         }
   
        if (testInput===Number) {
            return "Is a Number";
         }
   
        if (isNaN(testInput)) {
            return "Is Not A Number";
        }    
   }
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotReturnValue = validateInput(pilot);
    let copilotReturnValue = validateInput(copilot);
    let fuelLevelValue = validateInput(fuelLevel);
    let cargoMassValue = validateInput(cargoMass);
    let listValue = document.getElementById("faultyItems");
    let launchStatusValue = document.getElementById("launchStatus");
    let pilotReadyCheck = false;
    let copilotReadyCheck = false;
    let fuelReadyCheck = false;
    let cargoReadyCheck = false;
    if(pilotReturnValue=== "Empty" || copilotReturnValue=== "Empty" || fuelLevelValue=== "Empty" || cargoMassValue=== "Empty"){
        listValue.style.visibility= "hidden";
        alert("Plese Enter All Fields");

    }
    if(pilotReturnValue ==="Is a Number"){
            listValue.style.visibility= "hidden";
            alert("Please Enter Valid Information for Pilot Name or CoPilot Name");

        } else {
            listValue.style.visibility = 'visible';
            pilotStatus.innerHTML = `${pilot} is ready!`;
            pilotReadyCheck = true;
        }
    if(copilotReturnValue ==="Is a Number"){
            listValue.style.visibility= "hidden";
            alert("Please Enter Valid Information for Pilot Name or CoPilot Name");
        } else {
            listValue.style.visibility = 'visible';
            copilotStatus.innerHTML = `${copilot} is ready!`;
            copilotReadyCheck = true;
        }
    if(fuelLevelValue ==="Is Not A Number"){
            listValue.style.visibility= "hidden";
            alert("Please Enter Valid Number");
        } else if(fuelLevel <=10000){
                listValue.style.visibility = "visible";
                fuelStatus.innerHTML = "Not enough fuel for the journey.";
                launchStatusValue.style.color = "red";
                launchStatusValue.innerHTML ="Shuttle not ready for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            fuelReadyCheck = true;
        }
    if(cargoMassValue ==="Is Not A Number"){
            listValue.style.visibility= "hidden";
            alert("Please Enter Valid Number");
        } else if(cargoMass >=10000){
            listValue.style.visibility = "visible";
            cargoStatus.innerHTML = "too much mass for the shuttle to take off"; 
            launchStatusValue.style.color = "red";
            launchStatusValue.innerHTML ="Shuttle not ready for launch";
        } else{
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
           cargoReadyCheck = true;
        }
    if(pilotReadyCheck===true && copilotReadyCheck===true && fuelReadyCheck===true && cargoReadyCheck===true){
        launchStatusValue.style.color = "green";
        launchStatusValue.innerHTML ="Shuttle is ready for launch";
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     formSubmission: formSubmission,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch
//  };
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
