var strInput = prompt("Enter a string: ");
var o = reverse (strInput);
//reverses the order of the string
  function reverse(x) {
      var o = '';
      for (var i = x.length - 1; i >= 0; i--)
          o += x[i];
      return o;
  }
  alert(o);
