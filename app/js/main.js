
window.body.addEventListener('load', function() {
    mlog("Loaded", false);
    let status = JSON.parse(window.localStorage.getItem(`firstVisit`));
    if (status === true || status === undefined) {
        document.location.href = 'index.html';
    } else {
        document.location.href = 'browser.html';
    }
    return;
})