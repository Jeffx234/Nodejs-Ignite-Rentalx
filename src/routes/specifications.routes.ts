import { Router } from 'express';
import { createSpecificationService } from '../modules/cars/services/CreateSpecificationService';

export const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body;
  createSpecificationService.execute({ name, description });
  return response.status(201).send().json({ message: 'Specification created' });
})

