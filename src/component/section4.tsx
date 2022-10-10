import { motion } from "framer-motion";
import Image from "next/image";

const Section4 = () => {
    return (
        <div className="container mx-auto relative md:p-10 my-10">
            <div className="flex md:justify-evenly md:flex-row flex-col items-center p-6 text-xl font-medium font-serif py-4">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-end items-start flex-col w-full md:w-1/3 p-8"
                >
                    <Image src="/mentorship.png" width={350} height={250} />
                    <div>
                        <div className="font-semibold text-2xl font-sans">One-on-one mentorship</div>
                        <div className="font-normal py-5">one-on one interaction with the trainers, doubt clearance section</div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-end items-start flex-col w-full md:w-1/3 p-8"
                >
                    <Image src="/mocktest.png" width={350} height={250} />
                    <div>
                        <div className="font-semibold text-2xl font-sans">Daily Mock Tests</div>
                        <div className="font-normal py-5">practice section, mock tests, assignments, lecture notes etc</div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-end items-start flex-col w-full md:w-1/3 p-8"
                >
                    <Image src="/learning.png" width={350} height={250} />
                    <div>
                        <div className="font-semibold text-2xl font-sans">Self paced Learning</div>
                        <div className="font-normal py-5" style={{maxWidth: '350px'}}>learn with live videos as well as recorded videos</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Section4;