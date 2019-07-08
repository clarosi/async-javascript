const addBtn = ({ id, value, name }) => {
  const ele = document.createElement('input');

  ele.setAttribute('type', 'button');
  ele.setAttribute('id', id);
  ele.setAttribute('value', value);
  ele.setAttribute('name', name);
  ele.setAttribute('style', 'padding: 10px; margin: 0 15px 10px 0');
  ele.setAttribute('onclick', `btnClick(${id})`);

  const parent = document.getElementById('root');
  parent.appendChild(ele);
};

const btnClick = num => {
  alert(`btn ${num}`);
};

let i = 1;
while (i <= 20) {
  const obj = { id: i, value: `btn #${i}`, name: `btn${i}` };
  addBtn(obj);
  i++;
}
