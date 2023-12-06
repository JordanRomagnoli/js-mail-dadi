
const input = document.querySelector('button');

input.addEventListener('click' , function(){

    const userInput = document.getElementById('user-email').value;
    const validValues = ['alessio@gmail.com' , 'mauro@gmail.com' , 'marco@gmail.com'];
    const container = document.querySelector('main > div');
    let card = `
    <div class="card border-danger m-auto mt-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-danger"><i class="fa-solid fa-triangle-exclamation"></i></h5>
            <h6> Inserire una email valida </h6>
        </div>
    </div>
    
    `
    for(let i = 0; i < validValues.length; i++){
        
        if (userInput == validValues[i]){
            card = `
            <div class="card border-success m-auto mt-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-success"><i class="fa-solid fa-square-check"></i></h5>
                    <h6> Email inserita correttamente </h6>
                </div>
            </div>
            
            `
            
        }

    }

    
    const cardContainer = document.getElementById('message-element');
    cardContainer.innerHTML = card;
 
}
);

