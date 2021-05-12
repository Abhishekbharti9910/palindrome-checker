let btn = document.getElementById("btn");

// palandrome function
function palandrome(){
let nme = document.getElementById("input-area").value;//taking value of input to check//
let capName = nme.toUpperCase();
capName.split("");
let i = 0; //i is for traving string from front
let j = (capName.length - 1) ; //j is for travinf string from rear
let palan = 1;

    do {
        if (capName[i]!==capName[j]) {
                palan = 0;
                break;
        }
        i++;
        j--;
    } while (i<j);

    if (palan) {
        document.getElementById("palan-ans").innerHTML= nme + " is a palandrome";
        }
    else{
            document.getElementById("palan-ans").innerHTML = nme + " is not a palandrome";
    }

}


btn.addEventListener("click", palandrome);