// HOME PAGE CORRIGIDA
'use client';


import Form from '../components/Form';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen w-full p-0 m-0">
      {/* Section da imagem de fundo em tela cheia */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo escurecida */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/bg1.png"
            alt="Fundo"
            fill
            style={{ objectFit: 'cover', zIndex: 0 }}
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        {/* Conteúdo central */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <Image
            src="/images/logo.png"
            alt="Logo Workshop"
            width={160}
            height={160}
            className="drop-shadow-lg w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-4"
            priority
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-2 drop-shadow-lg">SUPERAGOS<br /> Cadastre-se e fique por dentro das novidades!</h1>
        </div>
        
        {/* Seta pulsante para baixo */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg 
              className="w-8 h-8 text-white animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <section id="formulario" className="bg-[#f5f7fa] py-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#263165]">Faça seu cadastro e conheça nossas soluções!</h2>
        <Form />
      </section>

      {/* Rodapé com redes sociais */}
      <footer className="w-full py-8 px-4 bg-[#263165] border-t border-[#263165]/20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Ícones das redes sociais */}
          <div className="flex gap-6 mb-4">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/r3suprimentos?locale=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/r3suprimentos/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/r3suprimentos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-[#263165]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Texto de copyright */}
          <p className="text-white text-sm font-[Montserrat] text-center">
            © 2024 R3 Suprimentos. Todos os direitos reservados.
          </p>
          <p className="text-white text-sm font-[Montserrat] text-center">
            Desenvolvido por{' '}
            <a 
              href="https://www.linkedin.com/in/christofer-henrique-43366725b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[#009FE3] transition-colors duration-200"
            >
              Christofer Henrique
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}
