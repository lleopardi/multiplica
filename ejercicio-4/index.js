const itemsQuantity = 6666;
const ul = document.querySelector('ul');

function genarateListItems(quantity, onClick) {
    return new Array(quantity).fill('').map((item, index)=> {
        const li = document.createElement('li');
        const content = document.createTextNode('item ' + (index+1));
        li.addEventListener('click', onClick);
        li.className = 'item';
        li.appendChild(content);
        return li;
    });
}

function addItemsToElement(items, parent) {
    items.forEach(element => {
        parent.appendChild(element)
    });
}

function showDate(event) {
    event.target.innerHTML = Date();
}

const listItem = genarateListItems(itemsQuantity, showDate);
addItemsToElement(listItem, ul);
