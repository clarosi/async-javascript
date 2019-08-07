// function add(num1, num2) {
//   if (num1 && num2) {
//     return num1 + num2;
//   }
//   return function(num3) {
//     return num1 + num3;
//   };
// }

// console.log(add(1, 2));
// console.log(add(1)(2));

// // const arry = [1, 2, 3];
// // console.log(arry.reduce((total, num) => total + num));

// // const arry = [1, 3, 2, 6, 5];

// // //console.log(arry.sort((a, b) => a - b));

// // function x(arry) {
// //   let num = 0;
// //   arry = arry.sort((a, b) => a - b);
// //   arry.forEach((ele, idx) => {
// //     if (ele !== idx + 1 && !num) return (num = idx + 1);
// //   });
// //   return num;
// // }
// // console.log(x(arry));

// // const str = 'i love javascript';
// // tpircsavaj evol i
// // console.log(
// //   str
// //     .split('')
// //     .reverse()
// //     .join('')
// // );

// // const profile = {
// //   name: 'Ian',
// //   getName: () => {
// //     return this.name;
// //   }
// // };

// // console.log(profile.getName());

// // x = 0;
// // console.log(x);
// // let x;

// // const len = grades.length;
// // const ave = grades.reduce((total, num) => total + num) / len;
// // return ave;

// /* Now, given a list of students, please compute the class average.
//  * Example:
//  * const students = [
//  *   { name: 'Vincent', grades: [59, 70, 83] },
//  *   { name: 'John', grades: [25, 47, 95] },
//  *   { name: 'Sabrina', grades: [63, 70, 74] },
//  *   { name: 'Claire', grades: [82, 68, 94] },
//  *   { name: 'Miles', grades: [68, 85, 87] },
//  * ];
//  * computeClassAverage(students);
//  */
// //
//   // what is len? I believe it's not correct, you're searching for the total number of grades, not the total number of students
// //}
// // const students = [
// //   { name: 'Vincent', grades: [59, 70, 83] },
// //   { name: 'John', grades: [25, 47, 95] },
// //   { name: 'Sabrina', grades: [63, 70, 74] },
// //   { name: 'Claire', grades: [82, 68, 94] },
// //   { name: 'Miles', grades: [68, 85, 87] }
// // ];

// // function computeClassAverage(students) {
// //   // To complete
// //   let totalGrades = 0;
// //   const len = students.length * 3;
// //   students.forEach(item => {
// //     totalGrades += item.grades.reduce((total, num) => total + num);
// //   });
// //   return totalGrades / len;
// // }

// // console.log(computeClassAverage(students));

// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     posts.push(post);

//     const error = false;
//     if (!error) {
//       return resolve('Success.');
//     }
//     reject('Something went wrong.');
//   }, 2000)

// function createBase(passed) {
//   return function(inner) {
//     return passed + inner;
//   };
// }

// var addToSix = createBase(6);
// console.log(addToSix(10)); // returns 16
// console.log(addToSix(21)); // returns 27

// var x = { a: 1, b: 2 };
// var y = x;
// y.a = 42;
// delete y.b;
// console.log(y.a, y.b);

// const ary = [];
// ary.push('10');
// ary[10] = '10';
// ary[5] = '5';
// console.log(ary.length);

// const promise = new Promise((resolve, reject) => {
//   resolve(10);
//   resolve(20);
//   console.log('promise.');
// });

// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a);
// console.log(b);
// console.log(rest);

// const [a, b, ...rest] = [1, 2, 3, 4];
// console.log(a);
// console.log(b);
// console.log(rest);
