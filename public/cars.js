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