import type { Transaction, DashboardStats } from '../types';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isWithinInterval, parseISO } from 'date-fns';

export const calculateStats = (
  transactions: Transaction[],
  startDate?: Date,
  endDate?: Date
): DashboardStats => {
  let filtered = transactions;

  if (startDate && endDate) {
    filtered = transactions.filter((t) => {
      const transactionDate = parseISO(t.date);
      return isWithinInterval(transactionDate, {
        start: startOfDay(startDate),
        end: endOfDay(endDate),
      });
    });
  }

  const totalIncome = filtered
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = filtered
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    transactionsCount: filtered.length,
  };
};

export const getDateRange = (period: 'day' | 'week' | 'month') => {
  const now = new Date();
  let start: Date;
  let end: Date = endOfDay(now);

  switch (period) {
    case 'day':
      start = startOfDay(now);
      break;
    case 'week':
      start = startOfWeek(now, { weekStartsOn: 1 });
      end = endOfWeek(now, { weekStartsOn: 1 });
      break;
    case 'month':
      start = startOfMonth(now);
      end = endOfMonth(now);
      break;
  }

  return { start, end };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const exportToCSV = (transactions: Transaction[], categories: Map<string, { name: string }>) => {
  const headers = ['Ngày', 'Loại', 'Danh mục', 'Số tiền', 'Mô tả'];
  const rows = transactions.map((t) => [
    t.date,
    t.type === 'income' ? 'Thu' : 'Chi',
    categories.get(t.categoryId)?.name || '',
    t.amount.toString(),
    t.description,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `expenses_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
