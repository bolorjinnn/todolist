const inputEl=document.getElementsByTagName('input')[0];
const btn=document.getElementsByTagName('button')[0];
const olEl=document.getElementsByTagName('ol')[0];
btn.addEventListener('click',function(){
   // alert('clicked');
   if(inputEl.value==''){
    alert('its empty!');
   }else{
    // document.createElement-->shine tag uusgeh fuction
    // click ->create li
    const liEl=document.createElement('li');
    liEl.innerText=inputEl.value;
    console.log(liEl);
    // append(),appendChild() -->push tag dotor uur tag nemeh function
    olEl.appendChild(liEl);
    inputEl.value="";
    const delBtn=document.createElement('button');
    console.log('delBtn');
    delBtn.innerHTML='<i class="bi bi-trash"></i>'
    liEl.appendChild(delBtn);
    const checkBtn=document.createElement('button');
    console.log('checkBtn'); 
    checkBtn.innerHTML='<i class="bi bi-check"></i>'
    liEl.appendChild(checkBtn);
    // className -> tag-d class ner uguh func
    delBtn.className = 'delete';
    checkBtn.className = 'check';
    saveData();
   }
});
olEl.addEventListener('click',(e)=>{
    // ()=> --> func/shugaman func
console.log(e.target);
let target =e.target;
let parentEl =target.parentElement;
let del=parentEl.parentElement;
let check=parentEl.parentElement;
if(target.className=='bi bi-trash' ||target.className =='delete'){
    // .remove() -> ustgah function
    del.remove();
    // target = <li><button><button><li>
}else if(target.className=="bi bi-check"){
//    classList, className ->tag deer class ner uguh
//  classList --> toggle
check.classList.toggle("checked");
}
saveData();
});
//localStorage -->web browseriin data hadgalah sav
// localStorage.setItem('app ner',value)
// localStorage.getItem('app ner')
// setItem-> data hadgalah
// getItem-> hadgalsan datag duudah
localStorage.setItem('name','Bolorjin');
function saveData(){
    localStorage.setItem('todo',olEl.innerHTML);
}
let get;
function getData(){
    get=localStorage.getItem('todo');
    olEl.innerHTML=get;
}
getData();