import tpl from './info.tpl'

const oApp = document.querySelector("#app")

const info = tpl({
    name: 'spcming',
    age: 21,
    career: 'student',
    hobby: 'code'
});

oApp.innerHTML = info
console.log(info)