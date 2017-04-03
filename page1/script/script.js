function currency (curName) {
    var xhr=new XMLHttpRequest();
    xhr.open('GET','http://www.nbrb.by/API/ExRates/Rates/' + curName + '?ParamMode=2','true');
    xhr.responseType='json';
    xhr.addEventListener('loadend',function listener () {
        xhr.removeEventListener('loadend',listener);
        var Rate=xhr.response;
        var course = document.createElement('p');
        nbrb.appendChild(course);
        course.textContent=Rate.Cur_OfficialRate;
    });
    xhr.send();
}
currency('EUR');
currency('USD');
currency('RUB');
window.addEventListener('load', function () {
    photo.classList.add('firstMan');
    document.querySelector('#name').innerHTML='ФИО: Андрей Макаров';
    document.querySelector('#position').innerHTML='Должность: Начальник Сектора';
    document.querySelector('#birth').innerHTML='Дата рождения: 17.02.1982г.';
    document.querySelector('#education').innerHTML='Образование: Economic University of Prague';
    document.querySelector('#speciality').innerHTML='Специализация: IT Audit';
    document.querySelector('#experience').innerHTML='Опыт работы: 12 лет 5 мес';
    document.querySelector('#email').innerHTML='Email: makarov.a@brrb.by';
    document.querySelector('#phone').innerHTML='Тел. 8-017-345-67-56';
    document.querySelector('#room').innerHTML='Кабинет: 350';
    function toggle(event) {
        var targetClick = event.target;
        if (targetClick.matches('button:nth-child(1)')) {
            photo.classList.remove('firstWoman');
            photo.classList.remove('secondWoman');
            photo.classList.add('firstMan');
            document.querySelector('#name').innerHTML='ФИО: Андрей Макаров';
            document.querySelector('#position').innerHTML='Должность: Начальник Сектора';
            document.querySelector('#birth').innerHTML='Дата рождения: 17.02.1982г.';
            document.querySelector('#education').innerHTML='Образование: Economic University of Prague';
            document.querySelector('#speciality').innerHTML='Специализация: IT Audit';
            document.querySelector('#experience').innerHTML='Опыт работы: 12 лет 5 мес';
            document.querySelector('#email').innerHTML='Email: makarov.a@brrb.by';
            document.querySelector('#phone').innerHTML='Тел. 8-017-345-67-56';
            document.querySelector('#room').innerHTML='Кабинет: 350';
        }

        if (targetClick.matches('button:nth-child(2)')) {
            photo.classList.remove('firstMan');
            photo.classList.remove('secondWoman');
            photo.classList.add('firstWoman');
            document.querySelector('#name').innerHTML='ФИО: Мария Корниенко';
            document.querySelector('#position').innerHTML='Должность: Главный специалист';
            document.querySelector('#birth').innerHTML='Дата рождения: 22.05.1983г.';
            document.querySelector('#education').innerHTML='Образование: Boston Business University';
            document.querySelector('#speciality').innerHTML='Специализация: IFRS Audit';
            document.querySelector('#experience').innerHTML='Опыт работы: 9 лет 8 мес';
            document.querySelector('#email').innerHTML='Email: kornienko.m@brrb.by';
            document.querySelector('#phone').innerHTML='Тел. 8-017-345-67-55';
            document.querySelector('#room').innerHTML='Кабинет: 351';
        }
        if (targetClick.matches('button:nth-child(3)')) {
            photo.classList.remove('firstMan');
            photo.classList.remove('firstWoman');
            photo.classList.add('secondWoman');
            document.querySelector('#name').innerHTML='ФИО: Алина Ларкова';
            document.querySelector('#position').innerHTML='Должность: Ведущий специалист';
            document.querySelector('#birth').innerHTML='Дата рождения: 05.12.1991г.';
            document.querySelector('#speciality').innerHTML='Специализация: AML, FATCA';
            document.querySelector('#experience').innerHTML='Опыт работы: 5 лет 3 мес';
            document.querySelector('#email').innerHTML='Email: larkova.a@brrb.by';
            document.querySelector('#phone').innerHTML='Тел. 8-017-345-67-54';
            document.querySelector('#room').innerHTML='Кабинет: 351';
        }
    }
    document.body.addEventListener('click',toggle);
});
