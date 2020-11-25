const carsBrands = document.querySelector('.carBrands');
const filterBtn = document.querySelector('.filterBtn');
const displayCars = document.querySelector('.car');
const colors = document.querySelector('.colors');
const filterTemplateText = document.querySelector('.filterTemplate');
const filterTemplate = Handlebars.compile(filterTemplateText.innerHTML);

filterBtn.addEventListener('click', function () {
    
    const selectedMakeElem = document.querySelector("input[name='brand']:checked");
    const selectedMake = selectedMakeElem.value;
    const selectedColor = colors.value;

    const filterURL = `http://api-tutor.herokuapp.com/v1/cars/make/${selectedMake}/color/${selectedColor}`;

    axios
        .get(filterURL)
        .then(function (filterData) {
            
            displayCars.innerHTML = filterTemplate({
                displayCar: filterData.data
            })
        })
})
