export default function Produtos() {
  return (
    <section className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Ex5 — Cards com Mesma Altura (Flex Grow)
      </h2>

      {/* Container flex com cards de altura igual */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Card 1</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Este card contém um texto mais curto.
            </p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Card 2</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Este card tem um texto um pouco mais longo para mostrar que todos
              os cards mantêm a mesma altura, graças ao uso de `flex-grow`.
            </p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col">
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Card 3</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Outro exemplo com um conteúdo de tamanho diferente, mas altura
              final idêntica.
            </p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}