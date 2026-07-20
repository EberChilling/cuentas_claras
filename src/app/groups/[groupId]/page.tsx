import { notFound } from "next/navigation";
import { getGroupById } from "@/src/features/groups/actions/get-groups";
import { getMembers } from "@/src/features/members/actions/get-members";

import { z } from "zod";
import GroupMembersSection from "@/src/features/members/components/GroupMembersSection/GroupMembersSection";

export const uuidSchema = z.uuid();

type Props = {
  params: Promise<{
    groupId: string;
  }>;
};

export default async function GroupPage({ params }: Props) {
  const { groupId } = await params;
  // Fail Fast Arquitecture - Detect errors as fast as possible
  // Validate if the format from the UUID is correct
  if (!uuidSchema.safeParse(groupId).success) {
    notFound();
  }

  // Use of Promise.all to make multiple fetch at the same time
  const [group,members] = await Promise.all([getGroupById(groupId),getMembers(groupId),
  ]);
  // After checking in the DB if the id doesnt exist, then put the not found page.
  if(!group){
    notFound();
  }

  //Otherwise, if the id exist, display the page
  return (
    <main>
      <h1>{group.name}</h1>

      <p>{group.description}</p>

      <br></br>
      
      <GroupMembersSection groupId={group.id} initialMembers={members} />

    </main>
  );
}