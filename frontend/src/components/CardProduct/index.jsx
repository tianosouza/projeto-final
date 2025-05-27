export default function CardProduct({
  offer = null,
  productImage,
  productName,
  productPrice,
  category,
  discountedPrice = null,
}) {
  const current = Number(productPrice.replace(/[^\d,]/g, "").replace(",", "."));

  let calculatedDiscountedPrice = discountedPrice;
  if (!discountedPrice && offer && current) {
    const offerDiscount = offer.match(/\d+/);
    const percent = offerDiscount ? parseInt(offerDiscount[0]) : 0;
    if (percent > 0) {
      const original = current / (1 - percent / 100);
      calculatedDiscountedPrice = original.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
  }

  let discountValue = null;
  if (offer && calculatedDiscountedPrice) {
    const original = Number(
      calculatedDiscountedPrice.replace(/[^\d,]/g, "").replace(",", ".")
    );
    if (original && current) {
      discountValue = (original - current).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
  }

  return (
    <div className="flex flex-col w-[18.4rem] h-[27.4rem] rounded-md">
      <div className="bg-white relative h-[19rem] flex items-center justify-center rounded-t-md overflow-hidden">
        {offer && (
          <div className="bg-offer-color absolute top-4 left-4 w-fit min-w-[6rem] max-w-[6rem] h-[2rem] px-4 text-xs text-black font-bold flex items-center justify-center rounded-4xl">
            {offer}
          </div>
        )}
        <img
          src={productImage}
          alt={productName}
          className="w-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col p-4">
        <span className="text-black text-xs">{category}</span>
        <h3 className="text-lg text-black font-semibold">{productName}</h3>
        <span className="flex items-center gap-1">
          {calculatedDiscountedPrice && (
            <p className="text-light-gray-2-color line-through text-sm m-0 p-0">
              {calculatedDiscountedPrice}
            </p>
          )}
          <p className="text-black m-0 p-0">{productPrice}</p>
        </span>
        {discountValue && (
          <span className="text-green-600 text-xs font-bold mt-1">
            Você economiza {discountValue}
          </span>
        )}
      </div>
    </div>
  );
}
