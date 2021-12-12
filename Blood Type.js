function canGiveBlood(donor,recipient){
    if (donor === "AB+" && (recipient === "AB+")){
        console.log("True");
    }
    else if (donor === "AB-" && (recipient === "AB-"||"AB+")){
        console.log("True");
    }
    else if (donor === "A+" && (recipient === "A+"||"AB+")){
        console.log("True");
    }
    else if (donor === "A-" && (recipient === "A-"||"A+"||"AB+"||"AB-")){
        console.log("True");
    }
    else if (donor === "B+" && (recipient === "B+"||"AB+")){
        console.log("True");
    }
    else if (donor === "B-" && (recipient === "B-"||"B+"||"AB+"||"AB-")){
        console.log("True");
    }
    else if (donor === "O+" && (recipient === "O+"||"A+"||"B+"||"AB+")){
        console.log("True");
    }
    else if (donor === "O-" && (receive === "AB+"||"AB-"||"A+"||"A-"||"B+"||"B-"||"O+"||"O-")){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

canGiveBlood("O+", "A+");