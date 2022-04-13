// fetch
const baseURL = 'https://api.sampleapis.com/coffee/hot';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

function displayData(data) {
  document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
}


andres


    // fetch
    const baseURL = 'https://api.sampleapis.com/coffee/hot';
    fetch(baseURL)
        .then(resp => resp.json())
        .then(data => {
            displayData(data)

            for (cafe of data) {
                console.log(cafe);
            }
        });

    function displayData(data) {
        document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    }

    console.log(data);


    // let nodoContenido = '';
    // for (cafe of baseURL){
    //     console.log('cafe es:', cafe)
    //     nodoContenido = nodoContenido + productoHTMLCard(cafe);
    // }
    // console.log(nodoContenido);

function productoCard(cafe) {
    return `<div class="card" style="width: 18rem;">
                Lo quiero
                <i class="far fa-grin-hearts"></i>
            </button>
        </div>
    </div>`;
}