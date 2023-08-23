import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div>
      Root Page (Protected)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
