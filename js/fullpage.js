function initializeFullpage() {
    new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'left',
        scrollBar: window.innerWidth < 1200,
        controlArrows: false,
        responsiveWidth: 1200
    });
}

initializeFullpage();

window.addEventListener('resize', function () {
    fullpage_api.destroy('all');
    initializeFullpage(); 
});