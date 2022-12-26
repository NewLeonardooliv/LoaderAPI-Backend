import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import { router } from './src/routes';
import documentacaoFile from './src/swagger.json';

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	app.use(cors());
	next();
});

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentacaoFile));
app.use('/api', router);

app.listen(8000, () => console.log('Servidor Online'));
