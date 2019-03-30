function popupWindow() {


    setTimeout(popupUp, 60000);

    function popupUp() {
        let modal = document.querySelector('.popup');
        modal.style.display = 'flex';
    }
    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
}

module.exports = popupWindow;