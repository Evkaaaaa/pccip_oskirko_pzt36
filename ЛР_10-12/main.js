function calculate() { 
    var x = 2;
    var z = 3;
    var y = 5;
    var result = Math.log(Math.abs(y - Math.sqrt(Math.abs(x)))) * (x - (y/(z + (Math.pow(x, 2)/4))));
    document.getElementById("result").value = result;
}

function output() {
    const S1 = "Я люблю Беларусь";
    const S2 = "Я учусь в Политехническом колледже";

    const oldword = "Гродно";

    const lengthS2 = S2.length;
    const char14 = S1.charAt(6);
    const ascii14 = S1.charCodeAt(6);
    const withnew = S1.includes(oldword);

    document.getElementById("S1").value = S1;
    document.getElementById("S2").value = S2;

    document.getElementById("length").value = lengthS2;
    document.getElementById("char14").value = char14;
    document.getElementById("ascii14").value = ascii14;
    document.getElementById("replace").value = withnew;

}

function outputnet() {
        var browserName = navigator.appName;
        var browserVersion = navigator.appVersion;
        var message = "Имя браузера: " + browserName + "\n" + "Версия браузера: " + browserVersion;
        var newWindow = window.open("", "7 Оскирко Эвелина", "width=500,height=300,scrollbars=yes");
        newWindow.document.write("<p>" + message + "</p>"+"Имя окна: "+ newWindow.name);
}