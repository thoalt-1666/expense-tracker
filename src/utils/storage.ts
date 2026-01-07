import type { Transaction, Category } from '../types';

const STORAGE_KEYS = {
  TRANSACTIONS: 'expense_tracker_transactions',
  CATEGORIES: 'expense_tracker_categories',
};

export const getTransactions = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
  return data ? JSON.parse(data) : [];
};

export const saveTransactions = (transactions: Transaction[]): void => {
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
};

export const getCategories = (): Category[] => {
  const data = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
  if (data) {
    return JSON.parse(data);
  }
  // Default categories
  return [
    { id: '1', name: 'Lương', type: 'income', color: '#10b981', icon: '💰' },
    { id: '2', name: 'Thưởng', type: 'income', color: '#3b82f6', icon: '🎁' },
    { id: '3', name: 'Đầu tư', type: 'income', color: '#8b5cf6', icon: '📈' },
    { id: '4', name: 'Ăn uống', type: 'expense', color: '#ef4444', icon: '🍔' },
    { id: '5', name: 'Mua sắm', type: 'expense', color: '#f59e0b', icon: '🛍️' },
    { id: '6', name: 'Giao thông', type: 'expense', color: '#06b6d4', icon: '🚗' },
    { id: '7', name: 'Giải trí', type: 'expense', color: '#ec4899', icon: '🎬' },
    { id: '8', name: 'Hóa đơn', type: 'expense', color: '#6366f1', icon: '💳' },
  ];
};

export const saveCategories = (categories: Category[]): void => {
  localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
};
