import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { clientService } from '../services/clientService';
import type { Client, ClientFormData } from '../types/Client';

const ClientPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = () => {
    setClients(clientService.getAllClients());
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (editingClient) {
        clientService.updateClient(editingClient.id, values);
        message.success('Cliente atualizado com sucesso!');
      } else {
        if (clientService.emailExists(values.email)) {
          message.error('O e-mail informado já está em uso.');
          return;
        }
        if (clientService.cpfCnpjExists(values.cpfCnpj)) {
          message.error('O CPF/CNPJ informado já está em uso.');
          return;
        }
        clientService.createClient(values);
        message.success('Cliente cadastrado com sucesso!');
      }
      loadClients();
      setIsModalVisible(false);
      setEditingClient(null);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingClient(null);
    form.resetFields();
  };

  const showModal = (client?: Client) => {
    if (client) {
      setEditingClient(client);
      form.setFieldsValue(client);
    } else {
      setEditingClient(null);
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    clientService.deleteClient(id);
    message.success('Cliente excluído com sucesso!');
    loadClients();
  };

  const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'CPF/CNPJ', dataIndex: 'cpfCnpj', key: 'cpfCnpj' },
    { title: 'Telefone', dataIndex: 'phone', key: 'phone' },
    { title: 'E-mail', dataIndex: 'email', key: 'email' },
    {
      title: 'Ações',
      key: 'actions',
      render: (_: any, record: Client) => (
        <span>
          <Button type="link" onClick={() => showModal(record)}>Editar</Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>Excluir</Button>
        </span>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Button type="primary" onClick={() => showModal()} style={{ marginBottom: 16 }}>
        Adicionar Cliente
      </Button>
      <Table dataSource={clients} columns={columns} rowKey="id" />

      <Modal
        title={editingClient ? 'Editar Cliente' : 'Adicionar Cliente'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Nome" rules={[{ required: true, message: 'Por favor, insira o nome.' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="cpfCnpj" label="CPF/CNPJ" rules={[{ required: true, message: 'Por favor, insira o CPF/CNPJ.' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Telefone" rules={[{ required: true, message: 'Por favor, insira o telefone.' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="E-mail" rules={[{ required: true, type: 'email', message: 'Por favor, insira um e-mail válido.' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ClientPage;