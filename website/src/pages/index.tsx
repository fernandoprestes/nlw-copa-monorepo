import { FormEvent, useState } from "react";
import Image from "next/image";
import appPreviewImg from "./../assets/app-nlw-preview.png";
import LogoImg from "./../assets/logo.svg";
import usersAvataresImg from "./../assets/users-avatares.png";
import iconCheckImg from "./../assets/icon-check.svg";
import { api } from "../lib/axios";

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home({ poolCount, guessCount, userCount }: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");

  async function createPool(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post("/pools", {
        title: poolTitle,
      });

      const { code } = response.data;
      await navigator.clipboard.writeText(code);

      setPoolTitle("");

      alert(
        "Bolão criado com sucesso! Código copiado na area de transferência!"
      );
    } catch (error) {
      alert("Falha ao criar o bolão");
    }
  }
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
            <span className="text-green-500">+{userCount}</span> pessoas já
            estão usando
          </strong>
        </div>
        <form onSubmit={createPool} className="mt-10 flex gap-2">
          <input
            className="flex-1 rounded border border-gray-600 bg-gray-800 px-6 py-4 text-sm text-green-100"
            type="text"
            required
            placeholder="Qual no do seu balão?"
            onChange={(event) => setPoolTitle(event.target.value)}
            value={poolTitle}
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
              <span className="text-xl font-bold">+{poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className="h-14 w-px bg-gray-600"></div>
          <div className="flex flex-1 items-center gap-6 pl-16  text-green-100">
            <Image src={iconCheckImg} alt="icon check" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">+{guessCount}</span>
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
  const [poolCountResponse, guessCountResponse, userCountResponse] =
    await Promise.all([
      api.get("/pools/count"),
      api.get("/guesses/count"),
      api.get("/users/count"),
    ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    },
  };
};
