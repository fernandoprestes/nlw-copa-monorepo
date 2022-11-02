interface HomeProps {
  count: number;
}
import Image from "next/image";
import appPreviewImg from "./../assets/app-nlw-preview.png";
import LogoImg from "./../assets/logo.svg";
import usersAvataresImg from "./../assets/users-avatares.png";
import iconCheckImg from "./../assets/icon-check.svg";

export default function Home({ count }: HomeProps) {
  return (
    <div className="mx-auto grid h-screen max-w-7xl grid-cols-2 items-center gap-28 px-4">
      <main>
        <Image src={LogoImg} alt="logo" />
        <h2 className="mt-16 mb-10 text-display-lg font-bold text-white">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h2>

        <div className="flex items-center gap-2">
          <Image src={usersAvataresImg} alt="grupo de avatares" />
          <strong className="text-xl text-green-100">
            <span className="text-green-500">+12.592</span> pessoas já estão
            usando
          </strong>
        </div>
        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 rounded border border-gray-600 bg-gray-800 px-6 py-4 text-sm"
            type="text"
            required
            placeholder="Qual no do seu balão?"
          />
          <button
            className="rounded bg-yellow-500 px-6 py-4 text-sm font-bold uppercase text-gray-800 hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>
        <div className="mt-10 flex items-center justify-between  border-t border-gray-600 pt-10">
          <div className="flex items-center gap-6 pr-16 text-green-100">
            <Image src={iconCheckImg} alt="icon check" />
            <div className="flex flex-1 flex-col">
              <span className="text-xl font-bold">+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className="h-14 w-px bg-gray-600"></div>
          <div className="flex flex-1 items-center gap-6 pl-16  text-green-100">
            <Image src={iconCheckImg} alt="icon check" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">+125.012</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma previa da aplicação"
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  console.log(data);

  return {
    props: {
      count: data.count,
    },
  };
};
