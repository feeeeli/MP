
const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 100,
    plugins: [lgZoom, lgThumbnail,lgAutoplay],
    dynamicEl: [
 
        {
            src: 'images/Foto_98.jpg',
            thumb: 'images/Foto_98.jpg',
            subHtml: `<div class="lightGallery-captions" >          
                     <h4>Kerzenständer aus Kirschholz</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_97.jpg',
            thumb: 'images/Foto_97.jpg',
            subHtml: `<div class="lightGallery-captions" >          
                     <h4>Schüssel aus Wallnussholz</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_99.jpg',
            thumb: 'images/Foto_99.jpg',
            subHtml: `<div class="lightGallery-captions" >          
                     <h4>Vase aus Robinie</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_96.jpg',
            thumb: 'images/Foto_96.jpg',
            subHtml: `<div class="lightGallery-captions" >          
                     <h4>Kronkorkenuhr</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_1.jpg',
            thumb: 'images/Foto_1.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Vase aus Robinie</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_2.jpg',
            thumb: 'images/Foto_2.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Multigadget</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_3.jpg',
            thumb: 'images/Foto_3.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Flaschenverschlüsse</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_4.jpg',
            thumb: 'images/Foto_4.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Eibenblume mit Herz</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_5.jpg',
            thumb: 'images/Foto_5.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Flaschenlicht aus Walnussholz</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_6.jpg',
            thumb: 'images/Foto_6.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Ostereidose aus Walnussholz</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_7.jpg',
            thumb: 'images/Foto_7.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Pflaume mit gelochiertem Deckel</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_8.jpg',
            thumb: 'images/Foto_8.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Skulptur aus Walnussholz</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_9.jpg',
            thumb: 'images/Foto_9.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Apfel-Lufterfrischer</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_10.jpg',
            thumb: 'images/Foto_10.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Apfel-Lufterfrischer</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_11.jpg',
            thumb: 'images/Foto_1.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Vase aus Robinie</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_12.jpg',
            thumb: 'images/Foto_12.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Schüssel und Vase aus Walnussholz</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_13.jpg',
            thumb: 'images/Foto_13.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Vase aus Apfelbaum</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_14.jpg',
            thumb: 'images/Foto_14.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Dose aus Walnussholz</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_15.jpg',
            thumb: 'images/Foto_15.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Multigadget</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_17.jpg',
            thumb: 'images/Foto_17.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Walnussschüssel Wiking Bowl</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_18.jpg',
            thumb: 'images/Foto_18.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Pflaumendose strukturiert</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_19.jpg',
            thumb: 'images/Foto_19.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Walnussschüssel strukturiert</h4>
                    </div>`,
        },
        {
            src: 'images/Foto_20.jpg',
            thumb: 'images/Foto_20.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Kuksa Tasse Walnuss</h4>
                    </div>`,
        },

        {
            src: 'images/Foto_21.jpg',
            thumb: 'images/Foto_21.jpg',
            subHtml: `<div class="lightGallery-captions" style="color: black;" >          
                     <h4>Dübelspiel aus Apfelbaum</h4>
                    </div>`,
        },



    ],
    // Completely optional
  // Adding as the codepen preview is usually smaller
    thumbWidth: 80,
    thumbHeight: "80px",
    thumbMargin: 4,
    autoplay: true,  // Autoplay aktivieren
    autoplayFirstVideo: true,
    pause: 1000,     // Pause zwischen den Slides in Millisekunden
    progressBar: true // Fortschrittsbalken anzeigen
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();
