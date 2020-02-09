'use strict'
const cors = require('cors');
const professionalRoutes = require('./profesional/profesional.routes.js');
const recommendationRoutes = require('./recommendation/recommendation.routes.js');
const treatmentRoutes = require('./treatment/treatment.routes.js');
const adminRoutes = require('./admin/admin.routes.js');
const userRoutes = require('./user/user.routes.js');

const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

professionalRoutes(router);
recommendationRoutes(router);
treatmentRoutes(router);
adminRoutes(router);
userRoutes(router);

router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));