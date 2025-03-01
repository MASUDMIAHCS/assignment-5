//for card1
document.getElementById('button1').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Succesfully');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    let taskValue=parseInt(document.getElementById('task').innerText);
    taskValue--;
    document.getElementById('task').innerText=taskValue;
    let element=document.createElement('p');
    element.setAttribute('id','activity1');
    let parrentActivity=document.getElementById('parrent1');
    parrentActivity.appendChild(element);
    let container1=document.getElementById('activity1');
    container1.style.backgroundColor='lightgray';
    container1.style.borderRadius='8px';
    container1.style.marginTop='20px';
    container1.style.padding='10px';
    container1.style.fontSize='12px';
    container1.style.margin='10px';
    let date=new Date().toLocaleTimeString();
    container1.innerText=`You have completed this task Fix Mobile Button issue at ${date}`;
    document.getElementById('button1').setAttribute('disabled',true);

})
//for card2
document.getElementById('button2').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Succesfully');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    let taskValue=parseInt(document.getElementById('task').innerText);
    taskValue--;
    document.getElementById('task').innerText=taskValue;
    let element=document.createElement('p');
    element.setAttribute('id','activity2');
    let parrentActivity=document.getElementById('parrent1');
    parrentActivity.appendChild(element);
    let container1=document.getElementById('activity2');
    container1.style.backgroundColor='lightgray';
    container1.style.borderRadius='8px';
    container1.style.marginTop='20px';
    container1.style.padding='10px';
    container1.style.fontSize='12px';
    container1.style.margin='10px';
    let date=new Date().toLocaleTimeString();
    container1.innerText=`You have completed this task Fix Mobile Button issue at ${date}`;
    document.getElementById('button2').setAttribute('disabled',true);
})
//for card3
document.getElementById('button3').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Succesfully');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    let taskValue=parseInt(document.getElementById('task').innerText);
    taskValue--;
    document.getElementById('task').innerText=taskValue;
    let element=document.createElement('p');
    element.setAttribute('id','activity3');
    let parrentActivity=document.getElementById('parrent1');
    parrentActivity.appendChild(element);
    let container1=document.getElementById('activity3');
    container1.style.backgroundColor='lightgray';
    container1.style.borderRadius='8px';
    container1.style.marginTop='20px';
    container1.style.padding='10px';
    container1.style.fontSize='12px';
    container1.style.margin='10px';
    let date=new Date().toLocaleTimeString();
    container1.innerText=`You have completed this task Fix Mobile Button issue at ${date}`;
    document.getElementById('button3').setAttribute('disabled',true);
})
//for card4
document.getElementById('button4').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Succesfully');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    let taskValue=parseInt(document.getElementById('task').innerText);
    taskValue--;
    document.getElementById('task').innerText=taskValue;
    let element=document.createElement('p');
    element.setAttribute('id','activity4');
    let parrentActivity=document.getElementById('parrent1');
    parrentActivity.appendChild(element);
    let container1=document.getElementById('activity4');
    container1.style.backgroundColor='lightgray';
    container1.style.borderRadius='8px';
    container1.style.marginTop='20px';
    container1.style.padding='10px';
    container1.style.fontSize='12px';
    container1.style.margin='10px';
    let date=new Date().toLocaleTimeString();
    container1.innerText=`You have completed this task Fix Mobile Button issue at ${date}`;
    document.getElementById('button4').setAttribute('disabled',true);
})
//for card5
document.getElementById('button5').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Succesfully');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    let taskValue=parseInt(document.getElementById('task').innerText);
    taskValue--;
    document.getElementById('task').innerText=taskValue;
    let element=document.createElement('p');
    element.setAttribute('id','activity5');
    let parrentActivity=document.getElementById('parrent1');
    parrentActivity.appendChild(element);
    let container1=document.getElementById('activity5');
    container1.style.backgroundColor='lightgray';
    container1.style.borderRadius='8px';
    container1.style.marginTop='20px';
    container1.style.padding='10px';
    container1.style.fontSize='12px';
    container1.style.margin='10px';
    let date=new Date().toLocaleTimeString();
    container1.innerText=`You have completed this task Fix Mobile Button issue at ${date}`;
    document.getElementById('button5').setAttribute('disabled',true);
})
//for card6
document.getElementById('button6').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Succesfully');
    let navValue=parseInt(document.getElementById('navber-value').innerText);
    navValue++;
    document.getElementById('navber-value').innerText=navValue;
    let taskValue=parseInt(document.getElementById('task').innerText);
    taskValue--;
    document.getElementById('task').innerText=taskValue;
    let element=document.createElement('p');
    element.setAttribute('id','activity6');
    let parrentActivity=document.getElementById('parrent1');
    parrentActivity.appendChild(element);
    let container1=document.getElementById('activity6');
    container1.style.backgroundColor='lightgray';
    container1.style.borderRadius='8px';
    container1.style.marginTop='20px';
    container1.style.padding='10px';
    container1.style.fontSize='12px';
    container1.style.margin='10px';
    let date=new Date().toLocaleTimeString();
    container1.innerText=`You have completed this task Fix Mobile Button issue at ${date}`;
    document.getElementById('button6').setAttribute('disabled',true);
})
//clearing section
document.getElementById('clear').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('activity1').style.display='none';
    document.getElementById('activity2').style.display='none';
    document.getElementById('activity3').style.display='none';
    document.getElementById('activity4').style.display='none';
    document.getElementById('activity5').style.display='none';
    document.getElementById('activity6').style.display='none';
})
