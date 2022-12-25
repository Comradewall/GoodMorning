
function train_table(date) {

    //R2067 Values to be adjusted to match current schedule.

    let summer_trains = ["R2074","R-E2012","IR1521","R2437","R2067"];
    let winter_trains = ["R2074","R-E2012","R2437","R-E2521","R2067"];
    let summer_timetable = ["6:23","6:44","9:00","9:18","14:16","13:56","14:40","14:15","16:40","16:15"];
    let winter_timetable = ["6:25","6:50","8:51","9:10","14:00","13:35","14:38","14:20","16:40","16:15"];

    let trains = [];
    let timetable = [];

    if (date === 12 || date === 1 || date === 2){
        trains = winter_trains;
        timetable = winter_timetable;
    }
    else {
        trains = summer_trains;
        timetable = summer_timetable;
    }

    for(let i = 1; i<6; i++){

        let root = "train-cell";
        document.getElementById(root.concat(i.toString())).innerHTML = trains[i - 1];

    }

    for(let h = 1; h<11; h++){

        let rootT = "time";
        document.getElementById(rootT.concat(h.toString())).innerHTML = timetable[h - 1];

    }

}


