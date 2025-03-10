import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  console.log("Data path: ", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();

  console.log(user);

  return {
    props: {
      user,
    },
  };
}

function DetailUser({ user }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-blue-200">
      <div className="bg-pink-300 border-4 border-slate-800 shadow-[8px_8px_0px_#374151] p-6 w-full max-w-md rounded-lg">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">Detail User</h2>
        <div className="p-5 border-4 border-slate-800 shadow-[8px_8px_0px_#374151] bg-yellow-200 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">{user.name}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-lg text-slate-800">
              <MdOutlineAttachEmail className="text-xl text-slate-800" />
              <span className="font-bold">Email:</span> {user.email}
            </div>
            <div className="flex items-center gap-2 text-lg text-slate-800">
              <FaSquarePhone className="text-xl text-slate-800" />
              <span className="font-bold">Phone:</span> {user.phone}
            </div>
            <div className="flex items-center gap-2 text-lg text-slate-800">
              <FaExternalLinkAlt className="text-xl text-slate-800" />
              <span className="font-bold">Website:</span> {user.website}
            </div>
            <div className="flex items-center gap-2 text-lg text-slate-800">
              <FaBuilding className="text-xl text-slate-800" />
              <span className="font-bold">Company:</span> {user.company.name}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={router.back}
          className="px-3 py-2 mt-10 bg-slate-400 text-slate-800 border-4 border-slate-800 rounded-lg font-bold transition flex items-center gap-2 cursor-pointer">
          <IoMdArrowRoundBack className="size-6" />
          Kembali
        </button>
      </div>
    </div>
  );
}

export default DetailUser;
