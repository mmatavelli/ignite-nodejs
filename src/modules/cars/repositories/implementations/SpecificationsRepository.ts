import { Specification } from '../../model/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const category = new Specification();

    Object.assign(category, { name, description, created_at: new Date() });

    this.specifications.push(category);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const category = this.specifications.find(
      category => category.name === name,
    );

    return category;
  }
}

export { SpecificationsRepository };
