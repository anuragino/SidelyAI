import { Router } from 'express';
import { pingController, submitController, readController, deleteController, updateController, searchController } from '../controllers';

const router = Router();

router.get('/ping', pingController);
router.post('/submit', submitController);
router.get('/read', readController);
router.delete('/delete', deleteController);
router.put('/update', updateController);
router.get('/search', searchController);

export default router;
