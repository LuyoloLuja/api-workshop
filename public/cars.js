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

// filter
const filterBtn = document.querySelector('.filterBtn');
const displayCars = document.querySelector('.car');
const carElement = document.querySelector("input[name='brand']:checked");
const colorElement = document.querySelector('.colorElement');
const filterTemplate = document.querySelector('.filterTemplate');
const filterTextTemplate = Handlebars.compile(filterTemplate).innerHTML;

filterBtn.addEventListener('click', function(){
    alert('Hello World');
})

axios
    .get('http://api-tutor.herokuapp.com/v1/makes')
    .then(function (filterData) {
        
        displayCars.innerHTML = filterTextTemplate({
            displayCar: filterData.data
        })
    })