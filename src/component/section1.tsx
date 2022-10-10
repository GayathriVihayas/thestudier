import Image from "next/image";
import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

const Section1 = () => {
    return (
        <div className="container mx-auto relative" style={{minHeight: '100vh'}}>
            <div className="flex flex-wrap p-10 flex-col md:flex-row items-center md:pt-24 pt-32" style={{minHeight: '75vh'}}>
                <motion.div
                    animate={{x: 0, opacity: 1}}
                    initial={{x: -100, opacity: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="md:w-1/2 lg:w-1/3 pr-10 flex justify-center items-start py-5 flex-col h-full"
                >
                    <div className="font-bold font-sans text-4xl">
                        Acquire Industry Relevant
                        Skills from <span className="text-primary">Edugauge</span>
                    </div>
                    <div className="py-5 font-normal text-xl pr-5">
                        More than 1000 children  have landed
                        jobs in leading tech companies,
                        get start your career from edugauge
                    </div>
                    <button className="bg-primary text-white px-6 py-2 rounded-sm">
                        View Courses
                    </button>
                </motion.div>
                <motion.div
                    animate={{x: 0, opacity: 1}}
                    initial={{x: 100, opacity: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                    className="md:w-1/2 lg:w-2/3 h-full py-5 flex justify-end relative"
                    style={{minHeight: '40vh'}}
                >
                    <Image src="/online_study.svg" className="md:pl-10 h-full" objectFit="contain" width={800} height={450}/>
                </motion.div>
            </div>
            <motion.div
                animate={{y: 0, opacity: 1}}
                initial={{y: 100, opacity: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="px-8 w-full pb-10"
            >
                <div className="flex justify-evenly flex-wrap items-center bg-white px-6 py-3 rounded-lg shadow-lg text-xl font-bold font-sans">
                    <div className="flex justify-center items-center flex-col py-6">
                        <Image src="/daily_class.svg" width={40} height={40} />
                        <div className="pt-5">Daily live classes</div>
                    </div>
                    <div className="flex justify-center items-center flex-col py-6">
                        <Image src="/practice_revise.svg" width={40} height={40} />
                        <div className="pt-5">Practice and Revise</div>
                    </div>
                    <div className="flex justify-center items-center flex-col py-6">
                        <Image src="/anytime_anywhere.svg" width={40} height={40} />
                        <div className="pt-5">Learn anytime, anywhere</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Section1;