
import { motion } from "framer-motion"
const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="flex flex-col gap-10 lgl:flex-row lgl:gap-20">
            <div className="w-full lgl:w-1/2">
                <div className="py-12 ">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
                    <h2 className="text-2xl font-bold lgl:text-4xl">Design Skill</h2>
                </div>
                <div className="flex flex-col w-full gap-6 mt-6 lg:mt-6">
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">HTML5</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[90%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">figma</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[80%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">CSS3</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[85%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">85%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">Tailwind</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[90%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">bootstrap</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[85%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">85%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">github</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[80%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">80%</span>
                            </motion.span>
                        </span>
                    </div>

                </div>
            </div>
            <div className="w-full lgl:w-1/2">
                <div className="py-12 ">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
                    <h2 className="text-2xl font-bold lgl:text-4xl">Development Skill</h2>
                </div>

                {/* DEVELOPMENT SKILLS */}

                <div className="flex flex-col w-full gap-6 mt-6 lg:mt-6">
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">java script</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[85%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">85%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">react js</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[80%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">node js</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[75%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">75%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">express js</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[70%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">70%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">firebase</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[85%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">85%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium uppercase">mongo db</p>
                        <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }} className="relative w-[65%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500">
                                <span className="absolute right-0 text-sm -top-6">65%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;