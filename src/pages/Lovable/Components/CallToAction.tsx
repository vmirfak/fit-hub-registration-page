import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
     const navigate = useNavigate();
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
                        Pronto para Transformar o Seu Corpo e Saúde?
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-blue-50/90"
                    >
                        Junte-se a milhares de clientes satisfeitos que alcançaram os seus objetivos de fitness e nutrição com o nosso coaching personalizado.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12"
                    >
                        <Button 
                        onClick={() => navigate("/anamnese")}
                            className="bg-white cursor-pointer text-blue-600 hover:bg-blue-50 px-10 py-7 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            Começa a tua Jornada Hoje!
                        </Button>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-10 text-sm text-blue-100/80"
                    >
                        O seu plano personalizado será entregue em até 48 horas após a conclusão da sua avaliação inicial.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;