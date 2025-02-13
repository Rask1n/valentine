document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('slide1').style.display = 'none';
    document.getElementById('slide3').style.display = 'block';
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('slide1').style.display = 'none';
    document.getElementById('slide2').style.display = 'block';
});

document.getElementById('really-no-btn').addEventListener('click', function() {
    document.getElementById('slide2').style.display = 'none';
    document.getElementById('slide4').style.display = 'block';
});

document.getElementById('change-mind-btn').addEventListener('click', function() {
    document.getElementById('slide2').style.display = 'none';
    document.getElementById('slide3').style.display = 'block';
});
