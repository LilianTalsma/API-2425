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

  console.log(main);

  res.redirect('/meal-picker/' + main);

})



app.get('/meal-picker/:foodType', async (req, res) => {
  const foodType = req.params.foodType;
  const apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + foodType;
  const mealsData = await fetch(apiURL);
  const data = await mealsData.json();
  
  return res.send(renderTemplate('server/views/meal-picker.liquid', { title: 'Random cheese meals', meals: data.meals }));
});



app.get('/meal/:id', async (req, res) => {
  const id = req.params.id;
  
  const apiURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
  
  const mealData = await fetch(apiURL);
  const data = await mealData.json();
  
  const meal = data.meals[0];
  console.log(meal.strInstructions);

  return res.send(renderTemplate('server/views/detail.liquid', {
    title: `Detail page for ${meal.strMeal}`,
    meal: meal
  }));
});

const renderTemplate = (template, data) => {
  const templateData = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    ...data
  };

  return engine.renderFileSync(template, templateData);
};



