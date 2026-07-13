interface Expense {
  id: string;
  groupId: string;
  paidByMemberId: string;
  title: string;
  amount: number;
  description?: string;
  createdAt: Date;
}