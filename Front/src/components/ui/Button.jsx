const buttonVariants = {
  primary:
    "bg-neutral-700 hover:bg-blue-700 text-neutral-200 text-sm hover:bg-neutral-600 focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50 drop-shadow-md",
  secondary: "bg-gray-500 hover:bg-gray-700 text-black",
  create:
    "bg-green-500 hover:bg-blue-700 text-neutral-200 text-sm hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 drop-shadow-md",
};

function Button({ children, variant, ...props }) {
  const variantStyles = buttonVariants[variant] || buttonVariants.primary;

  return (
    <button
      className={`px-4 py-2 gap-2 flex items-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${variantStyles}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
