// let form = JSON.parse( localStorage.getItem('records')) ?
// JSON.parse( localStorage.getItem('records')) : [
//     {
//         name: 'shane',
//         color: 'purple'
//     }
// ];

// function addData() {
//     form.push(
//         {
//             name: document.getElementById('name').value,
//             color: document.getElementById('color').value
//         }
//     );
//     localStorage.setItem('records',JSON.stringify(form));
// }

// document.querySelector('#addRecord').addEventListener('click', addData);

// function color(color) {
//     document.body.style.backgroundColor = color;
// }

// function loadData() {
//     console.log(form);
//     // document.body.style.backgroundColor = `${color}`;
// }

// loadData();

// localStorage.removeItem('records');

function getVal(color) {
    // Setting the color
    document.body.style.background = color;
}
function convert(rgb) {
    rgb = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
    function hexCode(i) {
        // Take the last 2 characters and convert
        // them to Hexadecimal.
        return ("0" + parseInt(i).toString(16)).slice(-2);
    }
    return "#" + hexCode(rgb[1]) + hexCode(rgb[2])
                    + hexCode(rgb[3]);
}
function gfg_Run() {
    // Taking the input
    var color = document.getElementById('color').value;
    getVal(color);
    // Getting the Color in RGB format
    var rgb = window.getComputedStyle(el_up).color;
        el_down.innerHTML = "The HexCode value of "
                + color +" is "+ convert(rgb);
}

let lists = JSON.parse(localStorage.getItem("records"))  //records is the key for the getItem method
  ? JSON.parse(localStorage.getItem("records"))  //if 'records' 
  : [
      {
        name: "Shane",
        color: "Purple",
      },
    ];

    function addData() {
        // e.preventDefault();
          lists.push(
              {
              name: document.getElementById("name").value,
              color: document.getElementById("color").value, 
          }
        );
        // Save data to a localstorage
        localStorage.setItem("records", JSON.stringify(lists));
      }
      document.querySelector("#addRecord").addEventListener("click", addData); //Add data when add record button is clicked
      
      
      // Displaying data in table form in the console
      (function loadData() {
        console.table(lists);
      })();

      function remove() {
        document.getElementById('name').value ="";
    document.getElementById('color').value ="";
    document.body.value = "";
      }

      document.querySelector('#reset').addEventListener('click', remove);
        
