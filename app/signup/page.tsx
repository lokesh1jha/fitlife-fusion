import { authOptions } from "@/auth";
import SignupForm2 from "@/components/auth/SignUp2";
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";


export default async function Signup() {
  const session: Session | null = await getServerSession(authOptions);

	if (session) {
		redirect("/");
	}

	return (
		<main className='flex flex-col p-4'>
			<SignupForm2 />
		</main>
	);
}