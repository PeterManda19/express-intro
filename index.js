import { engine } from 'express-handlebars';
import express from 'express';

let app = express();

// app.get("/", function(req, res){
//   res.send("Bill Settings WebApp");
// });

// Set up Handlebars view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Set the 'main' layout as the default layout
app.set('views', './views');
app.set('view options', { layout: 'main' });

// Serve static resources from the 'public' folder
app.use(express.static('public'));

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});

app.get('/', function (req, res) {
  res.render('home');
});
