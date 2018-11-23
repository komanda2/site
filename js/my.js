$(document).ready(function(){}
  /*
          * Функция подсчета стоимости услуг на создания дизайна сайта
          */
          function calc() {
              var domenname = document.getElementById("domenname"); //получаем ссылку на элемент Select (Тип дизайна)
              var hostname = document.getElementById("hostname"); //получаем ссылку на чекбокс (Требуется верстка?)
              var dev = document.getElementById("count"); //получаем ссылку на элемент input (Кол-во вариантов)
              var total = document.getElementById("total"); //получаем ссылку на элемент span, в него будем писать стоимость дизайна


              var price = 0;
              price += parseInt(domenname.options[domenname.selectedIndex].value);
              price += (hostname.checked == true) ? parseInt(hostname.value) : 0;
              price = parseInt(dev.value) * price;

              total.innerHTML = price;
          }
}
