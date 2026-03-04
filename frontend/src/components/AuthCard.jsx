export default function AuthCard({
  title,
  children
}) {

  return (

    <div className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-orange-400
    to-purple-600
    ">

      <div className="
      bg-white
      p-8
      rounded-xl
      shadow-xl
      w-96
      ">

        <h2 className="
        text-2xl
        font-bold
        mb-6
        text-center
        ">
          {title}
        </h2>

        {children}

      </div>

    </div>

  );

}