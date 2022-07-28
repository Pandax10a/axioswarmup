document.querySelector(`#warmup`).addEventListener(`click`, go_to_request);

function go_to_request (find) {
    axios.request({
        url: `https://picsum.photos/200/300`
    }).then(successFunction).catch(failureFunction);
}
// if the api successfully responds, it will take the object inside data array and print the activity
function successFunction(response222) {
    
    document.body.insertAdjacentHTML(`beforeend`, `<img src = "https://picsum.photos/200/300">`);
}
// just in case it fails to receive data from api
function failureFunction(error333333333) {
        document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
    
}

document.querySelector(`#button_2`).addEventListener(`click`, go_to_request_2);

function go_to_request_2 (find) {
    axios.request({
        url: `https://picsum.photos/200/300`,
        params: {
            blur: `10`
        }
    }).then(successFunction2).catch(failureFunction);
}

function successFunction2(find) {
    document.body.insertAdjacentHTML(`beforeend`, `<img src = "https://picsum.photos/200/300?grayscale=true?blur=10">`);
}
