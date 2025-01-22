import BookForm from "@/components/admin/forms/BookForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Button className="back-btn" asChild>
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};
export default Page;
