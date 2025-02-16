export interface newUserData {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

export interface Budget {
  nome: string;
  lucro: number;
  valor_cobrado: number;
  valor_lucro: number;
  gastos: Expense[];
  user: string;
}

export interface Expense {
  descricao?: string;
  valor?: number;
}
