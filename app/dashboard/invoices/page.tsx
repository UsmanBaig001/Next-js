import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className="flex justify-center text-2xl font-bold py-5 tracking-wide w-full bg-orange-400 ">
        My First Invioces
      </div>
      <p>My first paragraph.</p>
      <Link href={"/dashboard"}>This is a link</Link>
    </main>
  );
}
