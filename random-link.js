const sites = [
        'http://www.google.com',
        'http://www.stackoverflow.com',
        'http://www.example.com',
        'http://www.youtube.com'
    ];

    randomSite = function() {
        const i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }



    /* Implement using the tag bleow

     <a href="#" onclick="randomSite();">Click Here</a>

     */