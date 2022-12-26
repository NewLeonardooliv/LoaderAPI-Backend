import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './src/routes';
import documentacaoFile from './src/swagger.json';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentacaoFile));
app.use('/api', router);

app.listen(8000, () => console.log('Servidor Online'));
