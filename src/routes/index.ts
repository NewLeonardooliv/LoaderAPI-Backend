import { Router } from 'express';
import { main } from './main.routes';

const router = Router();

router.use(main);

export { router };
