import { useState, useMemo } from 'react';
import type { Transaction, Category } from '../types';
import { calculateStats, getDateRange, formatCurrency } from '../utils/calculations';
import { TrendingUp, TrendingDown, Wallet, FileText } from 'lucide-react';

interface DashboardProps {
  transactions: Transaction[];
  categories: Category[];
}

export default function Dashboard({ transactions }: DashboardProps) {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('month');

  const stats = useMemo(() => {
    const { start, end } = getDateRange(period);
    return calculateStats(transactions, start, end);
  }, [transactions, period]);

  const statsCards = [
    {
      title: 'Thu nhập',
      value: formatCurrency(stats.totalIncome),
      icon: TrendingUp,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Chi tiêu',
      value: formatCurrency(stats.totalExpense),
      icon: TrendingDown,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Số dư',
      value: formatCurrency(stats.balance),
      icon: Wallet,
      color: stats.balance >= 0 ? 'bg-blue-500' : 'bg-orange-500',
      bgColor: stats.balance >= 0 ? 'bg-blue-50' : 'bg-orange-50',
    },
    {
      title: 'Giao dịch',
      value: stats.transactionsCount.toString(),
      icon: FileText,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <div className="flex gap-2">
          {(['day', 'week', 'month'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                period === p
                  ? 'bg-white text-purple-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {p === 'day' ? 'Ngày' : p === 'week' ? 'Tuần' : 'Tháng'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${card.color.replace('bg-', 'text-')}`} />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
