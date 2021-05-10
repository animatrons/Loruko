window.addEventListener("scroll",() => {
    document.getElementById("nav").innerHTML = window.pageYOffset + "px";
})

// var ev = new Event()

document.addEventListener("scroll",(e) => {
    if(window.pageYOffset > 0)  document.getElementById("navbar1").style.boxShadow = "2px 0px 10px 0px rgba(0, 0, 0,0.15), -2px 0px 10px 0px rgba(0, 0, 0, 0.15)";
    else document.getElementById("navbar1").style.boxShadow = "2px 0px 5px 0px rgba(0, 0, 0,0), -2px 0px 5px 0px rgba(0, 0, 0, 0)";
    console.log(e);
})

document.getElementById("c3").style.transitionDuration = "0.4s";
        document.getElementById("c3").style.transform = "scale(0.999,0.989)";
        document.getElementById("c3").style.transform = "scale(1,1)";
        function skaleD(){
            // document.getElementById("c3").style.transitionDuration = "0.5s";
            document.getElementById("c3").style.transform = "scale(0.999,0.989)";
            document.getElementById("c3").style.boxShadow = "0px 1px 13px rgba(0,0,0,0.2)";
        }
        function skaleU(){
            // document.getElementById("c3").style.transitionDuration = "0.5s";
            document.getElementById("c3").style.transform = "scale(1,1)";
            document.getElementById("c3").style.boxShadow = "0px 2px 17px rgba(0,0,0,0.17),2px 0px 17px rgba(0,0,0,0.17)";
        }

        
        function discoverMoreLess(num,closed){
            if(closed){
                document.getElementById("list-"+num).style.height = "360px";
                setTimeout(function (){ document.getElementById("front-grad-"+num).style.backgroundImage = "linear-gradient(rgba(255, 255, 255,0.1),rgba(255, 255, 255,0.7))";},200);
                setTimeout(function (){ document.getElementById("front-grad-"+num).style.backgroundImage = "linear-gradient(rgba(255, 255, 255,0.1),rgba(255, 255, 255,0))";},200);      
                setTimeout(function() {
                    document.getElementById("butt-"+num).innerHTML = document.getElementById("butt-"+num).innerHTML.replace("Discover More","See less features");    
                    document.getElementById("butt-"+num).getElementsByTagName("i")[0].style.display = "none"; //firstChild.style.display = "none";
                    document.getElementById("butt-"+num).getElementsByTagName("i")[1].style.display = "inline"; // lastChild.style.display = "inline";
                },400);
                // document.getElementById("butt-"+num).innerHTML = document.getElementById("butt-"+num).innerHTML.replace("Discover More","See less features");
            }
            else {
                document.getElementById("list-"+num).style.height = "50px";
                setTimeout(function (){ document.getElementById("front-grad-"+num).style.backgroundImage = "linear-gradient(rgba(255, 255, 255,0.1),#fff)";},400);
                setTimeout(function() {document.getElementById("butt-"+num).innerHTML = document.getElementById("butt-"+num).innerHTML.replace("See less features","Discover More");
                document.getElementById("butt-"+num).getElementsByTagName("i")[0].style.display = "inline"; //firstChild.style.display = "none";
                document.getElementById("butt-"+num).getElementsByTagName("i")[1].style.display = "none"; // lastChild.style.display = "inline";
            },400);
            }            
        }
        var closed_1 = true;
        var closed_2 = true;
        var closed_3 = true;
        document.getElementsByClassName("butt").item(0).addEventListener("click", function() {discoverMoreLess("1",closed_1);});
        document.getElementsByClassName("butt").item(1).addEventListener("click", function() {discoverMoreLess("2",closed_2);});
        document.getElementsByClassName("butt").item(2).addEventListener("click", function() {discoverMoreLess("3",closed_3);});

        document.getElementsByClassName("butt").item(0).addEventListener("click", function() {closed_1 = !closed_1;});
        document.getElementsByClassName("butt").item(1).addEventListener("click", function() {closed_2 = !closed_2;});
        document.getElementsByClassName("butt").item(2).addEventListener("click", function() {closed_3 = !closed_3;});
        

        
        