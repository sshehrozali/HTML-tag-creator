// Function to hide or unhide input field
function showHide(tagname) {

    // If already visible
    if (document.getElementById(tagname).style.display == "block") {
        document.getElementById(tagname).style.display = "none";
    }

    // If not visible
    else {
        document.getElementById(tagname).style.display = "block";
    }
}

// Function to create elements
function createfields(no) {

    let elements = ["h1", "span", "p", "a"];
    let newElement = elements[no];


    // Select input field
    let inputBox = document.getElementsByTagName('input')[no].value;
    console.log(inputBox);
    let numofBoxes = parseInt(inputBox);    // Converts string to int

    // Select HTML div element
    div = document.getElementById("scriptElements");

    // Creates desired number of tags
    for (let i = 0; i < numofBoxes; i++) {
        createNewElement = document.createElement(newElement);
        currNo = i + 1;
        createNewElement.innerText = "Hello I am " + newElement + " tag number " + currNo;
        div.appendChild(createNewElement);
    }
}