var marginCarr = 360;
var marginLon = 'px';
var sliderRefClass = 'estate-content';
$(document).ready(function() {
    var sBrowser, sUsrAg = navigator.userAgent;

    if(sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
    } else if (sUsrAg.indexOf("MSIE") > -1) {
        sBrowser = "Microsoft Internet Explorer";
    }

    if (sBrowser === "Apple Safari"){
        document.querySelector('#social-media').style.visibility = 'hidden';
        document.querySelector('#social-media').style.opacity = '0';
        document.querySelector('#social-media').style.display = 'none'
        document.querySelector('#gall-art-content').style.height = 'auto'
    }
});
function showModalLI(){
    document.querySelector('#login-form-re').style.visibility = 'inherit';
    document.querySelector('#login-form-re').style.opacity = '1';
}
function hideModalLI(){
    document.querySelector('#login-form-re').style.visibility = 'hidden';
    document.querySelector('#login-form-re').style.opacity = '0';
}
function showModalSU(){
    document.querySelector('#sign-re-form').style.visibility = 'inherit';
    document.querySelector('#sign-re-form').style.opacity = '1';
}
function hideModalSU(){
    document.querySelector('#sign-re-form').style.visibility = 'hidden';
    document.querySelector('#sign-re-form').style.opacity = '0';
}
$(document).ready(function (){
    $.ajax({
        url : "https://uniqluxury.com.mx/wp-json/de3/v1/gtGllrPrpFrSl",
        type : "GET",
        dataType: "json",
        data : {current_lang: language},
        beforeSend: function() {
            document.querySelector('#load-div').style.visibility = 'inherit';
            document.querySelector('#load-div').style.opacity = '1';
        }
    }).done(function (res){
        var singleTop = '';
        var singleTopBack = '';
        res.forEach(function (valor, indice, array){

            if (valor.PROP_TYPE === 'House'){
                sliderRefClass = 'house-content';
            }else if (valor.PROP_TYPE === 'Condo'){
                sliderRefClass = 'condo-content';
            }else if (valor.PROP_TYPE === 'Apartment'){
                sliderRefClass = 'apartment-content';
            }

            singleTop = singleTop + '<a href="'+valor.URL_+'" id="prod-real-'+valor.POST_SLUG+'" class="'+sliderRefClass+' img-box">\n' +
                '            <div>\n' +
                '                <span class="country-real-estate">'+valor.COUNTRY+'</span>\n' +
                '                <span class="local-real-est">'+valor.CITY+'</span>\n' +
                '            </div>\n' +
                '        </a>';
            singleTopBack = singleTopBack+'#prod-real-'+valor.POST_SLUG+'{\n' +
                '        background-image: url("'+valor.URL_IMG+'");\n' +
                '        text-decoration: none;\n' +
                '    }';
        });

        document.querySelector('#gall-prop').innerHTML = singleTop + '<style>'+singleTopBack+'</style>';
        var slider =  document.querySelector('#gall-prop');

       
    });

    $.ajax({
        url : "https://uniqluxury.com.mx/wp-json/de3/v1/gtGllrPrpFrRnt",
        type : "GET",
        dataType: "json",
        data : {current_lang: language}
    }).done(function (res){
        var singleTop = '';
        var singleTopBack = '';
        res.forEach(function (valor, indice, array){

            if (valor.PROP_TYPE === 'House'){
                sliderRefClass = 'house-content';
            }else if (valor.PROP_TYPE === 'Condo'){
                sliderRefClass = 'condo-content';
            }else if (valor.PROP_TYPE === 'Apartment'){
                sliderRefClass = 'apartment-content';
            }

            singleTop = singleTop + '<a href="'+valor.URL_+'" id="prod-real-'+valor.POST_SLUG+'" class="'+sliderRefClass+' img-box-rent">\n' +
                '            <div>\n' +
                '                <span class="country-real-estate">'+valor.COUNTRY+'</span>\n' +
                '                <span class="local-real-est">'+valor.CITY+'</span>\n' +
                '            </div>\n' +
                '        </a>';
            singleTopBack = singleTopBack+'#prod-real-'+valor.POST_SLUG+'{\n' +
                '        background-image: url("'+valor.URL_IMG+'");\n' +
                '        text-decoration: none;\n' +
                '    }';
        });

        document.querySelector('#gall-prop-2').innerHTML = singleTop + '<style>'+singleTopBack+'</style>';
       
    });

var data = [
    {
        "POST_ID": "20950",
        "POST_SLUG": "Isla San Cristobal",
        "NAME_DEV": "Isla San Cristobal",
        "URL_": "https://fmmundo.com/wp-content/uploads/2022/08/islas-galapagos-fm-mundo.jpg",
        "URL_IMG": "https://fmmundo.com/wp-content/uploads/2022/08/islas-galapagos-fm-mundo.jpg",
        "COUNTRY": "Ecuador",
        "CITY": "Galápagos",
        "PROP_TYPE": "Condo"
    },
    {
        "POST_ID": "20951",
        "POST_SLUG": "Mitad del mundo",
        "NAME_DEV": "Mitad del mundo",
        "URL_": "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/11/RU-002399-Blog-imagen-noviembre-EC_Descubre-qu%C3%A9-hacer-en-Quito-7-planes-que-no-puedes-perderte-Mitad-del-mundo.jpg",
        "URL_IMG": "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/11/RU-002399-Blog-imagen-noviembre-EC_Descubre-qu%C3%A9-hacer-en-Quito-7-planes-que-no-puedes-perderte-Mitad-del-mundo.jpg",
        "COUNTRY": "Ecuador",
        "CITY": "Quito",
        "PROP_TYPE": "Condo"
    },

    {
        "POST_SLUG": "Quilotoa",
        "NAME_DEV": "Latacunga",
        "URL_": "https://fmmundo.com/wp-content/uploads/2022/08/islas-galapagos-fm-mundo.jpg",
        "URL_IMG": "https://www.turismo.gob.ec/wp-content/uploads/2020/09/320quilotoa-lake-ecuador.jpg",
        "COUNTRY": "Ecuador",
        "CITY": "Quilotoa",
        "PROP_TYPE": "Condo"
    },
    {
        "POST_ID": "20950",
        "POST_SLUG": "Chimborazo",
        "NAME_DEV": "Chimborazo",
        "URL_": "https://fmmundo.com/wp-content/uploads/2022/08/islas-galapagos-fm-mundo.jpg",
        "URL_IMG": "https://www.life.com.ec/wp-content/uploads/2022/01/chimborazo-donde-queda-e1642535203829.jpg",
        "COUNTRY": "Chimborazo",
        "CITY": "Chimborazo",
        "PROP_TYPE": "Condo"
    },
    {
        "POST_ID": "20945",
        "POST_SLUG": "Cuenca",
        "NAME_DEV": "Azuay",
        "URL_": "https://uniqluxury.com.mx/real_estate_luxury/101-park/?lang=en",
        "URL_IMG": "https://imagenes.elpais.com/resizer/jfuhY2S0t95Hg6uImO6aTtOnLQY=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/R24USKLELDZG34WDOLIU4SMCOA.jpg",
        "COUNTRY": "Ecuador",
        "CITY": "Cuenca",
        "PROP_TYPE": "Condo"
    },
    {
        "POST_ID": "20950",
        "POST_SLUG": "Guayaquil",
        "NAME_DEV": "Guayas",
        "URL_": "https://fmmundo.com/wp-content/uploads/2022/08/islas-galapagos-fm-mundo.jpg",
        "URL_IMG": "https://chefandhotel.cl/wp-content/uploads/2023/04/Guayaquil-Ecuador-01-chefandhotel.jpg",
        "COUNTRY": "Ecuador",
        "CITY": "Guayaquil",
        "PROP_TYPE": "Condo"
    },
];

// Iterar sobre los datos y construir el contenido
var devContent = '';
data.forEach(function (valor, indice, array) {
    devContent += '' +
        '<a href="' + valor.URL_ + '" class="dev-img-box">\n' +
        '    <div class="img-content-dev"><img src="' + valor.URL_IMG + '"></div>\n' +
        '    <div class="dev-gallery-label">\n' +
        '        <span class="prop-re-dev-name">' + valor.NAME_DEV + '</span>\n' +
        '        <span class="prop-re-dev-city">' + valor.CITY + '</span>\n' +
        '    </div>\n' +
        '</a>';
});

// Actualizar el contenido en el elemento HTML
document.querySelector('#gallery-developments').innerHTML = devContent;
document.querySelector('#load-div').style.visibility = 'hidden';
document.querySelector('#load-div').style.opacity = '0';


    });


