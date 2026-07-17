--------------------------------------------------------------------------------
-- Enable RLS
--------------------------------------------------------------------------------

alter table groups enable row level security;

alter table members enable row level security;

alter table group_members enable row level security;

alter table expenses enable row level security;

alter table expense_participants enable row level security;

alter table payments enable row level security;

--------------------------------------------------------------------------------
-- Temporary development policies
--------------------------------------------------------------------------------

create policy "Allow anyone to read groups"

on groups

for select

using (true);

create policy "Allow anyone to insert groups"

on groups

for insert

with check (true);