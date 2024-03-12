function DefaultLayout({ children }) {
  return (
    <div>
      <h1  className="bg-white text-black min-h-5 text-center font-bold">this is the navbar</h1>

      {children}
    </div>
  );
}

export default DefaultLayout;