import { motion } from "framer-motion";
import Image from "next/image";

const Section3 = () => {
    return (
        <div className="relative flex items-center justify-center bg-secondary w-screen" style={{height: '100vh'}}>
            <div className="container mx-auto">
                <motion.div
                    animate={{ y: -50 }}
                    transition={{   y: {
                            duration: 2,
                            yoyo: Infinity,
                            ease: "easeInOut",
                        }}}
                    className="relative " style={{minHeight: '50vh'}}
                >
                    <Image src="/online_platform.png" objectFit="contain" layout="fill" />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="p-2"
                >
                    <div className="w-full text-center font-sans font-bold text-2xl md:text-3xl">The Best Online Platform <br/> For Online Learning</div>
                    <div className="w-full text-center font-serif font-medium py-5 px-5 text-xl">
                        Our program is designed to help you become an expert in Tech Skill and ace product interviews to scale up in your tech career
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Section3;