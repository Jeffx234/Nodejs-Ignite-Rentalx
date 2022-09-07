import { Router } from 'express'
import  CategoriesRepository  from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoryUseCase } from '../modules/cars/useCases/listCategories/ListCategoryUseCase';

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
})


categoriesRoutes.get('/', (request, response) => {
  return ListCategoryUseCase.execute(request, response);
})

export { categoriesRoutes }