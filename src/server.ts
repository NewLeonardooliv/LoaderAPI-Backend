import express from 'express';
import swaggerUi from 'swagger-ui-express';
var cors = require('cors');

import { router } from './routes';
import documentacaoFile from './swagger.json';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `*`);
    res.header("Access-Control-Allow-Headers", `*`);
    app.use(cors())
    next();
});

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentacaoFile));
app.use(router);

app.listen(8000, () => console.log('Servidor Online'));
