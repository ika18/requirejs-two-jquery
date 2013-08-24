define(['jquery', 'redactor'], function ($) {
    
    return function () {
        $('#newJquery').text('jQuery version is: ' + $.fn.jquery);
        $('#editor').redactor();
    };
});