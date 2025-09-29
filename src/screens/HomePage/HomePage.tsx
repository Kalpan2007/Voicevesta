import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { ForArtistsSection } from "./sections/ForArtistsSection/ForArtistsSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { JoinOptionsSection } from "./sections/JoinOptionsSection/JoinOptionsSection";
import { MainBannerSection } from "./sections/MainBannerSection/MainBannerSection";

const navigationItems = [
  { label: "Home", active: true },
  { label: "Investor", active: false },
  { label: "Artist", active: false },
  { label: "About Us", active: false },
];

const investorCards = [
  {
    title: "Back a portfolio of 100 emerging artists.",
    image: "/frame-27-6.svg",
  },
  {
    title: "Own 'FOREVER' Tickets",
    description:
      'Support rising stars by purchasing lifetime "FOREVER" tickets that grant free access to all future shows. As the artist\'s fame grows, these tickets become highly valuable, both as collectibles and as assets you can resell for profit.',
    image: "/frame-27-2.svg",
  },
  {
    title: "Revenue Share",
    description:
      "Earn a slice of the artist's future income by participating in their growth journey. VoiceVesta allows fans and investors to share in streaming, merchandise, and touring revenues, creating long-term earning potential while multiplying your capital.",
    image: "/frame-27-1.svg",
  },
  {
    title: "Exclusive Perks",
    description:
      "Gain access to VIP-only benefits like meet-and-greets, behind the-scenes moments, and limited-edition merch. These perks reward your early support with unforgettable experiences and status among the artist's inner circle.",
    image: "/frame-27-3.svg",
  },
];

const artistCards = [
  {
    title: "Apply to be featured in the next VoiceVesta showcase.",
    image: "/frame-27.svg",
  },
  {
    title: "Get professional support to grow your audience and career",
    image: "/frame-27-5.svg",
  },
  {
    title: "Perform at events where fans and investors discover new talent",
    image: "/frame-27-4.svg",
  },
];

