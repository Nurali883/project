// _____________________ Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму___________________________
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// alert(a + b)

// function readNumber = +prompt('Введите число')
// let person = 'Икаев'
// const lastName = ['Джамулаев', 'Болтиев', 'Цуев', 'Муртазалиев', 'Таймасханов', 'Икаев', 'Дасаев', 'Малаев']

// for (lastName) {
//     if ( lastName === 'Икаев') {
//         console.log('Поступил')
//     } else {
//         console.log('Не поступил')
//     }
// }
// let out = document.getElementById('out')
// let tmp = ''

// for (i=4; i<=400; i++) {
//     tmp = tmp + i + ' '
// }

// out.innerHTML = a

// Вывести числа в последовательности 4 7 10 13 с помощью цикла \\

// let a = ''
// for (i=4; i<=13; i=i+3) {
//     a = a + i + ' '
// }
// out.innerHTML = a

// Вывести число 654 653 652 до нуля \\

// let a = ''

// for (i=654; i>=0; i--) {
//     a = a + i + ' '
// }
// out.innerHTML = a

// Вывести все годы с 1983 до 2022 //

// let a = ''
//  for (i=1983; i<=2022; i++) {
//     a = a + i + ' '
//  }
//  out.innerHTML = a

// Вывести числа -4 -2 0 2 4 ... до 100 //

// let a = ''

// for (i=-4; i<=100; i=i+2) {
//     a = a + i + ' '
// }
// out.innerHTML = a

// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9 //

// let a = ''
// for (i=1; i<=9; i++) {
//     a = a + 7 + ' * ' + i + ' = ' + i*7 + '<br>'
// }
// out.innerHTML = a 

// Выведите с помощью цикла коды спецсиволов от 1000 до 2000. Спецсимвол получается комбинацией &#число. Например: &$1222 //

// let a = ''

// for (i=1000; i<=5000; i++) {
//     a = a + '&#' + i + ' '
// }
// out.innerHTML = a

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. //

// let arr = [1, 2, 3, 4, 5]

// for (i = 0; i<arr.length; i++) {
//     document.write(arr[i] + '<br>')
// }
// out.innerHTML = arr

// let people = ['Таймасханов', 'Муртазалиев', 'Болтиев', 'Цуев', 'Икаев', 'Малаев', 'Дасаев']

// for (i=0; i<people.length; i++) {
//    document.write(people.indexOf(4))
// }

// function reverseNumber(a) {
//    a = a + ''
//    return(
//       a.split('').reverse().join('')
//    )
//   }
//    console.log(reverseNumber(123))

// 1) Создать переменную numberOfFilms и в нее поместить ответ отпользователя на вопрос: "Сколько фильмов вы уже посмотрели?"//

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 2) Создать объект personalMovieDB и в него поместить такие свойства: 
//    - count - сюда передается ответ на первый вопрос 
//    - movies - в это свойство поместить пустой объект 
//    - actors - тоже поместить пустой объект 
//    - genres - сюда поместить пустой массив 
//    - privat - в это свойтсво поместить boolean( логическое) значение false

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3) Задайте пользователю по два раза вопросы: 
//   - "Один из последних просмотренных фильмов?"
//   - "На сколько оцените его?"
//  Ответы стоит поместить в отдельные переменные
//  Записать ответы в объект movies в формате:
//    movies: {
//      'logan': '8.1'
//    }

let lastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
    filmRating1 = prompt('На сколько оцените фильм?', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
    filmRating2 = prompt('На сколько оцените фильм?', '');
personalMovieDB.movies[lastFilm1] = filmRating1, [lastFilm2] = filmRating2;

console.log(personalMovieDB);