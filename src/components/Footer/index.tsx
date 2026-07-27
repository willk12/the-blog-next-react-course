import Link from "next/link";

export function Footer() {
  return (
    <footer className='text-2xl font-bold text-center pb-8'>
      <p className=''>Copyright &copy; {new Date().getFullYear()} - <Link href="/">The Blog</Link></p>
    </footer>
  );
}