function hisoblagich(str) {
    var unli = 0;
    var undosh = 0;
    for (var i = 0; i < str.length; i++) {
        let harf = str[i];
        if (harf === 'a' || harf === 'e' || harf === 'i' || harf === 'o' || harf === 'u') {
            unli++;
        } else {
            undosh++;
        }
    }
    return { unli: unli, undosh: undosh };
}   
var str = "assalomu alaykum";
var javob = hisoblagich(str);
console.log("Shuncha unli: " + javob.unli);
console.log("Shuncha undosh: " + javob.undosh);
