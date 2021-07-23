var arrays = [[1, 2, 3], [4, 5], [6]];

function combine(array1d, element)
  {
    array1d.concat(element);

    return array1d;
  }

  function reduce(array2d, combine) {

    let array1d = [];

    for (let element of array2d) {

      array1d = combine(array1d, element);

    }

    return array1d;
  }

  let array2d = [1, 2, 3, 4, 5, 6]
  console.log(reduce(array2d, combine));