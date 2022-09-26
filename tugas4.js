var adit = 170;
var rizki = 174;
var fahmi = 168;

if (rizki > adit) {
    if (rizki > fahmi) {
        console.log("rizki 1");
    }else { 
        console.log("rizki 2");
    }
} else {
    if (rizki < fahmi) {
        console.log("rizki 3");
    }
}
if (adit > fahmi) {
    if (adit > rizki) {
        console.log("adit 1");
    }else { 
        console.log("adit 2");
    }
} else {
    if (adit < fahmi) {
        console.log("adit 3");
    }
}
if (fahmi > adit) {
    if (fahmi > rizki) {
        console.log("fahmi 1");
    }else { 
        console.log("fahmi 2");
    }
} else {
    if (fahmi < adit) {
        console.log("fahmi 3");
    }
}