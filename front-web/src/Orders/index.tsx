import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./styles.css";

import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductsList";
import { OrderLocationData, Product } from "./types";
import { fetchProducts, saveOrder } from "../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import { checkIsSelected, verifyOrderPayload } from "./helpers";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const [isLoading, setLoading] = useState(false);

  const totalPrice = Number(
    selectedProducts.reduce((ac, val) => ac + val.price, 0)
  );

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch(() => {
        toast.warning("Erro ao listar os produtos");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    const verifyPayload = verifyOrderPayload(payload);

    if (verifyPayload) {
      saveOrder(payload)
        .then((response) => {
          toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
        .catch(() => {
          toast.warning("Erro ao enviar pedido.");
        });
    } else {
      toast.warning(
        "Nenhum produto foi selecionado ou endereço não cadastrado."
      );
    }
  };

  return (
    <div className="orders-container">
      <StepsHeader />
      {isLoading ? (
        <h1>Buscando pedidos...</h1>
      ) : (
        <ProductsList
          products={products}
          onSelectedProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
      )}
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
      <OrderSummary
        amount={selectedProducts.length}
        totalPrice={totalPrice}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Orders;
