function tabs() {
    function tabs() {
        //firsttabs
        let tab = document.querySelectorAll('.tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.tabcontent'),
            link = document.querySelectorAll('.link'),
            tabImg = document.querySelectorAll('.tabImg'),
            hideTabContent = a => {
                for (let i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.add('hide');
                    link[i].classList.remove('active');
                }
            };

        hideTabContent(1);

        let showTabContent = (b) => {
            if (tabContent[b].classList.contains('hide')) {
                hideTabContent(0);
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        };

        info.addEventListener('click', (event) => {
            let target = event.target,
                tabs = (a, c) => {
                    if (target && target.classList.contains(a)) {
                        for (let i = 0; i < c.length; i++) {
                            if (target === c[i]) {
                                hideTabContent(0);
                                showTabContent(i);
                                link[i].classList.add('active');
                                break;
                            }
                        }
                    }
                };

            tabs('tab', tab);
            tabs('link', link);
            tabs('tabImg', tabImg);
        }); //secondstabs

        let infoDec = document.querySelector('.decoration_slider'),
            decTab = document.querySelectorAll('.decoration-tab'),
            decLink = document.querySelectorAll('.decoration-link'),
            decTabContent = document.querySelectorAll('.decTabcontent'),
            hideDecTabContent = (a) => {
                for (let i = a; i < decTabContent.length; i++) {
                    decTabContent[i].classList.remove('show');
                    decTabContent[i].classList.add('hide');
                    decTab[i].classList.remove('after_click');
                }
            };

        hideDecTabContent(1);

        let showDecTabContent = (b) => {
            if (decTabContent[b].classList.contains('hide')) {
                hideDecTabContent(0);
                decTabContent[b].classList.remove('hide');
                decTabContent[b].classList.add('show');
            }
        };

        infoDec.addEventListener('click', (event) => {
            let target = event.target,
                tabs = (a, b) => {
                    if (target && target.classList.contains(a)) {
                        for (let i = 0; i < b.length; i++) {
                            if (target === b[i]) {
                                hideDecTabContent(0);
                                showDecTabContent(i);
                                decTab[i].classList.add('after_click');
                                break;
                            }
                        }
                    }
                };

            tabs('decoration-tab', decTab);
            tabs('decoration-link', decLink);
        });
    }

    module.exports = tabs;
}

module.exports = tabs;