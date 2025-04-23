import 'dotenv/config';
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { Liquid } from 'liquidjs';

import bodyParser from 'body-parser';
import sirv from 'sirv';

const engine = new Liquid({
  extname: '.liquid',
});

const app = new App();

app
  .use(logger())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', sirv(process.env.NODE_ENV === 'development' ? 'client' : 'dist'))
  .listen(3000, () => console.log('Server is running on http://localhost:3000'));

app.get('/', async (req, res) => {
  return res.send(renderTemplate('server/views/index.liquid', { title: 'Choose a category' }));
});

app.post('/meal-generator', async (req, res) => {
  const main = req.body.main
// haalt de waarde van de geselecteerde radio button op
  console.log(main);

  res.redirect('/meal-picker/' + main);
// rederect de route naar de gekozen catergorie dus de + "main"

})

const api_key = 1;
// api key van de mealdb

app.get('/meal-picker/:foodType', async (req, res) => {
  const foodType = req.params.foodType;
  // haalt de categorie op van de url
  const apiURL = `https://www.themealdb.com/api/json/v1/${api_key}/filter.php?c=` + foodType;
  // api url van de mealdb met de categorie die je hebt gekozen
  const mealsData = await fetch(apiURL);
  // haalt de data op van de api
  const data = await mealsData.json();
  // zet de data om naar json
  
  return res.send(renderTemplate('server/views/meal-picker.liquid', { title: 'Random cheese meals', meals: data.meals }));
});



app.get('/meal/:id', async (req, res) => {
  const id = req.params.id;
  // haalt het id op van de url
  
  const apiURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
  // api url van de mealdb met het id dat je hebt gekozen van de maaltijden
  
  const mealData = await fetch(apiURL);
  // fetch verzoek
  const data = await mealData.json();
  
  const meal = data.meals[0];
  // haalt de eerste maaltijd op uit de array
  console.log(meal.strInstructions);

  return res.send(renderTemplate('server/views/detail.liquid', {
    title: `Detail page for ${meal.strMeal}`,
    meal: meal
  }));
});

// de route voor de detail pagina

const renderTemplate = (template, data) => {
  const templateData = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    ...data
  };

  return engine.renderFileSync(template, templateData);
  // render de template met de data die je hebt opgehaald
};



