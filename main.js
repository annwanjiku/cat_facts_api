let button = document.querySelector("#button")

function add(){
  fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then((data) => {

    let result = document.querySelector("#result")
    result.textContent = data.fact;

  })
  .catch(error => console.error(error));
 
}

button.addEventListener("click",add);
