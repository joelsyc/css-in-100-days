const burger = document.getElementById("burger");
const bars = document.getElementsByClassName("bar");

console.log(bars)

burger.onclick = () => {
    burger.classList.toggle("active");
    for (let bar = 0; bar < bars.length; bar++) {
        bars[bar].classList.remove("no-animation");
    }
}