import Link from "next/link";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="flex m-auto flex-col items-center gap-2 mt-20">
      <h1 className="w-full text-center mt-5 text-2xl">Sorry. Not Found.</h1>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}

// TODO - This not found page won't show navbar.