function nextFunction(nextVal){
    var slider =  document.querySelector('#gallery-properties-for-sale .slider-gallery');
    let sliderElements = document.querySelectorAll('.img-box');
    let sliderFirstEl = sliderElements[0];
    let sliderLastEl = sliderElements[4];

    if (1600 < screen.width && screen.width <= 1920){
        marginCarr = 360;
        marginLon = 'px'
    }else
    if (1300 < screen.width && screen.width <= 1600){
        marginCarr = 310;
        marginLon = 'px'
    }else
    if (430 < screen.width && screen.width <= 1300){
        marginCarr = 260;
        marginLon = 'px'
    }else
    if (400 < screen.width && screen.width <= 430){
        marginCarr = 230;
        marginLon = 'px'
    }else
    if (330 < screen.width && screen.width <= 400){
        marginCarr = 210;
        marginLon = 'px'
    }else
    if (screen.width <= 330){
        marginCarr = 190;
        marginLon = 'px'
    }else
    if (screen.width >= 2500){
        marginCarr = 15.5;
        marginLon = 'vw'
    }

    if (nextVal === 1){
        slider.style.marginLeft = '0';
        slider.style.transition = 'all 0.5s';
        setTimeout(function (){
            slider.style.transition = 'none';
            slider.insertAdjacentElement('afterbegin',sliderLastEl);
            slider.style.marginLeft = '-'+marginCarr+marginLon;
        }, 500);
    }else if (nextVal === -1){

        slider.style.marginLeft = '-'+marginCarr*2+marginLon;
        slider.style.transition = 'all 0.5s';
        setTimeout(function (){
            slider.style.transition = 'none';
            slider.insertAdjacentElement('beforeend',sliderFirstEl);
            slider.style.marginLeft = '-'+marginCarr+marginLon;
        }, 500);
    }
}

