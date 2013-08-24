requirejs.config({
    // 'baseUrl': '../',
    paths: {
        'jquery-1.7.2': 'jquery-1.7.2.module',
        'jquery-1.10.2': 'jquery-1.10.2.module',
        'redactor': '../vendor/redactor/9.0.4/redactor'
    },
    map: {
        '*': {
            'jquery': 'jquery-1.7.2'
        },
        'redactor': {
            'jquery': 'jquery-1.10.2'
        },
        'foo': {
            'jquery': 'jquery-1.10.2'
        }
    },
    shim: {
        'redactor': ['jquery'],
    }
});

require(['jquery', 'foo'], function ($, foo) {
    $('#oldJquery').text('jQuery version is: ' + $.fn.jquery);
    foo();
});