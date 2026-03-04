import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold mb-4">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-white p-4 mb-2 shadow rounded"
          >
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default CartPage;