import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"

import ROUTES from "@/constants/routes"

const Home = async () => {
    const session = await auth()
  return (
    <>
      <h1 className="h1-bold background-light850_dark100 text-dark400_light900 flex-center p-10">Welcome to the world of Next.js</h1>
        <form className="px-10 pt-[100px]" action={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGN_IN})
        }}>
            <Button type="submit">Log Out</Button>
        </form>
    </>
  );
}

export default Home