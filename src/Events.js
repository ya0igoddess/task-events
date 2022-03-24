/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Удали меня';
    btn.onclick = () => btn.remove();
    document.body.appendChild(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    arr.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML = element;
        li.onmouseover = (event) =>
            event.target.setAttribute('title', event.target.innerHTML);
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';
    a.addEventListener('click', (event) => {
        if (event.target.innerHTML == 'tensor')
            event.target.innerHTML =
                event.target.innerHTML + ' ' + event.target.href;
    });
    document.body.appendChild(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let liCreator = function () {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.onclick = (event) => (event.target.innerHTML += '!');
        return li;
    };
    let ul = document.createElement('ul');
    ul.appendChild(liCreator());
    document.body.appendChild(ul);

    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.onclick = () => ul.appendChild(liCreator());
    document.body.appendChild(button);
}
