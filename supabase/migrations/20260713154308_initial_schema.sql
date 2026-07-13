create extension if not exists pgcrypto;
--------------------------------------------------------------------------------
-- Groups
--------------------------------------------------------------------------------
create table groups(
    id uuid primary key default gen_random_uuid(),

    name text not null,

    description text,

    created_at timestamptz not null default now()

);


--------------------------------------------------------------------------------
-- Members
--------------------------------------------------------------------------------
create table members(
    id uuid primary key default gen_random_uuid(),

    display_name text not null,

    avatar_url text,

    created_at timestamptz not null default now()
);


--------------------------------------------------------------------------------
-- Group Members
--------------------------------------------------------------------------------
create table group_members(
    id uuid primary key default gen_random_uuid(),

    group_id uuid not null references groups(id) on delete cascade,

    member_id uuid not null references members(id) on delete cascade,

    joined_at timestamptz not null default now(),

    unique (group_id, member_id) /*Para que no se repitan dos usuarios en el mismo grupo */
);


--------------------------------------------------------------------------------
-- Expenses
--------------------------------------------------------------------------------
create table expenses(
    id uuid primary key default gen_random_uuid(),

    group_id uuid not null references groups(id) on delete cascade,

    paid_by_group_member_id uuid not null references group_members(id),

    title text not null,

    description text,

    amount_in_cents integer not null check(amount_in_cents > 0),

    created_at timestamptz not null default now()
);


--------------------------------------------------------------------------------
-- Expense Participants
--------------------------------------------------------------------------------
create table expense_participants (
    expense_id uuid not null references expenses(id) on delete cascade,

    group_member_id uuid not null references group_members(id),

    share_in_cents integer not null check(share_in_cents >= 0),

    primary key(expense_id, group_member_id)
);


--------------------------------------------------------------------------------
-- Payments
--------------------------------------------------------------------------------
create table payments (
    id uuid primary key default gen_random_uuid(),

    group_id uuid not null
        references groups(id)
        on delete cascade,

    from_group_member_id uuid not null
        references group_members(id),

    to_group_member_id uuid not null
        references group_members(id),

    description text,

    amount_in_cents integer not null
        check(amount_in_cents > 0),

    created_at timestamptz not null default now()
);


--------------------------------------------------------------------------------
-- Indexes 
--------------------------------------------------------------------------------
create index idx_group_members_group
    on group_members(group_id);

create index idx_group_members_member
    on group_members(member_id);

create index idx_expenses_group
    on expenses(group_id);

create index idx_expenses_paid_by
    on expenses(paid_by_group_member_id);

create index idx_expense_participants_group_member
    on expense_participants(group_member_id);

create index idx_payments_group
    on payments(group_id);

create index idx_payments_from
    on payments(from_group_member_id);

create index idx_payments_to
    on payments(to_group_member_id);