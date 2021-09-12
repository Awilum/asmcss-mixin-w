AssemblerCSS.registerMixin("w", function (settings, fraction) {
    if (!/[0-9]+\/[0-9]+/.test(fraction)) {
        var otherOpts = {
            screen: "100vw",
            min: "min-content",
            max: "max-content",
            auto: "auto",
            full: "100%"
        }

        var key = fraction.toLowerCase().trim();

        if (otherOpts[key]) {
            fraction = otherOpts[key];
        }
        
        return `w: ${fraction};`;
    }

    return `w: ${(fraction.split("/")[0] / fraction.split("/")[1]) * 100}%;`
});