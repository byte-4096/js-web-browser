const tabDisplay = document.getElementsByClassName('tabs')[0];

let tabs = [
    {
        title: 'New Tab',
        favicon: 'img/favicon-raw.png',
        location: null,
        content: `<h4>New Tab</h4>`
    }
]

function initTabs() {
    tabDisplay.innerHTML = '';
    tabs.forEach(tab => {
        tabDisplay.innerHTML += `
            <div class="tab">
                <input
                    type="radio"
                    name="css-tabs"
                    id="tab-${tabs.indexOf(tab)+1}"
                    checked
                    class="tab-switch"
                />
                <label for="tab-${tabs.indexOf(tab)+1}" class="tab-label"><img src="${tab.favicon}" height="15px"> ${tab.title} <button class="closeTabButton" onclick="closeTab(${tabs.indexOf(tab)})">X</button></label>
                <div class="tab-content">
                    ${tab.content}
                </div>
            </div>
        `;
    })
}
initTabs();

function newTab() {
    tabs.push(
        {
            title: 'New Tab',
            favicon: 'img/favicon-raw.png',
            content: '<h2>New Tab</h2>',
            location: 'newTab.html'
        }
    )
    initTabs();
}

function closeTab(tabId) {
    tabs.splice(tabId, 1);
    mlog(tabs);
    initTabs();
}