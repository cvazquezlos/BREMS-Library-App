import { ResourceCopy } from './resource-copy.model';
import { Genre } from './genre.model';

export interface Resource {
  id?: number;
  title: string;
  author: string;
  editorial: string;
  image?: any;
  avaiblereserve: boolean;
  copies?: ResourceCopy[];
  description: string;
  hasPhoto: boolean;
  noReservedCopies: string[];
  genre?: Genre;
  resourceCopiesNumber?: number;
}
