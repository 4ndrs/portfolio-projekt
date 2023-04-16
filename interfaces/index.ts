export interface Data {
  name: { first: string; last?: string };
  email: string;
  message: string;
}

export type Status = "OK" | "ERROR";
