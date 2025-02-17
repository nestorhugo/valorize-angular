export interface AuthResponse {
  token: string;
  record: UserRecord;
}

export interface UserRecord {
  collectionId: string;
  collectionName: string;
  id: string;
  email: string;
  emailVisibility: boolean;
  verified: boolean;
  name: string;
  avatar: string;
  created: string;
  updated: string;
}
export interface budgetListResponse {
  items: userSingleBudget[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}
export interface userSingleBudget {
  collectionId: string;
  collectionName: string;
  id: string;
  nome: string;
  lucro: number;
  valor_cobrado: number;
  valor_lucro: number;
  gastos: userExpenses[];
  user: string;
  status: string;
  created: string;
  updated: string;
}

export interface userExpenses {
  descricao: string;
  valor: number;
}
