import Link from "next/link";

import { UploadIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="p-2 rounded-xl text-center border border-border w-full max-w-7xl text-xs md:text-sm text-muted-foreground bg-transparent backdrop-blur-2xl">
        Atualização: Personalize suas preferências de conta no painel!
        <Link href="#" className="ml-1 text-cyan-500 hover:underline">
          Saiba mais.
        </Link>
      </div>

      <div className="rounded-xl text-center border-2 border-dashed border-border w-full max-w-7xl text-xs md:text-sm text-muted-foreground bg-transparent backdrop-blur-2xl cursor-pointer">
        <div className="flex flex-col items-center justify-center space-y-4 p-8 select-none">
          <UploadIcon className="size-6 text-muted-foreground" />
          <p>Arraste e solte arquivos para fazer upload.</p>
        </div>
      </div>

      <div className="p-2 rounded-xl text-center border border-border w-full max-w-7xl text-xs md:text-sm text-muted-foreground bg-transparent backdrop-blur-2xl">
        Nenhum arquivo foi enviado ainda.
      </div>
    </div>
  );
}
