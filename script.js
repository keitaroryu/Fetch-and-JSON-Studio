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
                    for(j=0; j<sortedAstronautArray.length; j++){
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

            console.log(sortedByHoursAstronautArray);


        });
    });
});