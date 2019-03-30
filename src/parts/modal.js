function modal() {
    let cause = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        close = document.querySelectorAll('.popup_close'),
        closeOne = close[0],
        closeTwo = close[1];

        //Заказать звонок и спросить у нашего специалиста.
    function modalWindow(button) {
        if (!popup.style.display || popup.style.display === 'none') {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    cause.forEach(item => {
        item.addEventListener('click', function (event){
            modalWindow(this);
        });
    });
    closeOne.addEventListener('click', function () {
        modalWindow(this);
    });

    let btnHeader = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer');

    btnHeader.onclick = function() {
        popupEngineer.style.display = 'block';
    }
    closeTwo.onclick = function () {
        popupEngineer.style.display = '';
    }

}   

module.exports = modal;