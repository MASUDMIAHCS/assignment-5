document.getElementById('button1').addEventListener('click',function(event){
    event.preventDefault();
    alert('this is an alert');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    document.getElementById('button1').setAttribute('disabled',true);

})