import Link from "next/link";
import { Test } from "../text";

export default function HomePage() {
  return (
    <main className="flex gap-3 flex-1 flex-col justify-center text-center">
      <h1 className="text-2xl font-bold">Frontend Myanmar</h1>
      <p>Frontend Development နှင့်ဆိုင်သောအကြောင်းအရင်းများ</p>

      <p className="text-fd-muted-foreground">
        အကြောင်းအရာများ ကိုလေ့လာရန်{" "}
        <Link href="/docs" className="text-fd-foreground font-semibold underline">
          /docs
        </Link>{" "}
        ကိုနိပ်ပါ။
        <Test />
      </p>
    </main>
  );
}
