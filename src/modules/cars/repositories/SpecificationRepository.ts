import Specification from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificatiosRepository";

const specifications: Specification[] = []

export const SpecificationRepository: ISpecificationsRepository = {
  create:({name, description} :ICreateSpecificationDTO): void => {
    const specification = new Specification()
    Object.assign(specification, {name, description, created_at: new Date()})
    specifications.push(specification)
  },

  findyByName: (name: string): Specification => {
    return specifications.find(specification => specification.name === name)
  }
}