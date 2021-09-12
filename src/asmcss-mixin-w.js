AssemblerCSS.registerMixin("w", function (settings, fraction) {
    if (!/[0-9]+\/[0-9]+/.test(fraction){
        var otherOpts = {
            screen: "100vw",
            min: "min-content",
            max: "max-content",
            auto: "auto",
            full: "100%"
        }
        //Not sure if toLowerCase and trim() are nessecary but why not
        var key = fraction.toLowerCase().trim()
        if (otherOpts[key]) {
            fraction = otherOpts[key];
        }
        //If we can't divide it just return the original thing (Like `w:120px`)
        return `w: ${fraction};`;
    }
    //If it's a fraction we can just do this:
    return `w: ${(fraction.split("/")[0] / fraction.split("/")[1]) * 100}%;`
});
