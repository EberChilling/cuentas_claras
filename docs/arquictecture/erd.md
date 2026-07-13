# ARQUICTECTURA DE PROYECTO CUENTAS CLARASS

## Entidades

groups
│
├── id
├── name
└── description

members
│
├── id
├── display_name
└── avatar_url

group_members
│
├── id
├── group_id
├── member_id
└── joined_at

expenses
│
├── id
├── group_id
├── paid_by_group_member_id
├── title
├── description
├── amount_in_cents
└── created_at

expense_participants
│
├── expense_id
├── group_member_id
└── share_in_cents

payments
│
├── id
├── group_id
├── from_group_member_id
├── to_group_member_id
├── amount_in_cents
└── created_at

## Relaciones

Group 1:N Member

Group 1:N Expense

Expense N:N Member

Member 1:N Payment (from)

Member 1:N Payment (to)