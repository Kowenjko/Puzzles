let riddle = document.querySelectorAll('.riddle'),
    answerDiv = document.querySelectorAll('.answer div'),
    answerInput = document.querySelectorAll('.answer input'),
    button = document.querySelectorAll('table td button'),
    help = document.querySelectorAll('.reset button'),
    es = document.querySelectorAll('.es'),
    not = document.querySelectorAll('.not'),
    answerArr = ['Лелека', 'Ставок', 'Чайник', 'Торт', 'Вогонь', 'Цукерка', 'Зошит', 'Вікно', 'Хліб', 'Свічка'];


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (answerInput[i].value == answerArr[i]) {
            riddle[i].style.color = '#fff';
            riddle[i].style.backgroundColor = 'green';
            answerDiv[i].style.display = 'none';
            es[i].style.display = 'block';
            not[i].style.display = 'none';
        }
        else {
            riddle[i].style.backgroundColor = 'red';
            riddle[i].style.color = '#fff';
            answerDiv[i].style.display = 'none';
            not[i].style.display = 'block';
            es[i].style.display = 'none';
        }
    })
}

help[0].addEventListener('click', function () {
    for (let i = 0; i < button.length; i++) {
        answerDiv[i].style.display = 'flex';
        es[i].style.display = 'none';
        not[i].style.display = 'none';
        riddle[i].style.color = '#000';
        riddle[i].style.backgroundColor = '#fff';
        answerInput[i].value = '';
        answerInput[i].placeholder = 'Ваша відповідь';
    }
})

help[1].addEventListener('click', function () {
    for (let i = 0; i < button.length; i++) {
        answerInput[i].placeholder = answerArr[i];
        answerInput[i].value = '';
    }
})
help[2].addEventListener('click', function () {
    for (let i = 0; i < button.length; i++) {
        answerInput[i].value = answerArr[i];

    }
})