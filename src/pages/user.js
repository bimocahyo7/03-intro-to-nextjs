import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

function User({ users }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200 p-6">
      <div className="w-full max-w-xl bg-slate-600 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">List Users</h2>

        <div className="grid grid-cols-2 gap-4">
          {users.map((user) => (
            <Link href={`/user/${user.id}`} key={user.id}>
              <div className="bg-emerald-200 border-l-4 border-orange-400 text-slate-800 p-2 rounded-lg flex items-center transition duration-300 ease-in-out shadow-[4px_4px_0px] shadow-slate-900  hover:bg-emerald-700 hover:text-white transform hover:scale-105 gap-2">
                <FaUserCircle className="size-5 ml-2" />
                <span className="font-semibold">{user.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => router.push("/")}
        className="px-4 py-2 mt-8 bg-pink-600 shadow-[4px_4px_0px] shadow-slate-600 hover:shadow-none text-white border-4 border-pink-950 rounded-lg font-bold transition flex items-center gap-3 cursor-pointer">
        <IoMdArrowRoundBack className="size-6" />
        Kembali
      </button>
    </div>
  );
}

export default User;
