function drag(target, food) {		//드래그 시작시 호출 할 함수
    food.dataTransfer.setData('Text', target.id);
};
function drop(target, food) {		//드롭시 호출 할 함수
    var id = food.dataTransfer.getData('Text');
    target.appendChild(document.getElementById(id));
    food.preventDefault();
};

// const div = document.getElementById('addList');
// const wholeList = document.getElementById('wholeList');

// div.addEventListener('click',(event) =>{
//     wholeList.innerHTML+='<input type="text" draggable="true" id="text" ondragstart="drag(this, event)" />';

// });



const add_textbox = () => {
    const wholeList = document.getElementById("wholeList");
    const newP = document.createElement('p');
    newP.innerHTML = "<input type='text' draggable='true' id='text' ondragstart='drag(this, event)'><input type='button' value='-' onclick='remove(this)'>";
    wholeList.appendChild(newP);
}

const remove = (obj) => {
    document.getElementById('wholeList').removeChild(obj.parentNode);
}




