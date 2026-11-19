"use client";

import { useState } from "react";

/**
 * Rosto do personagem do Minecraft pelo Visage (visage.surgeplay.com), o mesmo serviço do bot da guilda.
 * O UUID vale mesmo depois de a pessoa trocar de nick; sem ele, usa o nick. Pede o dobro do tamanho em tela para
 * ficar nítido em telas de alta densidade. Se o serviço falhar, mostra a inicial do nick.
 */
export default function RostoDoJogador({ nick, uuid, tamanho = 24 }: { nick: string; uuid?: string; tamanho?: number }) {
  const [falhou, setFalhou] = useState(false);
  const id = uuid?.replace(/-/g, "") || nick;
  if (falhou) {
    return (
      <span
        aria-hidden
        className="grid shrink-0 place-items-center rounded-[4px] bg-poco font-bold text-texto-2"
        style={{ width: tamanho, height: tamanho, fontSize: Math.max(10, Math.round(tamanho * 0.45)) }}
      >
        {nick.charAt(0).toUpperCase()}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- serviço externo de skins, tamanho fixo e pequeno
    <img
      src={`https://visage.surgeplay.com/face/${tamanho * 2}/${encodeURIComponent(id)}`}
      alt=""
      width={tamanho}
      height={tamanho}
      loading="lazy"
      decoding="async"
      onError={() => setFalhou(true)}
      className="shrink-0 rounded-[4px] bg-poco [image-rendering:pixelated]"
      style={{ width: tamanho, height: tamanho }}
    />
  );
}
