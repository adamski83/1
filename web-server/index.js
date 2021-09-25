const users = [{
    id: 1,
    name: 'Janek',
    email: 'janek@gmail.com',
}, {
    id: 2,
    name: 'Adam',
    email: 'adam@gmail.com',
}, {
    id: 3,
    name: 'Tomasz',
    email: 'tomasz@gmail.com',
}, {
    id: 4,
    name: 'Dawid',
    email: 'dawid@gmail.com',
}, ]

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Witaj');
});
app.get('/kontakt', (req, res) => {
    res.send('Zapraszamy do kontaktu');
});
app.get('/profile', (req, res) => {
    let html = `Znaleziono ${users.length} profile. <br>`;
    users.forEach(user => html +=

        `<a href = '/profile/${user.id}' > ${user.name}(id: ${user.id}) < /a> <br>`)
    res.send(html)
});
app.get('/profile/:id/:mode?', (req, res) => {
    const {
        id,
        mode,
    } = req.params;
    const user = users.find(x => x.id === parseInt(id));
    if (!user) {
        return res.send('Nie ma takiego użytkownika! ');
    }
    let html = `Dane uzytkownika: imię "${user.name}" `;

    if (mode && mode === 'szczegoly') {
        html += `id "${user.id}", email "${user.email}"`;
    }

    res.send(html);
});


app.listen(3000);