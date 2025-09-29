import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-96 rounded-3xl overflow-hidden bg-[url(/rear-view-excited-fans-having-fun-music-festival-taking-pictures.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
          <Badge
            variant="outline"
            className="mb-8 px-4 py-2 rounded-full border-white text-white bg-transparent hover:bg-white/10 font-bold text-sm"
          >
            ABOUT US
          </Badge>

          <h1 className="mb-12 max-w-lg font-bold text-white text-4xl leading-tight">
            What is VoiceVesta?
          </h1>

          <p className="max-w-4xl font-normal text-white text-lg leading-relaxed">
            <span>
              VoiceVesta connects music lovers, investors, and rising talent.
              Every year we support{" "}
            </span>
            <span className="font-bold">100 new artists</span>
            <span>
              , helping them record, tour and share their music with the world.
              Whether you want to back the next wave of stars or you're an
              artist ready to be discovered, this is where the journey begins.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};