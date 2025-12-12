import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #000000 0%, #FF6500 100%)"
            }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10 text-center px-4">
                {/* Animated Ghost */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                    }}
                    className="text-9xl mb-8 drop-shadow-2xl"
                >
                    👻
                </motion.div>

                {/* 404 Text with Glow Effect */}
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-8xl md:text-9xl font-black mb-6 text-white drop-shadow-2xl"
                >
                    404
                </motion.h1>

                {/* Error Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-md mx-auto drop-shadow">
                        The page you're looking for seems to have vanished into thin air.
                        Don't worry, even ghosts get lost sometimes!
                    </p>
                </motion.div>

                {/* Home Button */}
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF6500] rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-50"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Return to Homepage
                </motion.a>

                {/* Additional Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-white/80 text-sm"
                >
                    Error code: 404 • Page missing or moved
                </motion.p>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute bottom-10 left-10 text-4xl opacity-20"
            >
                🔍
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute top-10 right-10 text-4xl opacity-20"
            >
                🗺️
            </motion.div>
        </div>
    );
}