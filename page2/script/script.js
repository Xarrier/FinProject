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
    mapChange.classList.add('map2015');
    function toggle(event) {
        var targetClick = event.target;
        if (targetClick.matches('section button:nth-child(1)')) {
            mapChange.classList.remove('map2016');
            mapChange.classList.add('map2015');
        }
        if (targetClick.matches('section button:nth-child(2)')) {
            mapChange.classList.remove('map2015');
            mapChange.classList.add('map2016');
        }
    }
    document.body.addEventListener('click',toggle);
});