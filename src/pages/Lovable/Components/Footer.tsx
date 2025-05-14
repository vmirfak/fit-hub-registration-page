import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent mb-4">
              IMVE
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Treino e nutrição personalizados, adaptados aos teus objetivos, preferências e estilo de vida únicos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white">Como Funciona</a></li>
              <li><a href="#features" className="hover:text-white">Os Nossos Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testemunhos</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#pricing" className="hover:text-white">Preçário</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Termos de Serviço</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacta-nos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>support@imvecoaching.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+351 910 123 456</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <div>
                  <span>Rua da Fitness 123</span>
                  <br />
                  <span>4610 - 999 Felgueiras</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} IMVE. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
