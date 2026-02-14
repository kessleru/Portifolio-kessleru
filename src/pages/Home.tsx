import ProfileCard from '@/components/ui/ProfileCard';

function Home() {
  return (
    <section className="content-container grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-lg:gap-12">
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-bold">
          <span className="text-ctp-green max-sm:hidden">&gt;</span>
          <h1>
            Olá! Sou o <span className="text-ctp-green">Kessleru</span>
          </h1>
        </div>
        <div className="w-full text-balance max-w-[60ch] text-sm sm:text-base text-ctp-subtext-0">
          <p className="mb-2">
            Sou estudante de Ciência da Computação com foco em desenvolvimento
            web{' '}
            <span className="border-b-2 border-ctp-green/80 border-dashed text-ctp-green/80">
              Full Stack
            </span>{' '}
            utilizando o ecossistema{' '}
            <span className="border-b-2 border-ctp-green/80 border-dashed text-ctp-green/80">
              JavaScript
            </span>
            .
          </p>
          <p>
            Meu aprendizado é orientado a projetos práticos e cursos
            aprofundados, o que me permite consolidar conceitos por meio da
            aplicação real e do desenvolvimento de soluções funcionais.
          </p>
        </div>
      </div>
      <ProfileCard />
    </section>
  );
}

export default Home;
