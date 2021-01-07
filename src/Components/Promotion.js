function Promotion({ GetPecent, inputPromotion, setInputPromotion }) {
  return (

      <div className = "promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
          type="text"
          id="promo-code"
          onChange={(event) => setInputPromotion(event.target.value)}
          value={inputPromotion}
        />
        <button
          type="button"
          onClick={() => {
            GetPecent();
          }}
        >
          {" "}
          Accept{" "}
        </button>
      </div>

  );
}
export default Promotion;
