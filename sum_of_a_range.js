function range(start, end, num) {
      var range_array = [];
    if (num === undefined) {
      num = 1;
    }
    for(i = start; i <= end; i = i + num) {
        range_array.push(i);
        console.log(range_array);
    }
    return range_array;
}

function sum(array) {
    array_sum = 0;
    for (i = 0; i < array.length; i++) {
        var array_sum = array[i] + array_sum;
        console.log(i,array_sum);
    }
    return array_sum;
}
console.log(sum(range(1,10,1)));
