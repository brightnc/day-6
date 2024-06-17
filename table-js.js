function handleSubmit(e){
    e.preventDefault();
    const number_input = document.getElementById("input_number").value
    const min_input =  document.getElementById("input_min").value
    const max_input =  document.getElementById("input_max").value

    if(number_input == "" || min_input == "" || max_input == ""){
        alert("input can not be empty");
        return
    }

    if(number_input != 5){
        alert("number must be 5!")
        return
    }

    if(min_input > 20 || min_input < 10){
        alert("min number is between 10-20.")
        return
    }
    
    if(max_input > 100){
        alert("max number must not exceed 100.")
        return
    }

    const arr = randomNumArr(min_input,max_input,number_input)
    const t = document.getElementById("myTable")
    for(i=0; i < arr.length;i++){
        const tr = document.createElement("tr")
        tr.setAttribute("id", "MyTr");
        t.appendChild(tr)
        const td = document.createElement("TD"); 
        const num = document.createTextNode(arr[0]); 
        td.appendChild(num); 
        document.getElementById("MyTr").appendChild(td);
    }

}

function randomNumArr(min=10,max=100,round=5){
    const resultArr = [];
    for(i = 1;i <= round;i++){
        let rand = Math.floor(Math.random() * max) + 1;
        if(rand < min){
            rand = min
        }

        if(rand > max){
            rand = max
        }

        resultArr.push(rand)
    }

    return resultArr
}