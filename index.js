let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0
function increament() {
    count = count + 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.textContent = count
}
