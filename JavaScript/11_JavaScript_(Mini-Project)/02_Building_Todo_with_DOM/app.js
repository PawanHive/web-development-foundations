

let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');



btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');
    item.append(delBtn);


    // console.log(inp.value)
    inp.value = " ";
})

let delBtns = document.querySelectorAll(".delete");

for (const delBtn of delBtns) {
    delBtn.addEventListener('click', function() {
        console.log('element deleted')
        let par = this.parentElement;
        console.log(par)
        par.remove()
    })
}

        /*
            NOTE: 
            let see the the problem here delete function 
            works properly for existing button but didn't
            work for new button which we add using input

            see solution in next part/lesson
        */