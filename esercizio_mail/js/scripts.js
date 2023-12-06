
const input = document.querySelector('button');

input.addEventListener('click' , function(){

    const userInput = document.getElementById('user-email').value;
    const validValues = ['alessio@gmail.com' , 'mauro@gmail.com' , 'marco@gmail.com'];

    if (userInput == validValues[0 , 1 , 2]){
        alert("L'email è stata inserita correttamente");
    }else{
        alert("Insersci una email valida")
    }

 
}
);

