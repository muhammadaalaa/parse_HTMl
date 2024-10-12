exports.replaceSymbol = function replaceSymbol(str) {
  let startingIndex = -1;
  let endingIndex = -1;

  for (let i = 0; i < str.length; i++) {
    startingIndex = str.indexOf("&#", i);
    if (startingIndex === -1) break;
    i = startingIndex;
    endingIndex = str.indexOf(";", i);
    if (endingIndex === -1) break;
    i = endingIndex;

    // we need to get this 8211 (decimal)
    let item = str.substring(startingIndex + 2, endingIndex);
    // "0x+ hexadecimal"   ==0x utf format

    item = "0x" + Number(item).toString(16); // to get the num in hexadecimal format
    // output  ==>0x2013 en dash code
    item = String.fromCodePoint(item);
    str = str.replace("&#8211;", item);
    // console.log(str);
  }
  return str;
};
