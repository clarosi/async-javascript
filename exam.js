const addBtn = ({ id, value }) => {
  const ele = document.createElement('input');

  ele.setAttribute('type', 'button');
  ele.setAttribute('id', id);
  ele.setAttribute('value', value);
  ele.setAttribute('onclick', `btnClick(${id})`);

  const con = document.getElementById('button-container');
  con.appendChild(ele);
};

const btnClick = num => {
  alert(num);
};

const addButtons = () => {
  let i = 1;
  while (i <= 20) {
    const obj = { id: i, value: `Button #${i}` };
    addBtn(obj);
    i++;
  }
};

addButtons();
