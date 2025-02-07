export default function HomePage() {
  return (
    <section className="home-page container max-w-screen-xl mx-auto flex items-center justify-between h-[100vh] gap-2.5">
      <div className=" w-1/2 space-y-4 pl-10 pt-80">
        <h2 className="text-white text-5xl font-bold pb-2.5">
          Enjoy Our Delicious
        </h2>
        <p className="text-white font-medium pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          corrupti, officiis beatae vitae laudantium ut aspernatur distinctio
          dignissimos aliquam temporibus eligendi sed labore sapiente nostrum
          delectus eveniet possimus perferendis quos!
        </p>
        <button className=" text-amber-50 text-2xl font-medium bg-amber-500 py-3 px-9  hover:bg-amber-600 transition cursor-pointer uppercase">
          Book a table
        </button>
      </div>
      <div className="w-1/2 flex justify-end pt-20 pr-10 relative ">
        <img
          className=" spin-animation "
          src="../image/pasta.png"
          alt="pasta"
        ></img>
      </div>
    </section>
  );
}
