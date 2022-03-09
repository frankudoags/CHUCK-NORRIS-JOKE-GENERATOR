btn = document.querySelector('.get-jokes');

btn.addEventListener('click',getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type=number]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            
            let output = '';

            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });

            } else {
                output += `<li>Something went wrong</li>`;
            }
            document.querySelector('.jokes').innerHTML = output;
            document.querySelector('input[type=number]').value = '';
        }

    };


    xhr.send();

    e.preventDefault();
}