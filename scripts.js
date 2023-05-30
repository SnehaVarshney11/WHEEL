function shuffle(array) {
    var curIndex = array.length;
    var randomIndex;

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
    const ele = document.getElementById("main");
    let selectItem = ""; 

    let Diya = shuffle([1890, 2250, 2610]);
    let Charles = shuffle([1850, 2210, 2570]);
    let Ali = shuffle([1770, 2130, 2490]);
    let Beatriz = shuffle([1810, 2170, 2530]); 
    let Eric = shuffle([1750, 2110, 2470]);
    let Hanna = shuffle([1630, 1990, 2350]);
    let Fatima = shuffle([1570, 1930, 2290]);

    let res = shuffle([
        Diya[0],
        Charles[0],
        Ali[0],
        Beatriz[0],
        Eric[0],
        Hanna[0],
        Fatima[0] 
    ]);

    
    if (res[0] === Diya[0]) selectItem = "Diya";
    if (res[0] === Charles[0]) selectItem = "Charles";
    if (res[0] === Ali[0]) selectItem = "Ali";
    if (res[0] === Beatriz[0]) selectItem = "Beatriz";
    if (res[0] === Eric[0]) selectItem = "Eric";
    if (res[0] === Hanna[0]) selectItem = "Hanna";
    if (res[0] === Fatima[0]) selectItem = "Fatima";

    // alert(res[0]);
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + res[0] + "deg)";
    ele.classList.remove("animate");
    setTimeout(function(){
        ele.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        alert(selectItem)
        Swal.fire({
            title: 'We have a winner!',
            text: res,
          })
    }, 5500);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}