import { formatPrice } from "./helpers";

type Props = {
  amount: number;
  totalPrice: number;
  handleSubmit: () => void;
};

function OrderSummary({ amount, totalPrice, handleSubmit }: Props) {
  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{amount}</strong>
            PRODUTO(S) SELECIONADO(S)
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">
              {formatPrice(totalPrice)}
            </strong>
            VALOR TOTAL
          </span>
        </div>
        <button className="order-summary-make-order" onClick={handleSubmit}>
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
