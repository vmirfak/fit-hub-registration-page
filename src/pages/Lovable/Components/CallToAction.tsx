import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false)

    const handleClick = () => {
        setIsNavigating(true);

        setTimeout(() => {
            navigate("/anamnese");
        }, 2000);
    };


    return (
        <section id="letsbegin" className="py-24 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold leading-tight"
                    >
                        Pronto para Transformar o Teu Corpo e Saúde?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-blue-50/90"
                    >
                        Junta-te a milhares de clientes satisfeitos que alcançaram os seus objetivos de fitness e nutrição com o nosso coaching personalizado.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12"
                    >
                        <button
                            onClick={handleClick}
                            disabled={isNavigating}
                            className="bg-white cursor-pointer text-blue-600 hover:bg-blue-50 px-10 py-7 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                        >

                            {/* Text that stays visible on top */}
                            <span className="relative z-10">
                                {isNavigating ? (
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            opacity: [1, 0.8, 1]
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                        className="inline-flex items-center"
                                    >
                                        A preparar a tua jornada
                                        <motion.span
                                            animate={{
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                repeatDelay: 0.2
                                            }}
                                            className="ml-1"
                                        >
                                            ...
                                        </motion.span>
                                    </motion.span>
                                ) : (
                                    "Começa a tua Jornada Hoje!"
                                )}
                            </span>

                            {/* Bottom progress bar */}
                            {isNavigating && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-green-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2.0, ease: "easeInOut" }}
                                />
                            )}
                        </button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-10 text-sm text-blue-100/80"
                    >
                        O teu plano personalizado será entregue em até 48 horas após a conclusão da tua avaliação inicial.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;