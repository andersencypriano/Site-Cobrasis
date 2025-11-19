import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function FormDemo() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("https://api-resend-cb5u.vercel.app/api/send/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setStatus("error");
        setErrorMessage(payload?.error ?? "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem de contato.", error);
      setStatus("error");
      setErrorMessage("Erro inesperado. Tente novamente em instantes.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-1/2 mx-auto grid gap-2"
    >
      <input
        type="text"
        placeholder="Nome"
        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register("name", { required: true })}
        disabled={status === "loading"}
      />
      {errors.name && (
        <span className="text-red-500 text-sm">Preencha o campo nome.</span>
      )}
      <input
        type="email"
        placeholder="E-mail"
        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register("email", { required: true })}
        disabled={status === "loading"}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">Preencha o campo e-mail.</span>
      )}
      <textarea
        placeholder="Mensagem"
        rows={4}
        className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...register("message", { required: true })}
        disabled={status === "loading"}
      />
      {errors.message && (
        <span className="text-red-500 text-sm">
          Preencha o campo mensagem.
        </span>
      )}
      <button
        type="submit"
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && (
        <span className="text-green-600 text-sm">
          Mensagem enviada com sucesso!
        </span>
      )}

      {status === "error" && (
        <span className="text-red-500 text-sm">
          {errorMessage ?? "Ocorreu um erro ao enviar sua mensagem."}
        </span>
      )}
    </form>
  );
}
