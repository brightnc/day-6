function handleSubmit(event){
    event.preventDefault();
    const numbet_input = document.getElementById("input_number").value
    const text_input =  document.getElementById("input_text").value
    const letterRegex = /^[A-Za-z]+$/;
    if(numbet_input == "" || text_input == ""){
        alert("input can not be empty")
        return
    }

    if(isNaN(numbet_input)){
        alert("Number : input must be a number")
        return
    }
    if(!letterRegex.test(text_input)){
        alert("Text : input must be a text")
        return
    }

    console.log("numbet_input : ",numbet_input);
    console.log("text_input : ",text_input);
}