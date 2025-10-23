import type { Client, ClientFormData } from '../types/Client';
import { storageService } from './storageService';

const CLIENTS_STORAGE_KEY = 'clients';

export const clientService = {
  getAllClients: (): Client[] => {
    return storageService.getItem<Client[]>(CLIENTS_STORAGE_KEY) || [];
  },

  getClientById: (id: string): Client | undefined => {
    const clients = clientService.getAllClients();
    return clients.find(client => client.id === id);
  },

  createClient: (clientData: ClientFormData): void => {
    const clients = clientService.getAllClients();
    const newClient: Client = {
      ...clientData,
      id: Date.now().toString()
    };
    clients.push(newClient);
    storageService.setItem(CLIENTS_STORAGE_KEY, clients);
  },

  updateClient: (id: string, clientData: ClientFormData): void => {
    const clients = clientService.getAllClients();
    const index = clients.findIndex(client => client.id === id);
    
    if (index !== -1) {
      clients[index] = { ...clientData, id };
      storageService.setItem(CLIENTS_STORAGE_KEY, clients);
    }
  },

  deleteClient: (id: string): void => {
    const clients = clientService.getAllClients();
    const filteredClients = clients.filter(client => client.id !== id);
    storageService.setItem(CLIENTS_STORAGE_KEY, filteredClients);
  },

  emailExists: (email: string, excludeId?: string): boolean => {
    const clients = clientService.getAllClients();
    return clients.some(client => 
      client.email === email && client.id !== excludeId
    );
  },

  cpfCnpjExists: (cpfCnpj: string, excludeId?: string): boolean => {
    const clients = clientService.getAllClients();
    return clients.some(client => 
      client.cpfCnpj === cpfCnpj && client.id !== excludeId
    );
  }
};