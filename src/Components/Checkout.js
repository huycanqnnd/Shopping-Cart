import { NumberFormat } from "../Format/NumberFormat";
function Checkout({ Subtotal, pecent }) {
  function Tax() {
    let a = Subtotal * 0.1;
    return a;
  }
  function Total() {
    let stotal = Subtotal + Subtotal * 0.1;
    return stotal;
  }
  function Discount() {
    let sDiscount = (Total() * pecent) / 100;
    return sDiscount;
  }

  function Amount() {
    let sAmount = Total() - Discount();
    return sAmount;
  }

  return (
    <section className="container">
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{NumberFormat(Subtotal)}</span>
          </li>
          <li>
            Tax <span>{NumberFormat(Tax())}</span>
          </li>
          <li>
            Discount <span>{NumberFormat(Discount())}</span>
          </li>
          <li className="total">
            Total <span>{NumberFormat(Total())}</span>
          </li>
          <li className="total">
            Amount <span>{NumberFormat(Amount())}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
</section>
  );
}
export default Checkout;
