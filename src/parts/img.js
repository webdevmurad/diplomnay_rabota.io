function img() {

    let row = document.createElement('row'),
        image = document.createElement('img'),
        lupa= document.querySelectorAll('.lupa');

    row.classList.add('img-popup');
    image.classList.add('img-content');
    document.body.appendChild(row);
    row.appendChild(image);

    lupa.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            lupa.style.overlay = '0.6';
            image.src = this.href;
        });
    });

    row.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('img-popup')) {

        }
    });
}

module.exports = img;