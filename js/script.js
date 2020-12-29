$(function () {

    // Get All Mark Cars
    let all_checkboxes = document.querySelectorAll('.all-checkboxes input');
    let all_col = document.querySelectorAll('.cars_row div');

    all_checkboxes.forEach((i) => {
        i.addEventListener('click', () => {
            let c = i.getAttribute('data-car');
            all_col.forEach((colum) => {
                let cl = colum.getAttribute('data-car');
                if ((cl === c) || (c === "audi")) {
                    colum.classList.add('show');
                }
                else {
                    colum.classList.add('hide');
                    colum.classList.remove('show');

                }
            });
        });
    });
});