function shuffle(array) {
    var curIndex = array.length, randomIndex;
    
    while(0 !== curIndex) {
        randomIndex = Math.floor(Math.random() * curIndex);
        curIndex--;
        [array[curIndex], array[randomIndex]] = [
            array[randomIndex], 
            array[curIndex],
        ];
    }
    return array;
}

function spin() {           
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("main");
    let selectItem = ""; 

    let Ali = shuffle([1890, 2250, 2610]);
    let Beatriz = shuffle([1850, 2210, 2570]);
    let Eric = shuffle([1770, 2130, 2490]);
    let Hanna = shuffle([1810, 2170, 2530]); 
    let Fatima = shuffle([1750, 2110, 2470]);
    let James = shuffle([1630, 1990, 2350]);
    let Charles = shuffle([1570, 1930, 2290]);

    let res = shuffle([
        Ali[0],
        Beatriz[0],
        Eric[0],
        Hanna[0],
        Fatima[0],
        James[0],
        Charles[0] 
    ]);

    if (res[0] === Ali[0]) selectItem = "Ali"; //b1 s3
    if (res[0] === Beatriz[0]) selectItem = "Beatriz"; //b1 s4
    if (res[0] === Eric[0]) selectItem = "Eric"; // b2 s1
    if (res[0] === Hanna[0]) selectItem = "Hanna"; // b1 s5
    if (res[0] === Fatima[0]) selectItem = "Fatima"; // b2 s2
    if (res[0] === James[0]) selectItem = "James"; // b2 s5
    if (res[0] === Charles[0]) selectItem = "Charles"; // b1 s2

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + res[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        // alert(res)
        Swal.fire({
            title: 'We have a winner!',
            text: selectItem,
          })
    }, 5500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}