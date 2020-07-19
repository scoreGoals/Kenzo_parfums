// Start

// init controller
let controller = new ScrollMagic.Controller();

// 1 ==============================
new ScrollMagic.Scene({
        triggerElement: "#kp-imagination",
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 0 // move trigger to center of element
    })
    .setClassToggle("#kp-face-1", "visible") // add class to reveal
    .addTo(controller);


new ScrollMagic.Scene({
        triggerElement: "#kp-youth",
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 0 // move trigger to center of element
    })
    .setClassToggle("#kp-energy", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#kp-new",
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 0 // move trigger to center of element
    })
    .setClassToggle("#kp-face-2", "visible") // add class to reveal
    .addTo(controller);


new ScrollMagic.Scene({
        triggerElement: "#kp-freedom",
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 0 // move trigger to center of element
    })
    .setClassToggle("#kp-power", "visible") // add class to reveal
    .addTo(controller);


// 2 ==============================

let revealElements = document.getElementsByClassName("kp-item");
for (let i = 0; i < revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 0, // start a little later
            triggerHook: 0.9,
        })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        .addTo(controller);
};