function nextFunctionRent(nextVal){
    var slider =  document.querySelector('#gallery-properties-for-rent .slider-gallery');
    let sliderElements = document.querySelectorAll('.img-box-rent');
    let sliderFirstEl = sliderElements[0];
    let sliderLastEl = sliderElements[4];

    if (1600 < screen.width && screen.width <= 1920){
        marginCarr = 360;
        marginLon = 'px'
    }else
    if (1300 < screen.width && screen.width <= 1600){
        marginCarr = 310;
        marginLon = 'px'
    }else
    if (430 < screen.width && screen.width <= 1300){
        marginCarr = 260;
        marginLon = 'px'
    }else
    if (400 < screen.width && screen.width <= 430){
        marginCarr = 230;
        marginLon = 'px'
    }else
    if (330 < screen.width && screen.width <= 400){
        marginCarr = 210;
        marginLon = 'px'
    }else
    if (screen.width <= 330){
        marginCarr = 190;
        marginLon = 'px'
    }else
    if (screen.width >= 2500){
        marginCarr = 15.5;
        marginLon = 'vw'
    }

    if (nextVal === 1){
        slider.style.marginLeft = '-'+marginCarr*2+marginLon;
        slider.style.transition = 'all 0.5s';
        setTimeout(function (){
            slider.style.transition = 'none';
            slider.insertAdjacentElement('beforeend',sliderFirstEl);
            slider.style.marginLeft = '-'+marginCarr+marginLon;
        }, 500);
    }else if (nextVal === -1){
        slider.style.marginLeft = '0';
        slider.style.transition = 'all 0.5s';
        setTimeout(function (){
            slider.style.transition = 'none';
            slider.insertAdjacentElement('afterbegin',sliderLastEl);
            slider.style.marginLeft = '-'+marginCarr+marginLon;
        }, 500);
    }
}

