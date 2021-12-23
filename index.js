function getletter(l){
  var alpha=["A", "B", "C", "D", "E", "F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var newreplace="";
  var foundIndex=alpha.indexOf(l);//get the index number of the letter to replace
  if(foundIndex+13>=alpha.length){//if the letter +13 is not in the alpha array
    foundIndex=foundIndex+13-alpha.length;//subtract from length to get new index from beginning of alpha array
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
    var theChar = str.charAt(i);//get each letter in the str
     if(regex.indexOf(theChar) != -1){//if the letter from str is in the regex array
        toreplace=toreplace+getletter(str[i]);//calls getletter() function with new letter and concatenate
      }
    else{
        toreplace=toreplace+theChar;//else do not replace, just concatenate
      }
    }
    return toreplace;
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
