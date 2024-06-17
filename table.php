<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="table-js.js"></script>
</head>

<body>
    <form action="">
        <div>
            <label for="input_number">Number</label>
            <input type="text" name="input_number" id="input_number">
        </div>
        <div>
            <label for="input_min">Min</label>
            <input type="text" name="input_min" id="input_min">
        </div>
        <div>
            <label for="input_max">Max</label>
            <input type="text" name="input_max" id="input_max">
        </div>
        <button type="button" onclick="handleSubmit(e);">submit</button>
    </form>

    <div class="day6">
        <table id="myTable">
            <tr>
                <th>No</th>
                <th>Number</th>
            </tr>

        </table>
    </div>
</body>

</html>