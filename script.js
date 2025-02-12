document.getElementById('yes-btn').addEventListener('click', function() {
    // Hide the first slide (the original page)
    document.getElementById('slide1').style.display = 'none';
    
    // Show the second slide (YOU SAID YES!)
    document.getElementById('slide2').style.display = 'block';
});

document.getElementById('no-btn').addEventListener('click', function() {
    // Hide the first slide (the original page)
    document.getElementById('slide1').style.display = 'none';
    
    // Show the third slide (YOU SAID NO...)
    document.getElementById('slide3').style.display = 'block';
});