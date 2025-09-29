export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  country: string;
  tel: string;
  created_at: Date;
  highlights?: Highlight[];
}

export interface Highlight {
  id: number;
  text: string;
  chapter: number;
  created_at: Date;
}
