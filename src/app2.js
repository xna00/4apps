import './style2.css'
const $tabs= $('.tab')
const $contents = $('.content')
let index = 0;
$tabs.on('click', (e) => {
    console.log(e);
    index = parseInt(e.target.innerText) - 1
    console.log(index);
    $contents.eq(index).addClass('selected').siblings().removeClass('selected')
    $tabs.children().eq(index).addClass('active').siblings().removeClass('active')
})
