import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const artistData = [
  {
    name: "Tems",
    genre: "R&B - Damages",
    image: "/image-1.png",
  },
  {
    name: "Burna Boy",
    genre: "Afrobeats - Twice as tall",
    image: "/burna-boy-amazing-live-afrobeats-music-performance-2022-youtube-.png",
  },
  {
    name: "Asake",
    genre: "Afrobeats - Why Love",
    image: "/gettyimages-1420958367-1.png",
  },
];

export const JoinOptionsSection = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artistData.map((artist, index) => (
          <Card
            key={index}
            className="relative h-64 md:h-72 rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-black/60 border-0 shadow-lg"
          >
            <CardContent className="p-0 relative w-full h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={artist.name}
                src={artist.image}
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between items-end">
                <div className="text-white">
                  <div className="font-bold text-base md:text-lg mb-1">{artist.name}</div>
                  <div className="text-xs md:text-sm opacity-90">{artist.genre}</div>
                </div>

                <Button
                  className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white bg-transparent hover:bg-white/10 text-white text-xs md:text-sm font-medium transition-colors"
                  variant="outline"
                >
                  View Profile
                </Button>
              </div>

              <img
                className="absolute top-4 md:top-6 right-4 md:right-6 w-5 h-5 md:w-6 md:h-6"
                alt="Play"
                src="/component-1.svg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};