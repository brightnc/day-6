<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="array-js.js"></script>
    <script>
        const arrOneResult = arrCutNumber(1)
        console.log("array 1 = ", arrOneResult);
        const arrTwoResult = arrCutNumber(2)
        console.log("array 2 = ", arrTwoResult);
        const newArr = arrOneResult.concat(arrTwoResult);
        console.log("combine array = ", newArr);
    </script>
</head>

<body>

</body>

</html>