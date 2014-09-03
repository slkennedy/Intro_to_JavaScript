


document.getElementById("update-button").onclick = function(){
//alert("Clicked");
var thimble, sword, nThimbles, nSwords, total, stringTotal;

  thimble = document.getElementById("thimbles").value;
  sword = document.getElementById("swords").value;

  nThimble = Number(thimble);
  nSword = Number(sword);

  total = (nThimble + (nSword * 37));

  stringTotal = total + " monies";

  document.getElementById("the-total").textContent = stringTotal;
}
