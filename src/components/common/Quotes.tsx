export default function Quotes() {

    interface ClientQuote {
        name: string;
        quote: string;

    }

    const quotesList: ClientQuote[] = [
        { name: "Cliente satisfeito", quote: "Aumentamos em 40% nossa taxa de recuperação em 3 meses!" },
        { name: "Cliente satisfeito", quote: "Aumentamos em 40% nossa taxa de recuperação em 3 meses!" },
        { name: "Cliente satisfeito", quote: "Aumentamos em 40% nossa taxa de recuperação em 3 meses!" },
    ]

    return (
        <>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {quotesList.map((quote, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-purple-100 to-blue-100 hover:scale-105 transition"
                    >
                        <p className="text-gray-800 italic mb-4">“{quote.quote}”</p>
                        <span className="font-semibold">{quote.name}</span>
                    </div>
                ))}
            </div>
        </>
    )
}