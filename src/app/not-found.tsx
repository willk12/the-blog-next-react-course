import ErroMessage from "@/components/ErrorMessage";


export default function NotFoundPage() {
  return (
    <>
      <ErroMessage
        pageTitle="Página não encontrada"
        contentTitle="404 😢 "
        message="Page not found"
      />
    </>
  );
}
