window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    if (scrollValue >= 550) {
        document.getElementById('scrollPlay1').style.opacity = 1;
        document.getElementById('scrollPlay1').style.transition = 'opacity 1s';
    } else {
        document.getElementById('scrollPlay1').style.opacity = 0;
    }

})
window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    if (scrollValue >= 550) {
        document.getElementById('scrollPlay2').style.opacity = 1;
        document.getElementById('scrollPlay2').style.transition = 'opacity 1s 0.5s';
    } else {
        document.getElementById('scrollPlay2').style.opacity = 0;
    }

})
window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    if (scrollValue >= 550) {
        document.getElementById('scrollPlay3').style.opacity = 1;
        document.getElementById('scrollPlay3').style.transition = 'opacity 1s 1s';
    } else {
        document.getElementById('scrollPlay3').style.opacity = 0;
    }

})
window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    if (scrollValue >= 100) {
        document.getElementById('scrollDescription').style.opacity = 1;
        document.getElementById('scrollDescription').style.transition = 'opacity 0.5s';
    } else {
        document.getElementById('scrollDescription').style.opacity = 0;
    }
})
window.addEventListener('scroll', function () {
    var scrollValue = window.scrollY;
    if (scrollValue >= 300) {
        document.getElementById('scrollDescription2').style.opacity = 1;
        document.getElementById('scrollDescription2').style.transition = 'opacity 1.5s';
    } else {
        document.getElementById('scrollDescription2').style.opacity = 0;
    }
})