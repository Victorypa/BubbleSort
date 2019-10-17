let a = [50, 4, 12, 1, 3, 7, 6];

// BubbleSort

// i-0 по индексу элемент, j=1й элемент
for (let i = 0; i < a.length; i++) {
    // Перебрали i, перебираем j
    for (let j = i; j < a.length; j++) {
        // Если 50 > 4, то его  index меняется на i, вместо 50 ставим 4.
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

// let nav = document.querySelector('#nav');
// replacedNode = nav.replaceChild(nav.children[1], nav.children[0]);
// console.log(replacedNode);

// nav.appendChild(replacedNode)

document.querySelector('#sort-asc').onclick = function() {
    mySort('data-price');
}
document.querySelector('#sort-desc').onclick = function() {
    mySortDesc('data-price');
}

document.querySelector('#sort-rating').onclick = function() {
    mySortDesc('data-rating');
}

function mySort(sortType) {
    // Берем родителя
    let nav = document.querySelector('.goods-wrap');
    // начинаем перебирать всех его детей
    for (let i = 0; i < nav.children.length; i++) {

        for (let j = i; j < nav.children.length; j++) {
            // Перебор, приведение типа из дата-атр к числу
            // Сраниваем первого ребенка со вторым по аттрибуту
            if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
                // Если первый больше, то вырезаем его и храним в replacedNode
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                // И добавляем его  из replacedNode и он уже становится 2м
                insertAfter(replacedNode, nav.children[i]);
            }

        }
    }

}

// По убыванию

function mySortDesc(sortType) {

    let nav = document.querySelector('.goods-wrap');

    for (let i = 0; i < nav.children.length; i++) {

        for (let j = i; j < nav.children.length; j++) {

            if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {

                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);

                insertAfter(replacedNode, nav.children[i]);
            }

        }
    }

}

function insertAfter(elem, refElement) {
    return refElement.parentNode.insertBefore(elem, refElement.nextSibling)
}