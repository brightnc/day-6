// function grade(v){
    
//     if(v >= 80){
//         document.getElementById("grade").innerHTML = "grade : A"
//     } else if (v >= 50){
//          document.getElementById("grade").innerHTML = "grade : B"
//     }else{
//          document.getElementById("grade").innerHTML = "grade : C"
//     }
// }

function gradeSwitch(v){
    switch (true) {
        case v >= 80:
            console.log("case 1");
             document.getElementById("grade").innerHTML = "grade : A"
            break;
        case v >= 50:
            console.log("case 2");
            document.getElementById("grade").innerHTML = "grade : B"
            break;
        default:
            console.log("default");
            document.getElementById("grade").innerHTML = "grade : C"
            break;
    }
}