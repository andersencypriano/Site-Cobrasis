import { solucoes } from "@/seeds/Solucoes";
export default function Solucoes() {

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {solucoes.map((solution, i) => (
          <div key={i} className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 hover:scale-105 transition">
            <div className="mb-4 flex justify-center">{solution.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{solution.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{solution.desc}</p>
            <ul className="list-inside text-sm text-gray-700">
              {solution.items.map((item, i) => (
                <li className="before:content-['✓'] before:inline-block before:mr-2 before:text-green-600" key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}