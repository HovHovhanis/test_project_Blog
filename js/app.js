let sccrollpos = window.scrollY;

const haederSticky = document.querySelector('.header-box')
const footer = document.querySelector('.footer')

const scrollChange = 1


const add_class_on_scroll = () => haederSticky.classList.add('sticky');
const remove_class_on_scroll = () => haederSticky.classList.remove('sticky');

window.addEventListener('scroll', function() {
    sccrollpos = window.scrollY;

    if (sccrollpos >= scrollChange) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
})