function nextFunctionGall(nextVal){
    var slider =  document.querySelector('#gall-art-content');
    let sliderElements = document.querySelectorAll('.img-box-art');
    let sliderFirstEl = sliderElements[0];
    let sliderLastEl = sliderElements[2];

    if (nextVal === 1){
        slider.style.marginLeft = '-200%';
        slider.style.transition = 'all 0.5s';
        setTimeout(function (){
            slider.style.transition = 'none';
            slider.insertAdjacentElement('beforeend',sliderFirstEl);
            slider.style.marginLeft = '-100%';
        }, 500);
    }else if (nextVal === -1){
        slider.style.marginLeft = '0';
        slider.style.transition = 'all 0.5s';
        setTimeout(function (){
            slider.style.transition = 'none';
            slider.insertAdjacentElement('afterbegin',sliderLastEl);
            slider.style.marginLeft = '-100%';
        }, 500);
    }
}

window.addEventListener('resize', start);
function start(){
    var slider =  document.querySelector('#gall-prop');
    var slider2 =  document.querySelector('#gall-prop-2');

    if (1600 < screen.width && screen.width <= 1920){
        marginCarr = 360;
        marginLon = 'px'
    }else
    if (1300 < screen.width && screen.width <= 1600){
        marginCarr = 310;
        marginLon = 'px'
    }else
    if (430 < screen.width && screen.width <= 1300){
        marginCarr = 260;
        marginLon = 'px'
    }else
    if (400 < screen.width && screen.width <= 430){
        marginCarr = 230;
        marginLon = 'px'
    }else
    if (330 < screen.width && screen.width <= 400){
        marginCarr = 210;
        marginLon = 'px'
    }else
    if (screen.width <= 330){
        marginCarr = 190;
        marginLon = 'px'
    }else
    if (screen.width >= 2500){
        marginCarr = 15.5;
        marginLon = 'vw'
    }
    console.log(marginCarr+marginLon);
    slider.style.marginLeft = '-'+marginCarr+marginLon;
    slider2.style.marginLeft = '-'+marginCarr+marginLon;
}
const wrapper = document.querySelector('#gall-prop');
let pressed = false
let startX = 0
let finalX = 0



function position(event) {
    pressed = true;
    event.preventDefault();
    startX = event.touches[0].clientX;

    console.log('drag');
    console.log(startX)
}

function positionMove(event) {

    if (pressed === true){
        event.preventDefault();
        finalX = event.touches[0].clientX;

        console.log('drag move');
    }
}

function positionEnd(event){
    pressed = false;
    event.preventDefault();
    console.log('drag end');
    console.log(finalX)

    if (startX < finalX){
        nextFunction(-1)
    }else if (startX > finalX){
        nextFunction(1)
    }
}


const wrapperR = document.querySelector('#gall-prop-2');
let pressedR = false
let startXR = 0
let finalXR = 0

function positionRent(event) {
    pressedR = true;
    event.preventDefault();
    startXR = event.touches[0].clientX;
}

function positionMoveRent(event) {

    if (pressedR === true){
        event.preventDefault();
        finalXR = event.touches[0].clientX;

    }
}

function positionEndRent(event){
    pressedR = false;
    event.preventDefault();

    if (startXR < finalXR){
        nextFunctionRent(-1)
    }else if (startXR > finalXR){
        nextFunctionRent(1)
    }
}


const wrapperG = document.querySelector('#gall-art-content');
let pressedG = false
let startXG = 0
let finalXG = 0

function positionGall(event) {
    pressedG = true;
    event.preventDefault();
    startXG = event.touches[0].clientX;
}

function positionMoveGall(event) {

    if (pressedG === true){
        event.preventDefault();
        finalXG = event.touches[0].clientX;

    }
}

