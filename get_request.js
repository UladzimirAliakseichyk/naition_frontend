const link='https://uladzimir.pythonanywhere.com/api/notions/'


const dataContainer = document.getElementById('data-container');

import { deleteNotion } from "./del_request.js";

const fetchData = async () =>{
    const result = await fetch(link);
    const data = await result.json();
    return await data; 
};

const renderComponet = (data) => {
    data.forEach(item =>{
        const itemConteiner = document.createElement('div');
        itemConteiner.id = 'item-conteiner'
        const container = document.createElement('div');
        container.innerHTML = item.notion;
        container.id = 'item-notion';
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'image'
        
        deleteBtn.id = 'del-btn'
        deleteBtn.addEventListener('click',() => {
            console.log('Удалить',item.id)
            deleteNotion(item.id);
            itemConteiner.remove();
        })
        itemConteiner.appendChild(container);
        itemConteiner.appendChild(deleteBtn)
        dataContainer.appendChild(itemConteiner);
    })
};

fetchData().then(data => {
    renderComponet(data);
});

export { link };