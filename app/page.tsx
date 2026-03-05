import { Button } from "@/components/ui/button";
import { requireAuth } from "@/module/auth/auth-utils";
import Logout from "@/module/auth/logout";

export default async function Home() {
  await requireAuth();
  return (
    <Logout>
      <Button>Logout</Button>
    </Logout>
  );
}
