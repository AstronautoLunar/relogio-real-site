const relogioArea = window.document.getElementsByTagName('div')[0];

const relogioText = window.document.getElementsByTagName('h1')[0];

setInterval(() => {
    relogioText.innerText = new Date().toLocaleTimeString();
}, 1000)

const dataText = window.document.getElementsByTagName('h2')[0];

dataText.innerText = new Date().toLocaleDateString();

// relogioArea.addEventListener('mouseout', () => {
//     relogioArea.style.width = '330px';
//     relogioArea.style.height = '330px';
//     setTimeout(() => {
//         relogioArea.style.width = "";
//         relogioArea.style.height = "";
//     }, 200)
// })