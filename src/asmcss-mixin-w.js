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
        case '5/12':
            return 'w: 41.666667%;';
        break;
        case '6/12':
            return 'w: 50%;';
        break;
        case '7/12':
            return 'w: 58.333333%;';
        break;
        case '8/12':
            return 'w: 66.666667%;';
        break;
        case '9/12':
            return 'w: 75%;';
        break;
        case '10/12':
            return 'w: 83.333333%;';
        break;
        case '10/12':
            return 'w: 91.666667%';
        break;
        case '1/2':
            return 'w: 50%';
        break;
        case '1/3':
            return 'w: 33.333333%;';
        break;
        case '2/3':
            return 'w: 66.666667%;';
        break;
        case '1/4':
            return 'w: 25%;';
        break;
        case '2/4':
            return 'w: 50%;';
        break;
        case '3/4':
            return 'w: 75%;';
        break;
        case '1/5':
            return 'w: 20%;';
        break;
        case '2/5':
            return 'w: 40%;';
        break;
        case '3/5':
            return 'w: 60%;';
        break;
        case '4/5':
            return 'w: 80%;';
        break;
        case '1/6':
            return 'w: 16.666667%;';
        break;
        case '2/6':
            return 'w: 33.333333%;';
        break;
        case '3/6':
            return 'w: 50%;';
        break;
        case '4/6':
            return 'w: 66.666667%;';
        break;
        case '5/6':
            return 'w: 83.333333%;';
        break;
        case 'screen':
            return 'w: 100vw';
        break;
        case 'min':
            return 'w: min-content';
        break;
        case 'max':
            return 'w: max-content';
        break;      
        case 'auto':
            return 'w: auto';
        break;    
        case 'full':
            return 'w: 100%';
        break;
        default:
            return args[0];
        break;
    }
});