let express = require('express');
let app = express();
app.listen(3000);
app.set('view engine', 'ejs');
app.set('views', './views');

console.log('http://localhost:3000');

app.get('/', (req, res) => {
    res.render('home');
});