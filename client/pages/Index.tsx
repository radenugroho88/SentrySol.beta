import { Search, Shield, Eye, Bug, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen main-gradient relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full h-16 lg:h-20 px-6 lg:px-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3249d81bd5a0516fe5c613581be785b53ef9877e?width=130" 
                alt="SentrySol Logo" 
                className="w-8 h-8 lg:w-12 lg:h-12"
              />
              <span className="text-white font-poppins text-lg lg:text-2xl font-bold">
                SENTRYSOL
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#products" className="text-white/90 hover:text-white font-poppins text-lg transition-colors">
                Products
              </a>
              <a href="#about" className="text-white/90 hover:text-white font-poppins text-lg transition-colors">
                About
              </a>
              <a href="#docs" className="text-white/90 hover:text-white font-poppins text-lg transition-colors">
                Docs
              </a>
              <a href="#pricing" className="text-white/90 hover:text-white font-poppins text-lg transition-colors">
                Pricing
              </a>
            </div>

            {/* Search and Connect */}
            <div className="flex items-center gap-4">
              {/* Search - Hidden on mobile */}
              <div className="hidden md:flex relative">
                <input 
                  type="text" 
                  placeholder="I'm looking for..."
                  className="w-48 lg:w-64 h-10 bg-transparent border border-white/30 rounded-full px-4 pr-10 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white/50 transition-colors"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              </div>

              {/* Connect Button */}
              <button className="bg-white text-black font-poppins text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 rounded-full hover:bg-white/90 transition-colors">
                Connect
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="flex flex-col gap-4">
                <a href="#products" className="text-white font-poppins text-base">Products</a>
                <a href="#about" className="text-white font-poppins text-base">About</a>
                <a href="#docs" className="text-white font-poppins text-base">Docs</a>
                <a href="#pricing" className="text-white font-poppins text-base">Pricing</a>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    placeholder="I'm looking for..."
                    className="w-full h-10 bg-transparent border border-white/30 rounded-full px-4 pr-10 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white/50"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          {/* Tagline */}
          <p className="text-white/80 font-poppins text-sm lg:text-lg mb-8">
            Secure. Smart. Private.
          </p>

          {/* Main Heading */}
          <h1 className="font-poppins text-6xl sm:text-8xl lg:text-9xl xl:text-[275px] font-bold leading-tight uppercase gradient-text mb-12">
            SENTRYSOL
          </h1>

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/63d4f60c2a192a08d444bc9ff2880fed32d0e0c0?width=1519" 
                alt="SentrySol glow effect" 
                className="absolute inset-0 w-full h-full object-contain"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/cdd82043a412ca71168235cfa284d856822ce355?width=1519" 
                alt="SentrySol logo" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Description and CTA */}
          <div className="max-w-md mx-auto">
            <p className="text-white font-poppins text-lg leading-relaxed mb-8">
              SentrySol is an AI-native, on-device behavioral security framework
              built specifically for Web3 mobile environments, initially
              focusing on Solana Mobile Seeker.
            </p>
            <button className="bg-sentry-sage text-black font-poppins text-lg font-medium px-8 py-4 rounded-full hover:bg-sentry-sage/90 transition-colors w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/c825e8e63e3c0adb94bef5f03f13e3ea4131deac?width=3842" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 02 - Features */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-poppins text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight gradient-section-text mb-8">
              Intelligent Protection Right On Your Phone
            </h2>
            <p className="text-white text-xl lg:text-2xl font-normal leading-relaxed max-w-4xl mx-auto">
              We introduce an AI-native, on-device behavioral security framework
              specifically engineered to protect your Web3 mobile experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group">
              <div className="h-96 rounded-3xl border border-white/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-sentry-sage to-sentry-blue-gray flex items-center justify-center mb-6">
                  <Shield className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-white font-poppins text-2xl lg:text-3xl font-medium mb-4">
                  Your Data Private
                </h3>
                <p className="text-white/80 font-poppins leading-relaxed">
                  Your behavioral data never leaves your device. Security remains active, even when you're offline.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group lg:mt-8">
              <div className="h-96 rounded-3xl border border-white/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-sentry-sage to-sentry-blue-gray flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-white font-poppins text-2xl lg:text-3xl font-medium mb-4">
                  Spots Suspicious
                </h3>
                <p className="text-white/80 font-poppins leading-relaxed">
                  Guards against phishing, malicious smart contracts, and wallet draining.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="h-96 rounded-3xl border border-white/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-sentry-sage to-sentry-blue-gray flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-white font-poppins text-2xl lg:text-3xl font-medium mb-4">
                  Stop Threats
                </h3>
                <p className="text-white/80 font-poppins leading-relaxed">
                  Instant threat detection without network delays. Our system continuously adapts to new threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Technology */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-white font-poppins text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight mb-8">
              Revolutionizing Web3 Mobile Security
            </h2>
            <p className="text-white text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
              SentrySol is strategically focused on the Solana Mobile ecosystem,
              providing native, enhanced dApp security directly integrated with
              devices like the Solana Seeker.
            </p>
          </div>

          {/* Technology Diagram */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Logo */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white/5 blur-3xl"></div>
                {/* Logo */}
                <div className="relative w-32 h-32 lg:w-48 lg:h-48">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d0b18dc10ba3a797f474bf0852a8e6a5580a49c0?width=694" 
                    alt="SentrySol technology" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Feature Labels */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                "Phishing Interceptor",
                "Privacy-Preserving",
                "Hardware-Level Security",
                "Trusted Execution Environment",
                "Anomaly Detection Engine",
                "On-Device Processing"
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10">
                    <span className="text-white font-poppins text-sm lg:text-base font-medium">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Vision & Mission */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Vision */}
            <div className="space-y-8">
              <h2 className="text-white font-poppins text-5xl lg:text-7xl font-normal leading-tight">
                Vision
              </h2>
              <p className="text-white text-xl lg:text-2xl font-normal leading-relaxed">
                We envision a Web3 future where users interact with decentralized
                applications confidently and securely. SentrySol is building the
                essential, intelligent, and privacy-preserving security layer
                needed to unlock the full potential of Web3 on mobile devices.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-8">
              <h2 className="text-white font-poppins text-5xl lg:text-7xl font-normal leading-tight">
                Mission
              </h2>
              <p className="text-white text-xl lg:text-2xl font-normal leading-relaxed">
                Empowering Users, Fostering trust and confidence in every Web3
                interaction. Securing the Ecosystem, Protecting against evolving
                threats like blind signing and wallet draining. Driving Adoption,
                Making Web3 accessible and safe for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/8013e91495f1b7f65a4ae0271db823785859a912?width=1178" 
            alt="Data visualization" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Section 05 - Integration */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-poppins text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight gradient-section-text mb-8">
              Seamless Integration for Enhanced Security
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Phone Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/be7adfd84f304d55c0a85f977267b56af7b1a83a?width=1846" 
                alt="Solana Seeker phone" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <p className="text-white text-xl lg:text-2xl font-normal leading-relaxed">
                SentrySol is strategically focused on the Solana Mobile ecosystem,
                providing native, enhanced dApp security directly integrated with
                devices like the Solana Seeker.
              </p>
              <button className="bg-sentry-accent/20 text-white font-poppins text-lg px-8 py-4 rounded-full border border-white/10 hover:bg-sentry-accent/30 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - Coming Soon */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/3062c5637282367d8b1d3011ade4eeae1ca4cbaf?width=3840" 
            alt="Wave animation" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-relaxed mb-12">
            We're building the future of Web3 mobile security, a future where
            you're always protected.
          </p>

          <button className="bg-sentry-accent/20 border border-white/20 text-white font-poppins text-lg px-8 py-4 rounded-full hover:bg-sentry-accent/30 transition-colors mb-16">
            Start Now
          </button>

          <h2 className="text-white font-poppins text-6xl lg:text-8xl font-normal mb-12">
            Soon On
          </h2>

          <div className="flex justify-center mb-12">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ce913d73bf4273f828f4376a9e6e3b3cb247c0e5?width=1997" 
              alt="Seeker device" 
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>

          <div className="flex justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/14cd9f3ea7854a53575926aa3d38067d0d9147e1?width=760" 
              alt="Solana dApp Store Badge" 
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sentry-footer py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7a2765d9790496907d7a42bab916df1a729b35e2?width=78" 
                  alt="SentrySol Logo" 
                  className="w-10 h-10"
                />
                <span className="text-white font-poppins text-xl font-bold">
                  SENTRYSOL
                </span>
              </div>
              <p className="text-white/70 font-poppins leading-relaxed max-w-md">
                SentrySol is an AI-native, on-device behavioral security
                framework built specifically for Web3 mobile environments,
                initially focusing on Solana Mobile Seeker.
              </p>
            </div>

            {/* Explore */}
            <div className="space-y-4">
              <h3 className="text-white font-poppins text-lg font-semibold">
                Explore
              </h3>
              <div className="space-y-3">
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Press & Media</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Community</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-white font-poppins text-lg font-semibold">
                Resources
              </h3>
              <div className="space-y-3">
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Whitepaper</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Integration</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Blog</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mb-12">
            <h3 className="text-white font-poppins text-lg font-semibold mb-6">
              Join Our Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white/5 border border-white/20 rounded-xl px-4 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="bg-gradient-to-r from-sentry-accent/20 to-sentry-accent/10 border border-white/20 text-white font-poppins px-6 py-3 rounded-xl hover:from-sentry-accent/30 hover:to-sentry-accent/20 transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-white/70 font-poppins">
                © 2025 SentrySol. All rights reserved.
              </span>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
