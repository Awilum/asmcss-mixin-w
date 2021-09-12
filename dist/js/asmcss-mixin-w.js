AssemblerCSS.registerMixin("w", function (settings, fraction) {
    if (!/[0-9]+\/[0-9]+/.test(fraction){
        //If we can't divide it just return the original thing (Like `w:120px`)
        return `w: ${fraction};`;
    }
    //If it's a fraction we can just do this:
    return `w: ${(fraction.split("/")[0] / fraction.split("/")[1]) * 100}%;`
});
