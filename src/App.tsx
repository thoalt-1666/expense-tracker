import { useState, useEffect } from 'react';
import type { Transaction, Category } from './types';
import { getTransactions, saveTransactions, getCategories, saveCategories } from './utils/storage';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import { Plus } from 'lucide-react';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | undefined>();

  useEffect(() => {
    setTransactions(getTransactions());
    setCategories(getCategories());
  }, []);

  const handleAddTransaction = (transactionData: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transactionData,
      id: Date.now().toString(),
    };
    const updated = editingTransaction
      ? transactions.map((t) => (t.id === editingTransaction.id ? newTransaction : t))
      : [...transactions, newTransaction];
    setTransactions(updated);
    saveTransactions(updated);
    setShowForm(false);
    setEditingTransaction(undefined);
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setShowForm(true);
  };

  const handleDeleteTransaction = (id: string) => {
    if (confirm('Bạn có chắc muốn xóa giao dịch này?')) {
      const updated = transactions.filter((t) => t.id !== id);
      setTransactions(updated);
      saveTransactions(updated);
    }
  };

  const handleAddCategory = () => {
    const name = prompt('Nhập tên danh mục mới:');
    if (!name) return;

    const type = confirm('Đây là danh mục thu nhập?') ? 'income' : 'expense';
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    const icons = ['💰', '🎁', '📈', '🍔', '🛍️', '🚗', '🎬', '💳'];

    const newCategory: Category = {
      id: Date.now().toString(),
      name,
      type,
      color: colors[Math.floor(Math.random() * colors.length)],
      icon: icons[Math.floor(Math.random() * icons.length)],
    };

    const updated = [...categories, newCategory];
    setCategories(updated);
    saveCategories(updated);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            💰 Quản Lý Chi Tiêu
          </h1>
          <p className="text-white/80">Theo dõi thu chi của bạn một cách dễ dàng</p>
        </header>

        <Dashboard transactions={transactions} categories={categories} />

        <div className="flex items-center justify-between">
          <button
            onClick={handleAddCategory}
            className="px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors"
          >
            + Thêm danh mục
          </button>
          <button
            onClick={() => {
              setEditingTransaction(undefined);
              setShowForm(true);
            }}
            className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Thêm giao dịch
          </button>
        </div>

        <TransactionList
          transactions={transactions}
          categories={categories}
          onEdit={handleEditTransaction}
          onDelete={handleDeleteTransaction}
        />

        {showForm && (
          <TransactionForm
            categories={categories}
            onSave={handleAddTransaction}
            onClose={() => {
              setShowForm(false);
              setEditingTransaction(undefined);
            }}
            editingTransaction={editingTransaction}
          />
        )}
      </div>
    </div>
  );
}

export default App;
