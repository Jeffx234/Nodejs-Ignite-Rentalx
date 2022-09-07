import { SpecificationRepository } from "../repositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export const createSpecificationService = {
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = SpecificationRepository.findyByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    SpecificationRepository.create({ name, description });
  }
}

