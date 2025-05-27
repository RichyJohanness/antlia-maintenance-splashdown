
import { Button } from "@/components/ui/button";
import { ExternalLink, Wrench, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  const handleRedirect = () => {
    window.open("https://antlia.id/", "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-red-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon container with animation */}
          <div className="mb-8 relative">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
              <Wrench className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full animate-ping"></div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Oops!
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6 animate-fade-in delay-300">
            Antlia ERP Under Maintenance
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in delay-500">
            Kami sedang melakukan pemeliharaan sistem untuk memberikan pengalaman yang lebih baik. 
            Silakan kunjungi situs utama kami untuk informasi lebih lanjut.
          </p>

          {/* Status indicator */}
          <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in delay-700">
            <Clock className="w-5 h-5 text-white/70" />
            <span className="text-white/70 text-sm">Estimasi selesai: Segera</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in delay-1000">
            <Button
              onClick={handleRedirect}
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl px-8 py-6 text-lg font-semibold group"
            >
              <span>Kunjungi Situs Utama</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <ExternalLink className="ml-2 w-4 h-4 opacity-70" />
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-12 animate-fade-in delay-1200">
            <p className="text-sm text-white/60">
              Butuh bantuan? Hubungi tim support kami
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/25 rounded-full animate-ping delay-2000"></div>
      </div>
    </div>
  );
};

export default Index;
