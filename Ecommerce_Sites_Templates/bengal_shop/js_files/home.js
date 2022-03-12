function t_on(){
    var ele = document.getElementById('toggle-menu');
    ele.classList.toggle('d-none')
}
function n_l_h_on(){
    var ele = document.getElementById('home-d-d-links')

    var p = document.getElementById('page-d-d-links')
    p.classList.add('d-none')

    var s = document.getElementById('shop-d-d-links');
    s.classList.add('d-none')

    var b = document.getElementById('blog-d-d-links')
    b.classList.add('d-none')

    ele.classList.toggle('d-none')
}
function n_l_p_on(){
    var ele = document.getElementById('page-d-d-links')

    var h = document.getElementById('home-d-d-links')
    h.classList.add('d-none')

    var s = document.getElementById('shop-d-d-links');
    s.classList.add('d-none')

    var b = document.getElementById('blog-d-d-links')
    b.classList.add('d-none')

    ele.classList.toggle('d-none')
}
function n_l_s_on(){
    var ele = document.getElementById('shop-d-d-links')

    var p = document.getElementById('page-d-d-links')
    p.classList.add('d-none')

    var h = document.getElementById('home-d-d-links');
    h.classList.add('d-none')

    var b = document.getElementById('blog-d-d-links')
    b.classList.add('d-none')

    ele.classList.toggle('d-none')
}
function n_l_b_on(){
    var ele = document.getElementById('blog-d-d-links')

    var p = document.getElementById('page-d-d-links')
    p.classList.add('d-none')

    var h = document.getElementById('home-d-d-links');
    h.classList.add('d-none')

    var b = document.getElementById('shop-d-d-links')
    b.classList.add('d-none')

    ele.classList.toggle('d-none')
}