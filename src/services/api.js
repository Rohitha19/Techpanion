import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchInvoiceDetails = () => axios.get(`${API_URL}/invoice-details`);
export const submitForm = (formData) => axios.post(`${API_URL}/submit-form`, formData);
export const fetchActionHistory = () => axios.get(`${API_URL}/action-history`);
