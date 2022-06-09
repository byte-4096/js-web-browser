// Create an empty context menu
var menu = new nw.Menu();
// Get the current window
var win = nw.Window.get();

// Add some items with label
menu.append(new nw.MenuItem({
    label: 'Copy',
    click: function () {
        alert('You have tried to copy something');
    }
}));
menu.append(new nw.MenuItem({ label: 'Paste' }));
menu.append(new nw.MenuItem({ type: 'separator' }));
menu.append(new nw.MenuItem({ 
    label: 'Inspect',
    click: function () {
        win.showDevTools();
    }
}));

// Hooks the "contextmenu" event
document.body.addEventListener('contextmenu', function (ev) {
    // Prevent showing default context menu
    ev.preventDefault();
    // Popup the native context menu at place you click
    menu.popup(ev.x, ev.y);

    return false;
}, false);

