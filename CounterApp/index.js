const counterValue=document.querySelector('#counter');

function increment() {
    // get the value from ui
    let value = parseInt(counterValue.innerText);

    // update tje value
    value = value + 1;

    // set the value to ui
    counterValue.innerText = value;
};

function decrement() {
    let value = parseInt(counterValue.innerText);

    // this will the let the ocunter go below 0
    // value = value - 1;

    // this will not the let the ocunter go below 0
    value = Math.max(0, value - 1);
    counterValue.innerText = value;
};

function reset() {
    // get the value from the UI
    let value = counterValue.innerText;

    // set the value to 0
    value = 0;

    // set the value to UI
    counterValue.innerText = value;
};
