function getletter(l){
  var alpha=["A", "B", "C", "D", "E", "F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var newreplace="";
  var foundIndex=alpha.indexOf(l);
  if(foundIndex+13>=alpha.length){
    foundIndex=foundIndex+13-alpha.length;
    newreplace=alpha[foundIndex];
    }
  else{
    newreplace=alpha[foundIndex+13];
    }
  return newreplace;
}
function rot13(str) {
  var regex = ["A", "B", "C", "D", "E", "F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var toreplace="";
  for(let i=0; i<str.length; i++){
    var theChar = str.charAt(i);
     if(regex.indexOf(theChar) != -1){
        toreplace=toreplace+getletter(str[i]);
      }
    else{
        toreplace=toreplace+theChar;
      }
    }
    return toreplace;
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
