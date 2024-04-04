import { getServerSession } from "next-auth";
import RecentTransaction from "../../../components/RecentTransaction";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getTranscation() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id)
    }
  });
  return transactions.map(t => ({
    time: t.timestamp,
    amount: t.amount
  }));
}

export default async function YourPage() {
  const transactions = await getTranscation();
  return (
    <div className="w-full flex justify-between">
      <SendCard />
      <RecentTransaction transactions={transactions} />
    </div>
  );
}
