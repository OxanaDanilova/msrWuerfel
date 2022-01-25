const cutArr = (arr, num)=> {
arr.splice(num, 1);
console.log('result arr', arr);

}

const randomFunc = (arr)=> {
    console.log('length', arr.length);
    console.log('arr', arr);
    let randomNumb = Math.floor(Math.random()*arr.length);
   
    console.log('random Number', randomNumb);
    console.log('random user', arr[randomNumb]);

    cutArr(arr, randomNumb);

}

const renderArr = (arr)=> {
    const main = document.querySelector('main');
    console.log(main);
    const ul = document.createElement('ul');
    arr.forEach((el)=>{
        const li = document.createElement('li');
        li.innerHTML = el;
        ul.appendChild(li);
    });
    console.log(ul);
    main.appendChild(ul);

}

const arrCreate = ()=> {
    const arr = ['vera', 'alex', 'petr', 'gregor', 'anna'];
    renderArr(arr);
   // randomFunc(arr);
}

arrCreate();