const statisticsCards = [
  {
    value: "$14.8B",
    title: "THE NIGERIAN ENTERTAINMENT SECTOR",
    description:
      "Nigerian entertainment is projected to generate US $14.82 billion by 2025",
    bgColor: "bg-dark",
  },
  {
    value: "$49B",
    title: "THE AFRICAN MUSIC INDUSTRY",
    description:
      "The African music industry is expanding and aiming for $49 billion by 2027",
    bgColor: "bg-pry",
  },
  {
    value: "67%",
    title: "DIGITAL STREAMING REVENUE",
    description: "67% of revenue driven by digital streaming across Africa.",
    bgColor: "bg-pry-2",
  },
  {
    value: "22.6%",
    title: "MUSIC GROWTH RATE",
    description:
      "This represents a 22.6% year‑over‑year increase, well above global average growth (~4.8%)",
    bgColor: "bg-sec",
  },
];

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen relative overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 mr-2"
              alt="VoiceVesta Logo"
              src="/2-1--1.svg"
            />
            <img
              className="pb-2 h-16"
              alt="VoiceVesta Text"
              src="/11-1.svg"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`font-semibold text-base cursor-pointer transition-colors ${
                  item.active ? "text-pry" : "text-dark hover:text-pry"
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-dark mb-1"></div>
            <div className="w-6 h-0.5 bg-dark mb-1"></div>
            <div className="w-6 h-0.5 bg-dark"></div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 md:px-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            alt="Background pattern"
            src="/background-sound-wave.png"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                <span className="text-dark">Own the Future of </span>
                <span className="text-pry">African Music</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Invest in the next 100 breakout artists and be part of Africa's biggest cultural export
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="px-6 md:px-8 py-3 md:py-4 bg-dark text-white rounded-full text-base md:text-lg font-medium hover:bg-dark/90 transition-colors">
                Start Investing
                <img className="w-5 h-5 ml-2" alt="Arrow" src="/button-icon-3.svg" />
              </Button>
              <Button className="px-6 md:px-8 py-3 md:py-4 bg-pry text-white rounded-full text-base md:text-lg font-medium hover:bg-pry/90 transition-colors">
                Apply as an Artist
                <img className="w-5 h-5 ml-2" alt="Arrow" src="/button-icon.svg" />
              </Button>
            </div>
          </div>

          {/* Right Content - Artist Images */}
          <div className="relative h-80 md:h-96 order-first lg:order-last">
            {/* Large artist image */}
            <div className="absolute top-0 right-4 md:right-0 w-32 h-32 md:w-40 lg:w-48 md:h-40 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Featured Artist"
                src="/rema-album-review-1.png"
              />
            </div>

            {/* Medium artist image */}
            <div className="absolute top-8 md:top-12 left-4 md:left-8 w-24 h-24 md:w-28 lg:w-32 md:h-28 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Artist"
                src="/akidjo-600x600-1.png"
              />
            </div>

            {/* Small artist images */}
            <div className="absolute bottom-12 md:bottom-8 right-8 md:right-12 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Artist"
                src="/davido-2-1024x736-1.png"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                className="w-full h-full object-cover"
                alt="Artist"
                src="/unnamed-1.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <HeroSection />
      </section>

      {/* Emerging Artists Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-3 border-2 border-dark rounded-full">
              <span className="text-dark font-medium">ARTIST</span>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
              Emerging Artists – Watch & Listen
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              <span className="font-semibold">Discover the next icons of African music.</span>
              {" "}Meet the artists our community is backing. Watch their one-minute reels and hear the sound of tomorrow
            </p>
          </div>

          {/* Artist Cards */}
          <div className="mb-12">
            <JoinOptionsSection />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex justify-between items-center mb-8">
            <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center opacity-50">
              <img className="w-6 h-6" alt="Previous" src="/arrow-left-01.svg" />
            </button>
            <span className="text-dark font-medium cursor-pointer hover:text-pry">
              See all Artists &gt;
            </span>
            <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center opacity-50">
              <img className="w-6 h-6" alt="Next" src="/arrow-left-01-1.svg" />
            </button>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl text-dark mb-6">Want to be featured here?</p>
            <Button className="px-6 md:px-8 py-3 md:py-4 bg-pry text-white rounded-full text-base md:text-lg font-medium hover:bg-pry/90 transition-colors">
              Apply as an Artist
              <img className="w-5 h-5 ml-2" alt="Arrow" src="/button-icon.svg" />
            </Button>
          </div>
        </div>
      </section>

      {/* Two Ways to Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-3 border-2 border-dark rounded-full">
              <span className="text-dark font-medium">JOIN</span>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">Two Ways to Join</h2>
          </div>

          {/* For Investors */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">For Investors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {investorCards.map((card, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="h-40 mb-6 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt={card.title}
                        src={card.image}
                      />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-dark text-lg leading-tight">
                        {card.title}
                      </h4>
                      {card.description && (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Artists */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">For Artists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {artistCards.map((card, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="h-40 mb-6 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt={card.title}
                        src={card.image}
                      />
                    </div>
                    <h4 className="font-semibold text-dark text-lg leading-tight">
                      {card.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button className="px-6 md:px-8 py-3 md:py-4 bg-pry text-white rounded-full text-base md:text-lg font-medium hover:bg-pry/90 transition-colors">
                Apply as an Artist
                <img className="w-5 h-5 ml-2" alt="Arrow" src="/button-icon.svg" />
              </Button>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="text-center">
            <Button className="px-6 md:px-8 py-3 md:py-4 bg-dark text-white rounded-full text-base md:text-lg font-medium hover:bg-dark/90 transition-colors">
              Get Started
              <img className="w-5 h-5 ml-2" alt="Arrow" src="/button-icon-2.svg" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why We Matter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-3 border-2 border-dark rounded-full">
              <span className="text-dark font-medium">WHY VOICEVESTA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight text-center lg:text-left">
                Why We Matter
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Afrobeats and African pop are filling arenas across the world. Fans
                everywhere want to be part of the journey, not just the audience.
                VoiceVesta turns that passion into real support that helps artists
                grow—and rewards those who believe early.
              </p>
            </div>

            {/* Right Content - Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statisticsCards.map((card, index) => (
                <Card
                  key={index}
                  className={`${card.bgColor} rounded-2xl text-white p-4 md:p-6 h-40 md:h-48 flex flex-col justify-center`}
                >
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="text-2xl md:text-3xl font-bold">{card.value}</div>
                    <div className="space-y-2">
                      <div className="font-bold text-xs md:text-sm uppercase tracking-wide">
                        {card.title}
                      </div>
                      <div className="text-xs md:text-xs leading-relaxed opacity-90">
                        {card.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Section Badge */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-3 border-2 border-dark rounded-full">
              <span className="text-dark font-medium">FAQS</span>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Component */}
          <ForArtistsSection />
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};