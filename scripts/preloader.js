PaceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
};

// Wait for 2 seconds, then fade out the preloader over 1 second
setTimeout(function () {
    $('#preloader').css({
      transition: 'opacity 1s ease', // Add a 1-second fade effect
      opacity: '0',
    });
  
    // After the fade-out animation is complete, hide the preloader
    setTimeout(function () {
      $('#preloader').css({ display: 'none' });
      console.log('Forcing preloader to hide.');
    }, 1000); // Wait for the fade-out duration (1 second)
  }, 2000); // Initial 2-second delay