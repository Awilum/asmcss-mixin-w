AssemblerCSS.registerMixin("w", function (settings, ...args) {
    switch (args[0]) {
        case '1/12':
            return 'w: 8.333333%;';
        break;
        case '2/12':
            return 'w: 16.666667%;';
        break;
        case '3/12':
            return 'w: 25%;';
        break;
        case '4/12':
            return 'w: 33.333333%;';
        break;
        case 'full':
            return 'w: 100%';
        break;
        default:
            return args[0];
        break;
    }
});