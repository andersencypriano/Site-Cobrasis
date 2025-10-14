import { securityList } from "@/seeds/SecurityList";

export default function Security() {
  return (

    <div className="grid md:grid-cols-2 gap-8 md:max-w-4xl mx-auto px-6">
      {securityList.map((payOption, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl shadow-lg"
        >
          <h3 className="font-semibold text-lg mb-2">{payOption.title}</h3>
          <p className="text-sm text-gray-600">
            {payOption.description}
          </p>
        </div>
      ))}
    </div>
  );
}


