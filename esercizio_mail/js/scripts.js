
const input = document.querySelector('button');

input.addEventListener('click' , function(){

    const userInput = document.getElementById('user-email').value;
    const validValues = ['alessio@gmail.com' , 'mauro@gmail.com' , 'marco@gmail.com'];
    const container = document.querySelector('main > div');

    if (userInput == validValues[0] || [1] || [3]){
        container.innerHTML += `
        <div class="card border-success m-auto mt-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-success"><i class="fa-solid fa-square-check"></i></h5>
                <h6> Email inserita correttamente </h6>
            </div>
        </div>
        
        `

    }else{
        alert("Insersci una email valida")
    }

 
}
);

