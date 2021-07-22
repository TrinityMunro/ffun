export interface Vehicle {
  id: number;
  make?: string;
  model?: string;
  year?: string;
  price?: string;
  status?: string;
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
