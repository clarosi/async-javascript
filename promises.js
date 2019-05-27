const posts = [
  { title: 'Post one', body: 'This is post one' },
  { title: 'Post two', body: 'This is post two' }
];

function getPost() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        return resolve('Success.');
      }
      reject('Something went wrong.');
    }, 2000);
  });
}

createPost({ title: 'Post three', body: 'This is post three' })
  .then(res => {
    getPost();
    console.log(res);
  })
  .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Promise2 success');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Promise3 success.')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  res => res.json()
);
//.then(json => console.log(json));

Promise.all([promise1, promise2, promise3, promise4]).then(res =>
  console.log(res)
);
