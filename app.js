const initial = document.querySelector('#p-initial')
const inputName = document.querySelector('#input_name')
const spaceComment = document.querySelector('#space-comment')
const limit = document.querySelector('#limit')
const button = document.querySelector('#button-comment')
const viewComment = document.querySelector('#view')

inputName.addEventListener('keydown', initial_name)
spaceComment.addEventListener('keyup', add_comment)
button.addEventListener('click', addComment)


function initial_name(){
    initial.textContent = inputName.value.charAt(0).toUpperCase()
}

function add_comment(){
    console.log( spaceComment.value.length);

    let counter = 200;
    limit.textContent = counter - spaceComment.value.length;

    if (spaceComment.value.length >= 150){
        limit.style.color = 'red';
    }
    else{
        limit.style.color = 'black'
    }
}
function addComment(){
    view.textContent = spaceComment.value;
}


