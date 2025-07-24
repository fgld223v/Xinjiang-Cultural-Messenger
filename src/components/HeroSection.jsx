const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FEF9DE] via-[#D6975B]/30 to-[#B2622C]/20 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#566136] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-[#242F1A] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#B2622C] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-bold text-[#242F1A] mb-4">
          Discover Authentic Xinjiang Cultural Products
        </h2>
        <p className="text-xl text-[#566136] mb-8 max-w-2xl mx-auto">
          Bring centuries of tradition and cultural heritage into your modern life through our curated collection of handmade cultural treasures.
        </p>
        <button className="bg-[#566136] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#242F1A] transition-colors">
          Explore Cultural Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