function positionEndGall(event){
    pressedG = false;
    event.preventDefault();

    if (startXG < finalXG){
        nextFunctionGall(-1)
    }else if (startXG > finalXG){
        nextFunctionGall(1)
    }
}

function saleToSearch(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //href="https://uniqluxury.com.mx/real-estate-search/?property_use=Sale"
    if (urlParams.has('lang')){
        var search = JSON.stringify({current_page: "1", use_type: "Sale"})
    }else {
        var search = JSON.stringify({current_page: "1", use_type: "Venta"})
    }
    localStorage.setItem("realsearch", search);
    var pages = 1;
    localStorage.setItem("realPage", pages);
    var currentTab = 1;
    localStorage.setItem("realcurrentTab", currentTab);

    if (urlParams.has('lang')){
        window.location.href = "https://uniqluxury.com.mx/real-estate-search/?lang=en&ext_search=1";
    }else {
        window.location.href = "https://uniqluxury.com.mx/real-estate-search/?ext_search=1";
    }
}

function rentToSearch(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('lang')){
        var search = JSON.stringify({current_page: "1", use_type: "Rent"})
    }else {
        var search = JSON.stringify({current_page: "1", use_type: "Renta"})
    }

    localStorage.setItem("realsearch", search);
    var pages = 1;
    localStorage.setItem("realPage", pages);
    var currentTab = 1;
    localStorage.setItem("realcurrentTab", currentTab);

    if (urlParams.has('lang')){
        window.location.href = "";
    }else {
        window.location.href = "";
    }
}

function devToSearch(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('lang')){
        var search = JSON.stringify({current_page: "1", prop_type: "Condo"})
    }else {
        var search = JSON.stringify({current_page: "1", prop_type: "Condo"})
    }
    localStorage.setItem("realsearch", search);
    var pages = 1;
    localStorage.setItem("realPage", pages);
    var currentTab = 1;
    localStorage.setItem("realcurrentTab", currentTab);

    if (urlParams.has('lang')){
        window.location.href = "";
    }else {
        window.location.href = "";
    }
}



$(document).ready(function () {

    window.addEventListener('resize', function (){
        var slider =  document.querySelectorAll('.slider-gallery');


        /*calcGeneralMargin();*/
        if (1600 < window.innerWidth && window.innerWidth <= 1920){
            marginCarr = 360;
            marginLon = 'px'
        }else
        if (1300 < window.innerWidth && window.innerWidth <= 1600){
            marginCarr = 310;
            marginLon = 'px'
        }else
        if (430 < window.innerWidth && window.innerWidth <= 1300){
            marginCarr = 260;
            marginLon = 'px'
        }else
        if (400 < window.innerWidth && window.innerWidth <= 430){
            marginCarr = 230;
            marginLon = 'px'
        }else
        if (330 < window.innerWidth && window.innerWidth <= 400){
            marginCarr = 210;
            marginLon = 'px'
        }else
        if (window.innerWidth <= 330){
            marginCarr = 190;
            marginLon = 'px'
        }else
        if (window.innerWidth >= 2500){
            marginCarr = 15.5;
            marginLon = 'vw'
        }

        $(".slider-gallery").css("margin-left", '-'+marginCarr+marginLon);
    });

    jQuery("#lang-sect").on('change', function (e) {

        var lang = document.querySelector('select[name="lang-selector-drop"]').value;
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (lang === "ENG"){
            if (urlParams.has('lang')){
                console.log("ENG no hace nada")
            }else {
                console.log("ENG cambia idioma")
            }
        }if (lang === "ESP"){
            if (urlParams.has('lang')){
                console.log("ESP cambia idioma")
            }else {
                console.log("ESP no hace nada")
            }
        }

    });

});


