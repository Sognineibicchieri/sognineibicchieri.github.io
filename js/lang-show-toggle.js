/* English */
KEEP.initEnToggle = () => {
    const enToggleButton = document.querySelector('.btn-en');
    const enToggleButtonSide = document.querySelector('.side-btn-en');
    const enContents = document.querySelectorAll('.en-content');

    // check where the button exist
    if (enToggleButton) {

        // click event
        enToggleButton.addEventListener('click', () => {
            if (enToggleButton.classList.contains('active')) {
                // if button is active，set button to inactive
                enToggleButton
                    .classList
                    .remove('active');
                if (enToggleButtonSide) {
                    enToggleButton
                        .classList
                        .remove('active');
                }
                // hide the en-content
                enContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                // if button is inactive，set button to active
                enToggleButton
                    .classList
                    .add('active');
                if (enToggleButtonSide) {
                    enToggleButtonSide
                        .classList
                        .add('active');
                }
                // show the en-content
                enContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });

        // click event
        enToggleButtonSide.addEventListener('click', () => {
            if (enToggleButtonSide.classList.contains('active')) {
                // if button is active，set button to inactive
                enToggleButton
                    .classList
                    .remove('active');
                enToggleButtonSide
                    .classList
                    .remove('active');

                // hide the en-content
                enContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                enToggleButton
                    .classList
                    .add('active');
                // if button is inactive，set button to active
                enToggleButtonSide
                    .classList
                    .add('active');
                // show the en-content
                enContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });
    }
}

/** Simplified Chinese */
KEEP.initCnsToggle = () => {
    const cnsToggleButton = document.querySelector('.btn-cns');
    const cnsToggleButtonSide = document.querySelector('.side-btn-cns');
    const cnsContents = document.querySelectorAll('.cns-content');

    // check where the button exist
    if (cnsToggleButton) {

        // click event
        cnsToggleButton.addEventListener('click', () => {
            if (cnsToggleButton.classList.contains('active')) {
                // if button is active，set button to inactive
                cnsToggleButton
                    .classList
                    .remove('active');
                if (cnsToggleButtonSide) {
                    cnsToggleButton
                        .classList
                        .remove('active');
                }
                // hide the cns-content
                cnsContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                // if button is inactive，set button to active
                cnsToggleButton
                    .classList
                    .add('active');
                if (cnsToggleButtonSide) {
                    cnsToggleButtonSide
                        .classList
                        .add('active');
                }
                // show the cns-content
                cnsContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });

        // click event
        cnsToggleButtonSide.addEventListener('click', () => {
            if (cnsToggleButtonSide.classList.contains('active')) {
                // if button is active，set button to inactive
                cnsToggleButton
                    .classList
                    .remove('active');
                cnsToggleButtonSide
                    .classList
                    .remove('active');

                // hide the cns-content
                cnsContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                cnsToggleButton
                    .classList
                    .add('active');
                // if button is inactive，set button to active
                cnsToggleButtonSide
                    .classList
                    .add('active');
                // show the cns-content
                cnsContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });
    }
}



/** Italian */
KEEP.initItToggle = () => {
    const itToggleButton = document.querySelector('.btn-it');
    const itToggleButtonSide = document.querySelector('.side-btn-it');
    const itContents = document.querySelectorAll('.it-content');

    // check where the button exist
    if (itToggleButton) {

        // click event
        itToggleButton.addEventListener('click', () => {
            if (itToggleButton.classList.contains('active')) {
                // if button is active，set button to inactive
                itToggleButton
                    .classList
                    .remove('active');
                if (itToggleButtonSide) {
                    itToggleButton
                        .classList
                        .remove('active');
                }
                // hide the it-content
                itContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                // if button is inactive，set button to active
                itToggleButton
                    .classList
                    .add('active');
                if (itToggleButtonSide) {
                    itToggleButtonSide
                        .classList
                        .add('active');
                }
                // show the it-content
                itContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });

        // click event
        itToggleButtonSide.addEventListener('click', () => {
            if (itToggleButtonSide.classList.contains('active')) {
                // if button is active，set button to inactive
                itToggleButton
                    .classList
                    .remove('active');
                itToggleButtonSide
                    .classList
                    .remove('active');

                // hide the it-content
                itContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                itToggleButton
                    .classList
                    .add('active');
                // if button is inactive，set button to active
                itToggleButtonSide
                    .classList
                    .add('active');
                // show the it-content
                itContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });
    }
}


/** French */
KEEP.initFrToggle = () => {
    const frToggleButton = document.querySelector('.btn-fr');
    const frToggleButtonSide = document.querySelector('.side-btn-fr');
    const frContents = document.querySelectorAll('.fr-content');

    // check where the button exist
    if (frToggleButton) {

        // click event
        frToggleButton.addEventListener('click', () => {
            if (frToggleButton.classList.contains('active')) {
                // if button is active，set button to inactive
                frToggleButton
                    .classList
                    .remove('active');
                if (frToggleButtonSide) {
                    frToggleButton
                        .classList
                        .remove('active');
                }
                // hide the fr-content
                frContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                // if button is inactive，set button to active
                frToggleButton
                    .classList
                    .add('active');
                if (frToggleButtonSide) {
                    frToggleButtonSide
                        .classList
                        .add('active');
                }
                // show the fr-content
                frContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });

        // click event
        frToggleButtonSide.addEventListener('click', () => {
            if (frToggleButtonSide.classList.contains('active')) {
                // if button is active，set button to inactive
                frToggleButton
                    .classList
                    .remove('active');
                frToggleButtonSide
                    .classList
                    .remove('active');

                // hide the fr-content
                frContents.forEach(content => {
                    content.style.display = 'none';
                });
            } else {
                frToggleButton
                    .classList
                    .add('active');
                // if button is inactive，set button to active
                frToggleButtonSide
                    .classList
                    .add('active');
                // show the fr-content
                frContents.forEach(content => {
                    content.style.display = 'block';
                });
            }
        });
    }
}

