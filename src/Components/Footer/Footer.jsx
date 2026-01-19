const Footer = () => {
    return (
        <footer className="bg-[#09090b] text-white pt-16 pb-8 px-4 sm:px-8">
            <div className="container mx-auto max-w-7xl">
                {/* Top Section: Branding and Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold italic">CS — Ticket System</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Our Mission</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact Sales</li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Products & Services</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Customer Stories</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Download Apps</li>
                        </ul>
                    </div>

                    {/* Information Links */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Information</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Join Us</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Socials and Copyright */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        
                        {/* Copyright text */}
                        <p className="text-gray-500 text-sm order-2 md:order-1 text-center md:text-left">
                            © 2025 CS — Ticket System. All rights reserved.
                        </p>

                        {/* Social Links (Right side as per your image) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 order-1 md:order-2">
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors">
                                <span className="bg-gray-800 p-2 rounded-full">𝕏</span> @CS — Ticket System
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors">
                                <span className="bg-gray-800 p-2 rounded-full">in</span> @CS — Ticket System
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors">
                                <span className="bg-gray-800 p-2 rounded-full">f</span> @CS — Ticket System
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors">
                                <span className="bg-gray-800 p-2 rounded-full">✉</span> support@cst.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button (Bottom Center) */}
            <div className="mt-12 flex justify-center">
                <button 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className="bg-gray-800 p-3 rounded-2xl hover:bg-gray-700 transition-all active:scale-90"
                >
                    <span className="text-2xl text-gray-400">︽</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;