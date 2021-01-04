import { NumberFormat } from '../Format/NumberFormat'
function Checkout({ Subtotal }) {
  let tax = Subtotal * 0.1;
  let total = Subtotal * 1.1;
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{NumberFormat(Subtotal)}</span>
          </li>
          <li>
            Tax <span>{NumberFormat(tax)}</span>
          </li>
          <li className="total">
            Total <span>{NumberFormat(total)}</span>
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
