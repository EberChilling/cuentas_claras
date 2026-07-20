--------------------------------------------------------------------------------
-- Temporary development policies
--------------------------------------------------------------------------------

create policy "Allow anyone to read members"

on members

for select

using (true);

create policy "Allow anyone to insert members"

on members

for insert

with check (true);


create policy "Allow anyone to read group_members"

on group_members

for select

using (true);

create policy "Allow anyone to insert group_members"

on group_members

for insert

with check (true);
