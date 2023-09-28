import { MiniMaple } from "./miniMaple";

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    let f = document.getElementById('func').value
    let d = document.getElementById('d').value
    if (f === '' || d.length != 1) {
        alert('Некорректный ввод!')
        return
    }
    let counter = new MiniMaple()
    someDummyDiv.innerHTML = `${d} | ${f} ==> ${counter.diff(f, d)}`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}