const form = document.querySelector('form');
const scripts = document.querySelector('#scripts');
const css = document.querySelector('#css');

form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('http://localhost:5000/getLinks', {
        method: 'POST',
        body: new FormData(form)
    });

    let result = await response.json();
    scripts.innerHTML = '';
    result.scripts.forEach((el) => {
        const li = document.createElement('li');
        li.append(el);
        scripts.append(li);
    });
    result.styles.forEach((el) => {
        const li = document.createElement('li');
        li.append(el);
        css.append(li);
    });

};

