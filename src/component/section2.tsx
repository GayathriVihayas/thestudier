import { motion } from "framer-motion";
import Image from "next/image";

const Section2 = () => {
    return (
        <div className="container mx-auto relative p-10 my-16">
            <div className="w-full text-center font-sans font-bold text-3xl">Have You Struggled With This Before</div>
            <div className="flex md:flex-row flex-col justify-evenly items-start p-6 text-xl font-medium font-serif pt-10">
                <motion.div
                    whileInView={{x: 0, opacity: 1}}
                    initial={{x: -20, opacity: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    viewport={{ once: true }}
                    className="flex justify-between items-center flex-col w-full md:w-1/3 px-0 md:px-8 py-5"
                >
                    <Image src="/unstructured.svg" width={50} height={50} />
                    <div className="pt-4">Unstructured-Scattered articles, blogs & videos need extra effort to stitch it all together</div>
                </motion.div>
                <motion.div
                    whileInView={{scale: 1, opacity: 1}}
                    initial={{scale: 0.85, opacity: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    viewport={{ once: true }}
                    className="flex justify-end items-center flex-col w-full md:w-1/3 px-0 md:px-8 py-5"
                >
                    <Image src="/theoretical.svg" width={50} height={50} />
                    <div className="pt-4">Theoretical-Limited practical work</div>
                </motion.div>
                <motion.div
                    whileInView={{x: 0, opacity: 1}}
                    initial={{x: 20, opacity: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    viewport={{ once: true }}
                    className="flex justify-end items-center flex-col w-full md:w-1/3 px-0 md:px-8 py-5"
                >
                    <Image src="/not_industry.svg" width={50} height={50} />
                    <div className="pt-4">Not industry-relevant - Old, un-refreshed content</div>
                </motion.div>
            </div>
        </div>
    );
}

export default Section2;