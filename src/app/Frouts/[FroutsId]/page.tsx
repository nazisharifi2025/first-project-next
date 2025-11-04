async function page({params}: {params: Promise<{FroutsId: string}>}) {
  const FroutsId = (await params).FroutsId;
  return (
    <div className="flex min-h-screen text-5xl font-bold items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     This is the details page about Frouts number <span className="text-blue-500">{FroutsId}</span> 
    </div>
  );
}
export default page