function joinTheList(){

    var name = document.querySelector('input[name="input-join-the-list-name"]').value;
    var email = document.querySelector('input[name="input-join-the-list-email"]').value;

    if (name !== '' && email !== '' && validar_email(email) === true){

        var json_value = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "firstname",
                    "value": name
                }
            ],
            "skipValidation": false
        };

        document.getElementById('input-join-the-list-name').classList.remove('resaltarBordeError');
        document.getElementById('input-join-the-list-email').classList.remove('resaltarBordeError');
        document.querySelector('#join-the-list-event').style.color = '#26282B';
        document.querySelector('#join-the-list-event').style.backgroundColor = '#FFFFFF';
        document.querySelector('#join-the-list-event').style.pointerEvents = 'none';
        document.querySelector('#join-the-list-event').style.border = '1px solid #26282B';

        $.ajax({
            url: "https://api.hsforms.com/submissions/v3/integration/submit/21964186/5ad80514-951f-43d8-a1c5-acff5c6b108d",
            type: "POST",
            dataType: "json",
            contentType: 'application/json',
            headers: {
                'Authorization': `Bearer pat-na1-72f52df1-51f2-4aa3-ac48-b812d3d4810b`
            },
            data: JSON.stringify(json_value)
        }).done(function (res){
            console.log(res);

            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            var lang_mail = 'en';
            if (urlParams.has('lang')) {
                lang_mail = 'en';
            } else {
                lang_mail = 'es';
            }
            var jasonEmail = {mail: email, lang: lang_mail};

            $.ajax({
                url : "https://uniqluxury.com.mx/wp-json/de3/v1/sndCntcEmail",
                type : "POST",
                dataType: "json",
                data :jasonEmail
            }).
            done(function(res) {
                console.log(res);
            });

        }).then(function () {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            if (urlParams.has('lang')) {
                document.querySelector('#form-contact-real').innerHTML = '<span class="join-the-list-success desc-label-prop-type" style="color: #DF991B; width: 100%;">Your form has been sent successfully.</span>';
            } else {
                document.querySelector('#form-contact-real').innerHTML = '<span class="join-the-list-success desc-label-prop-type" style="color: #DF991B; width: 100%;">Su formulario ha sido enviado con Ã©xito.</span>';
            }
        })
    }else {
        if (name === '') {
            console.log('name');
            document.getElementById('input-join-the-list-name').classList.add('resaltarBordeError');
        }
        else{
            console.log('name completo');
            document.getElementById('input-join-the-list-name').classList.remove('resaltarBordeError');
        }

        if (email === '' || validar_email(email) !== true) {
            console.log('email');
            document.getElementById('input-join-the-list-email').classList.add('resaltarBordeError');
        }
        else{
            console.log('email completo');
            document.getElementById('input-join-the-list-email').classList.remove('resaltarBordeError');
        }
    }
}
function validar_email( email ){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function hamMenuDisp(){
    document.querySelector('#ham-menu-unq-xp').style.display = 'grid';
}
function hamMenuClose(){
    document.querySelector('#ham-menu-unq-xp').style.display = 'none';
}

function langGeSelector(lang){
    const queryString2 = window.location.search;
    const urlParams = new URLSearchParams(queryString2);

    const queryString = window.location;

    let urlPrueba = new URL(queryString.toString());
    let params = new URLSearchParams(urlPrueba.search);
    var finalParams = params.toString();

    console.log(params.toString());


    if (lang === "ENG"){
        if (urlParams.has('lang')){
            console.log("ENG no hace nada")
        }else {
            if (params.toString() === ''){
                finalParams = '?lang=en';
            }else {
                finalParams ='?lang=en&'+params.toString();
            }
            let urlnew = urlPrueba.origin.toString()+urlPrueba.pathname.toString()+finalParams;
            console.log(urlnew);
            window.location.href = urlnew;
        }
    }if (lang === "ESP"){
        if (urlParams.has('lang')){
            params.delete('lang');

            if (params.toString() === ''){
                finalParams = '';
            }else {
                finalParams = '?'+params.toString();
            }
            let urlnew = urlPrueba.origin.toString()+urlPrueba.pathname.toString()+finalParams;
            window.location.href = urlnew;
            console.log(urlnew);
        }else {
            console.log("ESP no hace nada")
        }
    }
}

