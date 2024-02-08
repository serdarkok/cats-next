import Link from "next/link"

export const Header = () => {
  return (
    <nav className="bg-slate-100 text-sm underline-offset-4 flex items-center text-apollo gap-5 px-4 justify-end h-14 w-full border-b border-b-slate-200">
      <Link href='/' className="hover:underline">Homepage</Link>
      <Link href='/cats' className="hover:underline">Cats</Link>
      <Link href='/about' className="hover:underline">About</Link>
      <Link href='/career' className="hover:underline">Career</Link>
    </nav>
  )
}
