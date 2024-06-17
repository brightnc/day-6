<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="table-js.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>

  <body>
    <div class="max-w-xs mx-auto my-10 border rounded">
      <form action="" class="px-8 pt-6 pb-8">
        <div class="mb-4">
          <label for="input_number" class="block mb-2">Number</label>
          <input
            type="text"
            name="input_number"
            id="input_number"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div class="mb-4">
          <label for="input_min" class="block mb-2">Min</label>
          <input
            type="text"
            name="input_min"
            id="input_min"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div class="mb-4">
          <label for="input_max" class="block mb-2">Max</label>
          <input
            type="text"
            name="input_max"
            id="input_max"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <button
          class="py-2 px-4 rounded border bg-blue-500 font-bold"
          type="button"
          onclick="handleSubmit(event);"
        >
          submit
        </button>
      </form>
    </div>

    <div id="day6" class="max-w-xs mx-auto"></div>
  </body>
</html>
