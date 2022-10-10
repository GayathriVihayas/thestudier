import { motion } from "framer-motion";
import Image from "next/image";

const Check = () => (
    <span className="flex h-4 w-4 bg-blue-100 p-0 border-2 border-blue-100 rounded-full mr-3">
        <Image src="/check.svg" alt="c" width={15} height={15} />
    </span>
)

const Section5 = () => {
    return (
        <div className="bg-tertiary w-screen relative md:p-16">
            <div className="container flex md:flex-row flex-col mx-auto py-5">
                <motion.div
                    whileInView={{ x: 0, opacity: 1}}
                    initial={{ x: -50, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 w-full p-8 flex justify-start items-center"
                >
                    <div>
                        <div className="text-3xl font-sans font-bold">How Edugauge Help You</div>
                        <div className="text-xl py-4" style={{maxWidth: '400px'}}>
                            Our program is designed to help you become an expert in Tech Skill and ace product interviews to scale up in your tech career
                        </div>
                        <div>
                            <button className="bg-primary rounded-sm text-white px-5 py-3">Enroll now</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ y: 0, opacity: 1}}
                    initial={{ y: 50, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 w-full p-8 text-xl flex flex-col"
                >
                    <div className="flex items-center py-2">
                        <Check />
                        Advanced certificate programs
                    </div>
                    <div className="flex items-center py-2">
                        <Check />
                        Work with easy to use, safe and universal material
                    </div>
                    <div className="flex items-center py-2">
                        <Check />
                        Comprehensive study plan
                    </div>
                    <div className="flex items-center py-2">
                        <Check />
                        Learn from our expert faculties
                    </div>
                    <div className="flex items-center py-2">
                        <Check />
                        Career and placement guidance
                    </div>
                    <div className="flex items-center py-2">
                        <Check />
                        Mock Interview Preparation
                    </div>
                    <div className="flex items-center py-2">
                        <Check />
                        Report generation
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Section5;