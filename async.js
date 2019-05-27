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

// createPost({ title: 'Post three', body: 'This is post three' })
//   .then(res => {
//     getPost();
//     console.log(res);
//   })
//   .catch(err => console.log(err));

// Async / Await
async function init() {
  await createPost({ title: 'Post three', body: 'This is post three' });
  getPost();
}

init();

// Async / Await with fetch
async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);
}

fetchTodos();
