function init(){
    document.getElementsByClassName('get-json')[0].addEventListener('click', function(){
        //get json
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/1', true);
        xhr.send(null);

        xhr.onload = function(){
            if(xhr.status == 200){
                var title = document.createTextNode(JSON.parse(xhr.responseText).title);
                var body = document.createTextNode(JSON.parse(xhr.responseText).body);
                var br = document.createElement('br');
                document.getElementsByClassName('info')[0].appendChild(title);
                document.getElementsByClassName('info')[0].appendChild(br);
                document.getElementsByClassName('info')[0].appendChild(body);
            } else {
                alert('error!');
            }
        }

        //fetch
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json));
    });
}
window.addEventListener('load', init);