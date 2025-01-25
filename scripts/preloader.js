PaceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
};

setTimeout(function () {
    $('#preloader').css({ display: 'none' });
    console.log('Forcing preloader to hide.');
  }, 2000); // Force hide after 5 seconds