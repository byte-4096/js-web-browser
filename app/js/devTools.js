const logDisplay = document.getElementById('log');
const devTools = document.getElementById('tools');

function mlog(message, type) {
    // KEEP THIS FUNCTION ON TOP
    if (type === true) {
        logDisplay.innerHTML += `<span class="error"><span class="date">${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()} </span><span class="errorIcon">x</span> ${JSON.stringify(message) || message}</span><br>`
    } else {
        logDisplay.innerHTML += `<span class="message"><span class="date">${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()} </span><span class="infoIcon">i</span> ${JSON.stringify(message) || message}</span><br>`
    }
}

mlog('MaceLog Initialized')

function closeDevTools() {
    devTools.style.display = 'none';
}