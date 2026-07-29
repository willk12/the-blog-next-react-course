type ErrosMessageProps ={
  pageTitle: string;
  contentTitle: string;
  message: React.ReactNode;
}

export default function ErroMessage({pageTitle,contentTitle,message }: ErrosMessageProps) {
  return (
    <>
    <title>{pageTitle}</title>
    <div className="min-h-80 bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
      <div className="p-8">
        <h1 className="text-7xl/normal mb-4 font-extrabold">{contentTitle}</h1>
        <div>{message}</div>
      </div>
    </div>
    </>
  );
}
