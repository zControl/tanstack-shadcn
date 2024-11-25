export const ErrorPage = (message: string) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
};
