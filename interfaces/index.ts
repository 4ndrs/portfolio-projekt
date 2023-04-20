export interface Data {
  name: { first: string; last?: string };
  email: string;
  message: string;
}

export interface SearchBarElement {
  blur: () => void;
}

export type Status = "OK" | "ERROR";
