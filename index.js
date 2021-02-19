const btn  = document.querySelector('.search-box button');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search')

/*btn.onclick = () =>{
    searchBox.classList.toogle('active');
    searchBox.focus({
        preventScroll:true,
    })
    searchInput.value = '';
    searchBox.style['box-shadow'] = '';

    if(searchBox.classList.contains('active')){btn.innerHTML = '<i class="fa fa-times-circle"></i>'}
    else{btn.innerHTML = '<i class="fa fa-search"></i>'}
}


searchInput.oninput = (e) => {
    const{ value } = e.target;
    const length = value.split('').length;
    searchBox.style['box-shadow'] = `
    0 0 ${length * 2}px #21f9ff,
    0 0 ${length * 1.5}px #21f9ff,
    0 0 ${length}px #21f9ff,
    `;
}*/
function log(){console.log("Sorry but backend is not ready (see ./nobackendended.html)")}

console.log("Hey there!")
setTimeout(log(), 1000)