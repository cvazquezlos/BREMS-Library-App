export interface Resource {
  id?: number;
  title: string;
  author: string;
  editorial: string;
  image?: any;
  avaiblereserve: boolean;
  description: string;
  hasPhoto: boolean;
  noReservedCopies: string[];
}
