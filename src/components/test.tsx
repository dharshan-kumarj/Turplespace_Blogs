

const TestTailwind = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-violet-500">Tailwind Test</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">This paragraph should be styled by Tailwind.</p>
      <div className="mt-4 flex space-x-2">
        <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
          Violet Button
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
          Gray Button
        </button>
      </div>
    </div>
  );
};

export default TestTailwind;