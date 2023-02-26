function getValueFromInputFildById(giveValidId) {
    const inputFild = document.getElementById(giveValidId);
    const inputValueString = inputFild.value;
    const inputValue = parseFloat(inputValueString);
    inputFild.value= '';
    return inputValue;
    
}
function getInnerTextdById(giveValidId) {
    const getValue = document.getElementById(giveValidId);
    const innerText = getValue.innerText;
    return innerText;
}
function areaCalculateLikeAsTriangle(a, b) {
    const landLength = getValueFromInputFildById(a);
    const height = getValueFromInputFildById(b);
    const areaAllPoint = .5* landLength * height;
    const area = parseFloat(areaAllPoint.toFixed(2))
   
    return area;
}  

function calculateAreaLikeRectangle(x,y) {
    const height = getValueFromInputFildById(x);
    const width = getValueFromInputFildById(y);
    const areaAllPoint = height * width
    const area = parseFloat(areaAllPoint.toFixed(2))
    return area
}
function areaOfEllipse(a, b) {
    const valueOfA = getValueFromInputFildById(a);
    const valueOfB = getValueFromInputFildById(b);
    const ellipseAreaWithPoint = 3.1416 * valueOfA * valueOfB;
    const ellipseArea = ellipseAreaWithPoint.toFixed(2)
    console.log(ellipseArea);
    return ellipseArea;
}
function genarateRandomBackgroundColor() {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const convertToHexa = randomNumber.toString(16);
    const randomColor = '#' + convertToHexa
    return randomColor;
}
let serial = 0;
function dataIncludesToTable(Name, result) {
    const tr = document.createElement('tr');
    tr.classList.add()
    serial++;
    tr.innerHTML = `
    <th>${serial}</th>
    <td>${Name}</td>
    <td>${result} cm<sup>2</sup></td>
    <td><button class="bg-blue-500 px-2 rounded-md">Covert to m<sup>2</sup></button></td>
    `
    const tableContainer = document.getElementById('table-container');
    tableContainer.appendChild(tr)
}
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blogpage.html'
})
document.getElementById('calculate-triangle-area').addEventListener('click', function () {
    const triangleArea = areaCalculateLikeAsTriangle('triangle-b', 'triangle-h')
    const triangle = getInnerTextdById('triangle');
    if (isNaN(triangleArea) || triangleArea === '' || triangleArea === String || triangleArea <=0) {
        return alert("input a valid number")
    }
    else{
         dataIncludesToTable(triangle, triangleArea);
    }
   
})
document.getElementById('calculate-rectangle-area').addEventListener('click', function () {
    const rectangleArea = calculateAreaLikeRectangle("rectangle-w", 'rectangle-l');
    const rectangle = getInnerTextdById('rectangle');
    if (isNaN(rectangleArea) || rectangleArea === '' || rectangleArea === String || rectangleArea <=0) {
        return alert("input a valid number")
    }
    else{
        dataIncludesToTable(rectangle, rectangleArea);
    }
    

})
document.getElementById('calculate-parallelogram-area').addEventListener('click', function () {
    const parallelogramArea = calculateAreaLikeRectangle("Parallelogram-b", "Parallelogram-h");
    const parallelogram = getInnerTextdById('parallelogram');
    if (isNaN(parallelogramArea) || parallelogramArea === '' || parallelogramArea === String || parallelogramArea <=0) {
        return alert("input a valid number")
    }
    else{
        dataIncludesToTable(parallelogram, parallelogramArea);
    }  
})
document.getElementById('calculate-rhombus-area').addEventListener('click', function () {
    const rhombusArea = areaCalculateLikeAsTriangle("rhombus-d1", "rhombus-d2");
    const rhombus = getInnerTextdById('rhombus');
    if (isNaN(rhombusArea) || rhombusArea === '' || rhombusArea === String || rhombusArea <=0) {
        return alert("input a valid number")
    }
    else{
        dataIncludesToTable(rhombus, rhombusArea);
    }
    
})
document.getElementById('calculate-pentagone-area').addEventListener('click', function () {
    const pentagonArea = areaCalculateLikeAsTriangle("pentagone-p", "pentagone-b");
    const pentagon = getInnerTextdById('pentagon');
    if (isNaN(pentagonArea) || pentagonArea === '' || pentagonArea === String || pentagonArea <=0) {
        return alert("input a valid number")
    }
    else{
        dataIncludesToTable(pentagon, pentagonArea);
    }
    
})
document.getElementById('calculate-ellipse-area').addEventListener('click', function () {
    const ellipseArea = areaOfEllipse("ellipse-a", "ellipse-b")
    const ellipse = getInnerTextdById('ellipse');
    if (isNaN(ellipseArea) || ellipseArea === '' || ellipseArea === String || ellipseArea <=0) {
        return alert("input a valid number")
    }
    else{
        dataIncludesToTable(ellipse, ellipseArea);
    }
   
})

