// perchair wood need = 3cft
// pertable wood nee = 10cft
// perbed            =50cft

function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {
    // per piece wood
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // wood calculation
    const chairWoodQnty = chairQuantity * perChairWood;
    const tableWoodQnty = tableQuantity * perTableWood;
    const bedWoodQnty = bedQuantity * perBedWood;

    // total wood qnty
    const totalWoodQnty = chairWoodQnty + tableWoodQnty + bedWoodQnty;
    return totalWoodQnty;
}

var woodOrder = woodCalculation(6, 1, 2);
console.log(woodOrder);