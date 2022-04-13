function bubbleSort(array) {
    for (let i = 0; i < array.length; i++){
        let swap;
        for(let j = 0; j < array.length-1-i; j++){
            if(array[j] > array[j+1]){
                swap = array[j];
                array[j]=array[j+1];
                array[j+1]=swap;
            }
        }
        console.log(`${i+1}회전: ${array}`);
        if(!swap){
            break;
        }
    }
    return array;
}
console.log(bubbleSort([5,2,3,1,4]));


const add_bar = () => {
    const getId = document.getElementById("testid");
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div style="border: solid 1px black; width: 100px; height: 100px;">어쩌라구</div>`;
    getId.appendChild(newDiv);
}

function insert_div(){
    
}