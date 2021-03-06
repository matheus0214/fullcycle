export interface IRepository<T> {
  create(entity: T): Promise<void>;
  update(entity: Partial<T>): Promise<void>;
  find(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}
