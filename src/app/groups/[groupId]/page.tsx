import { getGroupById } from "../../../features/groups/actions/get-groups";

type Props = {
  params: Promise<{
    groupId: string;
  }>;
};

export default async function GroupPage({ params }: Props) {
  const { groupId } = await params;

  const group = await getGroupById(groupId);

  return (
    <main>
      <h1>{group.name}</h1>

      <p>{group.description}</p>
    </main>
  );
}