import { Request, Response } from "express"

import CategoriesRepository from "../../repositories/CategoriesRepository"

export const ListCategoryUseCase  = {
  execute: (request: Request, response: Response) => {
    const categories =  CategoriesRepository.list()
    return response.json(categories)
  }
}