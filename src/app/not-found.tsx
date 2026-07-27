import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFoundPage() {
  return (
    <div className='min-h-80 bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center'>
      <div className='p-8'>
        <h1 className="text-7xl/normal mb-4 font-extrabold">404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}