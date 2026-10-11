//GRAB REFERENCES TO THE SIGN UP FORM
const signup = document.querySelector("#signup");
const calculateBtn = document.querySelector("#signup input[type=button]");
calculateBtn.addEventListener("click", calculateSupplies);

//GRAB REFERENCES TO THE DELETE LOCAL STORAGE
const display = document.querySelector("#display");
const details = document.querySelector("#display div");

//CHECK TO SEE IF LOCAL STORAGE DATA ALREADY EXISTS
display.classList.add("hide")

//FUNCTION TO CALCULATE SUPPLES
function calculateSupplies() {
    const width = document.querySelector("#width");
    const depth = document.querySelector("#depth");
    const height = document.querySelector("#height");
    const quality = document.querySelector("#quality");
    //CHECK IF THE INPUT VALUE IS VALID
    if (width.value && depth.value && height.value && quality.value && Number(width.value) > 0 &&
        Number(depth.value) > 0 &&
        Number(height.value) > 0) {
        // SET INPUT VALUE
        const roomWidth = Number(width.value);
        const roomDepth = Number(depth.value);
        const wallHeight = Number(height.value);
        const coverage = Number(quality.value);

        //CALCULATE ROOM MEASUREMENTS
        const ceilingArea = roomWidth * roomDepth;
        const perimeter = (roomWidth + roomDepth) * 2;
        const wallArea = perimeter * wallHeight;

        //CALCULATE PAINT SUPPLIES
        const primer = Math.ceil(
            (wallArea + ceilingArea) / coverage
        );
        const flatPaint = Math.ceil(ceilingArea / coverage);
        const semiGloss = Math.ceil(wallArea / coverage);

        //CALCULATE CARPET SUPPLIES
        const carpet = Math.ceil(ceilingArea / 9);
        const tackStrip = perimeter;

        const paintName = quality.selectedOptions[0].textContent;

        //DISPLAY RESULTS
        display.classList.remove("hide");

        details.innerHTML = `
        <h3>Paint Supplies</h3>
        <p>${primer} gallons of primer paint</p>
        <p>${flatPaint} gallons of ${paintName}  flat ceiling paint</p>
        <p>${semiGloss} gallons of ${paintName}  semi-gloss wall paint</p>

        <h3>Carpet Supplies</h3>
        <p>${carpet} square yards of carpet</p>
        <p>${tackStrip} linear feet of tack strip</p>
       `;

    } else {
       //DISPLAY ERROR MESSAGE
       display.classList.remove("hide");

       details.innerHTML = `
           <p class="error">
               Please complete all fields with positive numbers
               and select a paint quality.
           </p>
       `; 
    }

}