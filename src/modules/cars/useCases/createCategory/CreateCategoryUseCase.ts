import  CategoriesRepository  from "../../repositories/CategoriesRepository"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

  interface IRequest {
    name: string;
    description: string;
  }

 export const CreateCategoryService = {
  execute({ name, description }: IRequest)  {
    const categoryAlreadyExists = CategoriesRepository.findByName(name)
    if(categoryAlreadyExists) {
      throw new Error("Category already exists!")
    }
    return CategoriesRepository.create({ name, description })
  }
}