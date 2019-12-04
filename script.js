// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            
            function sortAstronautByHoursInSpace(JSON){
                let astronautsArray = json;
                let sortedAstronautArray = [];
                let inserted;
                for(let i=0; i<astronautsArray.length; i++){
                    inserted = false;
                    for(let j=0; j<sortedAstronautArray.length; j++){
                        if(astronautsArray[i].hoursInSpace > sortedAstronautArray[j].hoursInSpace){
                            inserted = true;
                            sortedAstronautArray.splice(j, 0, astronautsArray[i]);
                            break;
                        }
                    }
                    if(!inserted){
                        sortedAstronautArray.push(astronautsArray[i]);
                    }
                }
                return sortedAstronautArray;
            }

            let sortedByHoursAstronautArray = sortAstronautByHoursInSpace(json);
            let divContainer = document.getElementById("container");
            let astronautBio ="";

            for(let i=0; i<sortedByHoursAstronautArray.length; i++){                
                astronautBio = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${sortedByHoursAstronautArray[i].firstName} ${sortedByHoursAstronautArray[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${sortedByHoursAstronautArray[i].hoursInSpace}</li>
                            <li class="activeStatus${sortedByHoursAstronautArray[i].active}">Active: ${sortedByHoursAstronautArray[i].active}</li>
                            <li>Skills: ${sortedByHoursAstronautArray[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="images/${sortedByHoursAstronautArray[i].picture}>
                </div>
                `;
                divContainer.innerHTML+= astronautBio;
            }

            divContainer.innerHTML += `
            <h4>Number of Astronauts: ${sortedByHoursAstronautArray.length}</h4>
            `;
            
        });
    });
});