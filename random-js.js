function randomNum(min=0,max=100,round=10){
    document.getElementById("info").innerHTML = "min = " + min + " " + "max = " + max + " "+ "round = " + round;
    for(i = 1;i <= round;i++){
        let rand = Math.floor(Math.random() * max) + 1;
        if(rand < min){
            rand = min
        }

        if(rand > max){
            rand = max
        }
        if(rand >= 300){
            console.log("stop ! got number : " + rand);
            break;
        }

        document.write(rand+ "<br>")
    }
}