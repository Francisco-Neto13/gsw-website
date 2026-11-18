import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  cinfrasSilverbullImage,
  queueSteps,
  raidFirstStepsDescription,
  raidFirstStepsSupportImages,
  raids,
  silverbullNpcImage,
} from "@/components/raids/data/raids-content";
import { tamanhoDe } from "@/components/raids/data/raids-midia";

export default function RaidsPrimeirosPassos() {
  return (
    <SecaoGuia id="primeiros-passos" titulo="Primeiros passos" introducao={raidFirstStepsDescription}>
      <div className="max-w-[56rem] overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[40rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Requisitos de cada raid</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Raid
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Nível
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Runa
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Quest exigida
              </th>
            </tr>
          </thead>
          <tbody>
            {raids.map((raid) => (
              <tr key={raid.id} className="border-t border-linha align-top">
                <th scope="row" className="px-4 py-3 font-normal">
                  <a href={`#${raid.id}`} className="text-violeta underline decoration-violeta/40 hover:decoration-violeta">
                    {raid.sigla}
                  </a>
                  <span className="block text-apoio text-texto-3">{raid.name}</span>
                </th>
                <td className="numeros whitespace-nowrap px-4 py-3 font-mono text-texto">{raid.level}+</td>
                <td className="px-4 py-3 text-texto">{raid.rune}</td>
                <td className="px-4 py-3 text-texto-2">{raid.quest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-apoio text-texto-3">
        Níveis mínimos conferidos na wiki para a versão 2.2.4.
      </p>

      <div className="mt-10 grid max-w-[56rem] gap-6 md:grid-cols-2">
        <Figura
          src={silverbullNpcImage.src}
          alt={silverbullNpcImage.alt}
          legenda={silverbullNpcImage.caption}
          sizes="(min-width: 768px) 28rem, 100vw"
          {...tamanhoDe(silverbullNpcImage.src)}
        />
        <Figura
          src={cinfrasSilverbullImage.src}
          alt={cinfrasSilverbullImage.alt}
          legenda={cinfrasSilverbullImage.caption}
          sizes="(min-width: 768px) 28rem, 100vw"
          {...tamanhoDe(cinfrasSilverbullImage.src)}
        />
      </div>

      <h3 className="text-titulo-4 mt-10 max-w-[60ch] font-bold text-texto">Entrando pela fila de party</h3>
      <ol className="mt-4 grid max-w-[56rem] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {queueSteps.map((passo, indice) => (
          <li key={passo.src}>
            <Figura
              src={passo.src}
              alt={passo.alt}
              legenda={`${indice + 1}. ${passo.alt}`}
              sizes="(min-width: 1024px) 13rem, (min-width: 640px) 50vw, 100vw"
              {...tamanhoDe(passo.src)}
            />
          </li>
        ))}
      </ol>

      {raidFirstStepsSupportImages.map((imagem) => (
        <Figura
          key={imagem.src}
          src={imagem.src}
          alt={imagem.alt}
          legenda={imagem.caption}
          sizes="(min-width: 768px) 40rem, 100vw"
          className="mt-10 max-w-[40rem]"
          {...tamanhoDe(imagem.src)}
        />
      ))}
    </SecaoGuia>
  );
}
