function handleSubmit(event) {
  event.preventDefault();
  const number_input = document.getElementById("input_number").value;
  const min_input = document.getElementById("input_min").value;
  const max_input = document.getElementById("input_max").value;

  if (number_input == "" || min_input == "" || max_input == "") {
    alert("input can not be empty");
    return;
  }

  if (number_input != 5) {
    alert("number must be 5!");
    return;
  }

  if (min_input > 20 || min_input < 10) {
    alert("min number is between 10-20.");
    return;
  }

  if (max_input > 100) {
    alert("max number must not exceed 100.");
    return;
  }

  const arr = randomNumArr(min_input, max_input, number_input);
  const resultContainer = document.getElementById("day6");
  const existingTable = document.getElementById("resultTable");

  // Clear previous table
  if (existingTable) {
    resultContainer.removeChild(existingTable);
  }

  // Create new table
  const table = document.createElement("table");
  table.setAttribute("id", "resultTable");
  table.classList.add("w-1/2", "bg-white", "border", "text-center", "mx-auto");
  resultContainer.appendChild(table);

  // Create table header
  const trHead = document.createElement("tr");
  trHead.classList.add("bg-gray-800", "text-white");
  table.appendChild(trHead);

  const thNo = document.createElement("th");
  const thNum = document.createElement("th");

  thNo.textContent = "No";
  thNum.textContent = "Number";
  trHead.appendChild(thNo);
  trHead.appendChild(thNum);
  for (i = 0; i < arr.length; i++) {
    let count = i + 1;
    let trIdName = "tr" + count;
    let tdNoIdName = "tdNo" + count;
    let tdNumIdName = "tdNum" + count;

    const tr = document.createElement("tr");
    tr.setAttribute("id", trIdName);
    table.appendChild(tr);

    const tdNo = document.createElement("td");
    tdNo.setAttribute("id", tdNoIdName);
    tdNo.classList.add("border", "px-4", "py-2");
    const tdNum = document.createElement("td");
    tdNum.setAttribute("id", tdNumIdName);
    tdNum.classList.add("border", "px-4", "py-2");

    const num = document.createTextNode(arr[i]);
    const no = document.createTextNode(count);
    tdNo.appendChild(no);
    tdNum.appendChild(num);
    document.getElementById(trIdName).appendChild(tdNo);
    document.getElementById(trIdName).appendChild(tdNum);
  }
  return;
}

function randomNumArr(min = 10, max = 100, round = 5) {
  const resultArr = [];
  for (i = 1; i <= round; i++) {
    let rand = Math.floor(Math.random() * max) + 1;
    if (rand < min) {
      rand = min;
    }

    if (rand > max) {
      rand = max;
    }

    resultArr.push(rand);
  }

  return resultArr;
}
