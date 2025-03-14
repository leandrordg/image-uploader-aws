import Image from "next/image";
import Link from "next/link";

import { GitHub, Instagram, X } from "@/utils/icons";

export function DashboardAside() {
  return (
    <section className="flex flex-col items-center text-center gap-4 p-8 border border-border rounded-xl bg-transparent backdrop-blur-2xl">
      <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-1 rounded-full overflow-clip">
        <div className="relative size-24 rounded-full overflow-clip">
          <Image
            src="/profile.png"
            alt="User profile"
            className="object-cover bg-muted"
            fill
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold">Leandro Rodrigues</h3>
        <p className="text-sm text-muted">lj251004@gmail.com</p>
      </div>

      <div className="flex items-center md:justify-center gap-4">
        <div>
          <Link target="_blank" href="https://instagram.com/leandro.rodriguesz">
            <Instagram className="size-6 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>
        </div>

        <div>
          <Link target="_blank" href="https://github.com/leandrordg">
            <GitHub className="size-6 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>
        </div>

        <div>
          <Link target="_blank" href="https://x.com/bertalhiaa">
            <X className="size-6 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
