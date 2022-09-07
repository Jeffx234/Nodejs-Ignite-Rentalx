import Category  from '../model/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository'


const categories: Category[] = []

const CategoriesRepository: ICategoriesRepository = {
    create({ name, description }): ICreateCategoryDTO {
      const category = new Category()
      Object.assign(category, { name, description, createdAt: new Date() })
      categories.push(category)
      return category
  },

  list(): Category[] {
    return categories
  },

  findByName(name: string): Category {
    return categories.find(category => category.name === name)
  }
}


export default CategoriesRepository