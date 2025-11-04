export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1 className="text-5xl font-bold">Frouts Page</h1>
    <div className="flex flex-col gap-4 text-2xl">
         <div className="flex space-x-2">
        <h2>1.</h2>
        <h2>Apple</h2>
        <h2>🍎</h2>
     </div>
      <div className="flex space-x-2">
        <h2>2.</h2>
        <h2>Oring</h2>
        <h2>🍊</h2>
     </div>
      <div className="flex space-x-2">
        <h2>3.</h2>
        <h2>Banana</h2>
        <h2>🍌</h2>
     </div>
    </div>
    </div>
  );
}
