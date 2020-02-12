import { IRepository } from './repository.interface';
import { Orgnization } from '../../models/organization';
import { User } from '@models/user';

export interface IOrganizationRepository extends IRepository<Orgnization> {
  getOrganizationIdFromDomain(domain: string): Promise<User[]>;
}
