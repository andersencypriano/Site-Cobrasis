import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  message: string
}

export default function FormContact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.name, data.email, data.message)
    alert("Formulário enviado com sucesso")
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}className="max-w-3xl mx-auto grid gap-4 px-6">
          <input type="text" placeholder="Nome" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" {...register("name", { required: true })}/>
          {errors.name && <span className="text-red-500 text-sm">Preencha o campo nome.</span>}
          <input type="email" placeholder="E-mail" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" {...register("email", { required: true })}/>
          {errors.email && <span className="text-red-500 text-sm">Preencha o campo e-mail.</span>}
          <textarea placeholder="Mensagem" rows={4} className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" {...register("message", { required: true })}></textarea>
          {errors.message && <span className="text-red-500 text-sm">Preencha o campo mensagem.</span>}
          <button  type="submit" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
            Enviar
          </button>
        </form>
    </>
  )
}