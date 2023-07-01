setTimeout(function() {
    var backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    window.alert(backgroundColor);
    }, 3000);

function changeStyle() {
    var currentUrl = window.location.href;
alert(currentUrl);

   
}
function removeElement() {
    var element = document.getElementById("element2");
    element.parentNode.removeChild(element);
}
var element2 = document.querySelector('.element2');

        element2.addEventListener('mouseover', function () {
            element2.classList.add('element2:hover');
        });
        element2.addEventListener('mouseout', function () {
            element2.classList.remove('element2:hover');});

            function openNewWindow() {
                // Получение имени компьютера в сети интернет
                var computerName = window.location.hostname;
          
                // Создание нового окна
                var newWindow = window.open('', '_blank', 'width=300,height=500,scrollbars=yes,status=no');
          
                // Вывод информации об имени компьютера в новое окно
                newWindow.document.write('<h1>Имя компьютера в сети интернет: </h1>');
                newWindow.document.write('<p>' + computerName + '</p>');
              }


var originalElement = document.getElementById('FIO');
var clonedElement = originalElement.cloneNode(true);
document.body.prepend(clonedElement);
