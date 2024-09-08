"use client";
import { motion } from "framer-motion";

import Buymeacoffee from "@/components/coffee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth(); // Hook para verificar o estado de autenticação

  return (
    <div className="top-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:30px_30px]">
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-32 py-3 text-xl">
          <span className="flex-1 text-2xl text-white">Blup</span>
          <Buymeacoffee />
          <div className="flex flex-1 justify-end">
            <Button size={"lg"} className="text-lg text-white">
              {/* The first access point to an user is the process page */}
              <Link href={isSignedIn ? "/process" : "/profile"}>Entrar</Link>
            </Button>
          </div>
        </nav>
      </header>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <section className="relative mx-auto flex max-w-7xl flex-col items-center p-8 pb-64 pt-64">
          <h2 className="flex flex-col text-center text-7xl font-medium text-white">
            Um pouco de ordem,{" "}
            <span className="bg-gradient-to-r from-yellow-300 from-20% via-yellow-400 to-yellow-600 to-70% bg-clip-text pb-6 text-transparent">
              para o caos jurídico.
            </span>
          </h2>
          <span className="text-3xl font-light text-white">
            Configure seu número OAB e Blup!
          </span>
        </section>
      </motion.div>
      <section id="faq">
        <div className="mx-auto flex max-w-7xl flex-row gap-12 px-8 py-32">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block text-2xl font-semibold text-primary">
              FAQ
            </p>
            <p className="text-3xl font-extrabold text-white">
              Perguntas frequentes
            </p>
          </div>
          <ul className="basis-1/2">
            <Accordion type="single" collapsible className="text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start font-bold text-primary">
                  O que é o blup?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    A ferramenta mais simples para você gerenciar seus processos
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Como eu começo?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    Simples, cadastre-se passando seu número OAB em poucos
                    minutos, todos os seus processos estarão disponíveis para
                    você.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Para qual público o blup é destinado?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    Advogados, estagiários e estudantes de direito. Todos que
                    querem diminuir sua carga de trabalho manual para se dedicar
                    ao que realmente importa.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Quanto custa o blup?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    O blup é gratuito para todos os usuários, sem limitações.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-start font-bold text-primary">
                  Quais integracoes o blup possui?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    Até o momento, integramos com ESAJ e PJE. Em breve, mais.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ul>
        </div>
      </section>
      <footer>
        <div className="flex flex-col items-center justify-center pb-4 pt-8 text-sm">
          <h4 className="text-lg text-white">Made with ❤️ by </h4>
          <a
            href="https://twitter.com/jj_neno"
            className="text-white no-underline hover:underline"
          >
            J²
          </a>
        </div>
      </footer>
    </div>
  );
}
