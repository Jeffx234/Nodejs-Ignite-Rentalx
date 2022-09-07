import Specification from "../model/Specification"

export type ICreateSpecificationDTO = {
  name: string
  description: string
}

export type ISpecificationsRepository = {
  create({ name, description }: ICreateSpecificationDTO): void
  findyByName(name: string): Specification
}
