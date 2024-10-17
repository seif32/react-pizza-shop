import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="rounded-lg bg-stone-200 p-10 shadow-md">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        <p className="mt-4 font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
