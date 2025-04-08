let currentWorkIndex = 0;
let currentStudentKey = null;
let zIndexCounter = 100;

$(document).ready(function () {

    // student data per program
    // each student has a name and an array of works
    // each work has a title, image, and description
    const students = {
        "Graphic Design": {
            name: "Jeven Randhawa",
            works: [
                {
                    title: '"eternal"',
                    img: "images/GD-img1.png", 
                    desc: "This piece was created using Photoshop. It features characters from the game Elden Ring."},
                { 
                    title: '"Whole Lotta Red - Reimagined"',
                    img: "images/GD-img2.png", 
                    desc: 'This piece was created using Photoshop. It features a reimagining of the album cover for "Whole Lotta Red" by Playboi Carti.'},
                { 
                    title: "cold - EP cover",
                    img: "images/GD-img3.png", 
                    desc: 'This piece was created using Photoshop. It features the EP cover for "cold" by flowrpot. This was a collaborative project with the artist, who had some direction they wanted to take, but ultimately left most of it to Jeven (omg thats me).'},
            ]
        },
        "Photography": {
            name: "Jeven Randhawa... again",
            works: [
                {
                    title: "ALBUM van?",
                    img: "images/PHOT-img1.JPG", 
                    desc: 'A van I saw that had the word "ALBUM" on it for some reason. I thought it was funny, so I took a pic.'},
                { 
                    title: "boring",
                    img: "images/PHOT-img2.JPG", 
                    desc: "Obligatory photo of the CN Tower. I have too many of these for literally no reason. It's not even that cool."},
                { 
                    title: "Sammy",
                    img: "images/PHOT-img3.JPG", 
                    desc: "I named him Sammy. He was chilling with us at the cottage I stayed at last summer. Chill guy frfr"},
            ]
        },
        "Digital Futures": {
            name: "Yes, it's Jeven again",
            works: [
                {
                    title: "Pareidolia: Title Screen UI Prototype",
                    img: "images/DG-img1.gif", 
                    desc: "A prototype of the Title Screen I worked on for a 3D Game Design course project. The logo in the beginning was made by one of the other members."},
                { 
                    title: "CEREAL BOX YAY",
                    img: "images/DG-img2.png", 
                    desc: "I made this cereal box texture for the game I worked on in the 3D Game Design course."},
                { 
                    title: "Collection of UI elements",
                    img: "images/DG-img3.png", 
                    desc: "This is a collection of UI elements I made for the game I worked on in the 3D Game Design course. The UI elements were all made in Photoshop, and the game was made in Unity."},
            ]
        }
    };

    // focus a window and update the taskbar
    function focusWindow($win) {
        const winId = $win.attr('id');
        $win.css('z-index', ++zIndexCounter);
        $('.taskbar-app').removeClass('focused');
        $(`.taskbar-app[data-window="${winId}"]`).addClass('focused');
    }   

    // draggable windows using jQuery UI
    // specifically used https://jqueryui.com/draggable/#constrain-movement for reference
    $('.window').draggable({
        handle: '.title-bar',
        containment: 'window',
        start: function () {
            focusWindow($(this));
        }
    });      

    // focus window on mouse click because earlier method would not call focusWindow
    // when the window is already focused and the title bar is clicked
    $('.window').on('mousedown', function () {
        focusWindow($(this));
    });

    // listen for changes in select dropdown
    // when a student is selected, display name and works
    $('#student-select').on('change', function () {
        const selected = $(this).val();
        const student = students[selected];
        if (student) {
            $('#student-display').html(`
                <button class="student-launch" data-student="${selected}">
                    View ${student.name}
                </button>
            `);
        } else {
            $('#student-display').empty();
        }
    });

    // handles click event on the student-launch button (view student button)
    $(document).on('click', '.student-launch', function () {
        currentStudentKey = $(this).data('student');
        currentWorkIndex = 0;
        const student = students[currentStudentKey];
        const winId = 'student-work';
        const $win = $('#' + winId);

        $win.find('.title-bar-text').text(`${student.name} — ${currentStudentKey}`);
        const work = student.works[currentWorkIndex];
        $win.find('.student-work-title').text(work.title);
        $win.find('.student-work-img').attr('src', work.img).attr('alt', work.title);
        $win.find('.student-work-desc').text(work.desc);        

        $win.show();
        focusWindow($win);

        if ($(`#taskbar-apps .taskbar-app[data-window="${winId}"]`).length === 0) {
            $('#taskbar-apps').append(`
                <div class="taskbar-app" data-window="${winId}">${student.name}</div>
            `);
        }
    });

    // handles click event on next and previous buttons for student work window
    // when next is clicked, increase work index and update display
    // when previous is clicked, subtract work index and update display
    $('#next-work').on('click', function () {
        const student = students[currentStudentKey];
        currentWorkIndex = (currentWorkIndex + 1) % student.works.length;
        const work = student.works[currentWorkIndex];
        $('.student-work-title').text(work.title);
        $('.student-work-img').attr('src', work.img);
        $('.student-work-desc').text(work.desc);        
    });

    $('#prev-work').on('click', function () {
        const student = students[currentStudentKey];
        currentWorkIndex = (currentWorkIndex - 1 + student.works.length) % student.works.length;
        const work = student.works[currentWorkIndex];
        $('.student-work-title').text(work.title);
        $('.student-work-img').attr('src', work.img);
        $('.student-work-desc').text(work.desc);        
    });

    
    // toggle start menu
    $('#start-button').on('click', function (e) {
        $('#start-menu').toggleClass('hidden');
    });
    
    // hide start menu when clicking anywhere else
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#start-button, #start-menu').length) {
        $('#start-menu').addClass('hidden');
        }
    });

    // handles click event on desktop icons (except github icon cause its a link)
    // when icon clicked, show corresponding window and add to the taskbar if not present
    $('.icon:not(.github)').on('click', function () {
        const targetId = $(this).data('window');
        const $win = $('#' + targetId);
        const title = $win.find('.title-bar-text').text();

        $win.show();
        focusWindow($win);

        if ($(`#taskbar-apps .taskbar-app[data-window="${targetId}"]`).length === 0) {
            $('#taskbar-apps').append(`
                <div class="taskbar-app" data-window="${targetId}">${title}</div>
            `);
        }
    });

    // handles click event on taskbar icons
    // if window visible, hide and remove focus from taskbar
    // if hidden, show and focus window
    $(document).on('click', '.taskbar-app', function () {
        const winId = $(this).data('window');
        const $win = $('#' + winId);

        if ($win.is(':visible')) {
            $win.hide();
            $(this).removeClass('focused');
        } else {
            $win.show();
            focusWindow($win);
        }
    });

    // handles click event on minimize and close buttons in windows
    $(document).on('click', '.minimize-btn', function () {
        const $win = $(this).closest('.window');
        const winId = $win.attr('id');
        $win.hide();
        $(`.taskbar-app[data-window="${winId}"]`).removeClass('focused');
    });

    $(document).on('click', '.close-btn', function () {
        const $win = $(this).closest('.window');
        const winId = $win.attr('id');
        $win.hide();
        $(`.taskbar-app[data-window="${winId}"]`).remove();
    });

    // wallpaper change button
    // changes the wallpaper to next color in array
    const wallpapers = [
        '#008080', // aqua/tealish
        '#272739', // dark purple
        '#004d40', // posh looking green lol
        '#9595dc', // light purple
        '#263238'  // gray
    ];
    let currentWallpaper = 0;
    
    $('#change-wallpaper').on('click', function () {
        currentWallpaper = (currentWallpaper + 1) % wallpapers.length;
        $('body').css('background-color', wallpapers[currentWallpaper]);
        $('#start-menu').addClass('hidden');
    });    

    // CLOCK YAYYYYYY
    // took inspiration from https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
    // but made it my own with some jquery
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
        $('#clock').text(`${hours}:${paddedMinutes} ${ampm}`);
    }

    updateClock();
    setInterval(updateClock, 60000);
});