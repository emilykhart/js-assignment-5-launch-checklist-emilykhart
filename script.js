

window.addEventListener("load", function() {
    myFetch();
    // const planets = myFetch();
    // pickPlanet(planets);

           let listedPlanets;
           // Set listedPlanetsResponse equal to the value returned by calling myFetch()
           let listedPlanetsResponse = myFetch();
           listedPlanetsResponse.then(function (result) {
               listedPlanets = result;
            //    console.log(listedPlanets);
           }).then(function () {
    //    console.log(listedPlanets);
       luckyPlanet = pickPlanet(listedPlanets);
       console.log(luckyPlanet);
       
    const name = luckyPlanet.name;
    const diameter = luckyPlanet.diameter;
    const star = luckyPlanet.star;
    const distance = luckyPlanet.distance;
    const moons = luckyPlanet.moons;
    const imageUrl = luckyPlanet.image;
    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })

    // const name = luckyPlanet.name;
    // const diameter = luckyPlanet.diameter;
    // const star = luckyPlanet.star;
    // const distance = luckyPlanet.distance;
    // const moons = luckyPlanet.moons;
    // const imageUrl = luckyPlanet.image;
    // addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
        document.addEventListener("submit", function (event){
        event.preventDefault();

        const list = document.getElementById("faultyItems").value;
        const pilot = document.querySelector("[name=pilotName]").value;
        const copilot = document.querySelector("[name=copilotName]").value;
        const fuelLevel = document.querySelector("[name=fuelLevel]").value;
        const cargoMass = document.querySelector("[name=cargoMass]").value;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
});



