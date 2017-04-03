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
