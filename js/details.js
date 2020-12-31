$(function () {

    // Script of Details
    $(".all_spice").on('click', function (e) {
        e.preventDefault();
        $(".content").slideToggle(600);
    });

    //Slider of Image
    let img = document.querySelector('.slider_img_box img');
    let all_imgs = document.querySelectorAll('.small_img img');

    all_imgs.forEach((i) => {
        i.addEventListener('click', () => {
            img.setAttribute('src', i.getAttribute('src'));
        });

    });
});