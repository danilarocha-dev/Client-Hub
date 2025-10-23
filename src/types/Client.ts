export interface Client {
  id: string;
  name: string;
  cpfCnpj: string;
  phone: string;
  email: string;
}

export interface ClientFormData {
  name: string;
  cpfCnpj: string;
  phone: string;
  email: string;
}