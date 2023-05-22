let btn = document.getElementById('btn');
let parent = document.getElementById('parent');
let txt = document.getElementById('txt');

btn.addEventListener('click', (e)=>{
    
    if(txt.value == ''){
        alert("Enter Some Thing");
    }else{
        let newList = document.createElement('li');
        newList.innerHTML=txt.value;
        newList.className='olist';
        
        // let span = document.createElement('span');
        // span.innerHTML = 'X';
        // newList.appendChild(span);

        parent.appendChild(newList);
    }
    txt.value = '';
    save();
    // console.log(txt);
})

parent.addEventListener("click",function (e){
    if(e.target.tagName === "LI"){
        e.target.remove();
        save();
    }
    console.log(parent);
},false);

function save(){
    localStorage.setItem('data',parent.innerHTML);
}
function showTask(){
    parent.innerHTML= localStorage.getItem('data');
}
showTask();
// let parent = document.getElementById('parent');

// ch.forEach(element => {
//     element.addEventListener('click',(e)=>{
//         parent.remove(e.Target)
//     })
// });
// console.log(ch);