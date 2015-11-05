function recur(start, end) {
  var loop;
  if (loop == undefined) {
    loop = start;
  }
  if (loop >= end) {
  return "Done!";
  }
  loop++;
  recur();
}
recur(1,10);
