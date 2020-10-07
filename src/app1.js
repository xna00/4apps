import './style1.css'
let n = parseFloat(num.innerText)
console.log(n);
add.onclick = () => {
    num.innerText = ++n
}
sub.onclick = () => {
    num.innerText = --n
}
mul.onclick = () => {
    num.innerText = (n *= 2)
}
div.onclick = () => {
    num.innerText = (n /= 2)
}