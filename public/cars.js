const carsBrands = document.querySelector('.carBrands');

// templatate from dom
const carsTemplate = document.querySelector('.template').innerHTML;

// compile template
const carsTemplateText = Handlebars.compile(carsTemplate);

axios
    .get('http://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        carsBrands.innerHTML = carsTemplateText({
            cars: result.data
        })
    })

// colors
const colorsList = document.querySelector('.colorList');
const colorTemplate = document.querySelector('.colorTemp').innerHTML;
const colorTemplateText = Handlebars.compile(colorTemplate);

axios
    .get('http://api-tutor.herokuapp.com/v1/colors')
    .then(function (colorData) {
        const html = colorTemplateText({
            colors: colorData.data
        })
        colorsList.innerHTML = html;
    })

// brands
const makesList = document.querySelector('.carMakes');
const makesTemplate = document.querySelector('.makeTemp').innerHTML
const makesTemplateText = Handlebars.compile(makesTemplate);

axios
    .get('http://api-tutor.herokuapp.com/v1/makes')
    .then(function (makesData) {
        // console.log(makesData);
        makesList.innerHTML = makesTemplateText({
            brands: makesData.data
        })
    })