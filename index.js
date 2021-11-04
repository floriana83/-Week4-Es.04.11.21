const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
  const elements = items.map((element) => 
    `<li>
      <h3>${element.name}</h3>
      <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
    </li>`
  );

  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
//   const form = q('form');
  const input = q('form input');
  const list = q('ul');
  const newForm = q('#Add');
  const Inputname = q('#nome');
  const Inputphone = q('#tel');
  const Inputemail = q('#email');

  render(list, data);


  input.addEventListener('keyup', (event) => {
    event.preventDefault();
    const value = input.value.toLowerCase();

    const results = data.filter((element) => 
      element.name.toLowerCase().search(value) > -1 ||
      element.email.toLowerCase().search(value) > -1
    );

    render(list, results);
  });



  newForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newData = {
        name: Inputname.value,
        phone: Inputphone.value,
        email: Inputemail.value,
    }

    data.push(newData);
    
    render (list, data);

  });

}); 