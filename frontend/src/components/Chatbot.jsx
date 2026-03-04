import { useState } from "react";

export default function Chatbot() {

  const [open, setOpen] =
    useState(false);

  return (

    <div>

      {/* floating button */}

      <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-6
        right-6
        bg-gradient-to-r
        from-orange-500
        to-purple-600
        text-white
        w-14 h-14
        rounded-full
        shadow-lg
        text-xl
        "
      >

        🤖

      </button>


      {/* chat window */}

      {open && (

        <div className="
        fixed
        bottom-24
        right-6
        bg-white
        w-80
        h-96
        rounded-xl
        shadow-xl
        flex flex-col
        ">


          <div className="
          bg-gradient-to-r
          from-orange-500
          to-purple-600
          text-white
          p-3
          rounded-t-xl
          ">

            AI Food Assistant

          </div>


          <div className="
          flex-1
          p-3
          text-sm
          ">

            Ask me:

            <div className="
            bg-gray-100
            p-2
            rounded
            mt-2
            ">

              healthy food under ₹200

            </div>

          </div>


          <input
            placeholder="Type message..."
            className="
            border-t
            p-2
            outline-none
            "
          />

        </div>

      )}

    </div>

  );

}