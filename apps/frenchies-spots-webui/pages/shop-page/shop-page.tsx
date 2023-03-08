import React, { ReactNode, useState, useMemo, useCallback } from "react";
import { Stripe } from "../../components/stripe/stripe";
import { PageLayout } from "../../layout";
import { Box, Container } from "../../materials";
import { Product } from "../../types";
import { ProductCard } from "../../components/product-card/product-card";
import { useTheme, useMediaQuery } from "../../hooks";
import { styles } from "./shop-page-styles";

const products: Product[] = [
  {
    id: "7dc3afff-afd6-4382-b720-f1dc5fcdf2b4",
    photoUrl:
      "https://res.cloudinary.com/db00tntyg/image/upload/v1674319005/travelerSpot/assets/gamePoint/ipbgjxf5gfendu52azth.png",
    gamePoints: 1000,
    price: 10,
  },
  {
    id: "12e37e68-b5a8-45c6-baf5-439d05f83c11",
    photoUrl:
      "https://res.cloudinary.com/db00tntyg/image/upload/v1674319054/travelerSpot/assets/gamePoint/jp2sf3mammasgrupfxdv.png",
    gamePoints: 2000,
    price: 20,
  },
  {
    id: "26dc0bfd-e85a-4604-8c2f-71544a049d3a",
    photoUrl:
      "https://res.cloudinary.com/db00tntyg/image/upload/v1674319054/travelerSpot/assets/gamePoint/qowhkz6h0q8yul1u6qqs.png",
    gamePoints: 3000,
    price: 30,
  },
  {
    id: "02d488c7-d022-4503-9a3c-82c610cb2cad",
    photoUrl:
      "https://res.cloudinary.com/db00tntyg/image/upload/v1674319054/travelerSpot/assets/gamePoint/xycxjjhmfttraxxdrmgj.png",
    gamePoints: 4000,
    price: 40,
  },
  {
    id: "4f0411e1-e97d-4417-b5d5-fe8223d5ec07",
    photoUrl:
      "https://res.cloudinary.com/db00tntyg/image/upload/v1674319054/travelerSpot/assets/gamePoint/anxg4odxqp8uf4uwmksd.png",
    gamePoints: 5000,
    price: 50,
  },
];

export const ShopPage = () => {
  const [revealed, setRevealed] = useState(true);
  const [selectProduct, setSelectProduct] = useState<Product | undefined>(
    undefined
  );

  const { isPhone } = useMediaQuery();
  const style = useTheme(styles, isPhone);

  const stipe: ReactNode = useMemo(() => {
    if (typeof selectProduct !== "undefined") {
      const { photoUrl, gamePoints, price } = selectProduct;
      return (
        <Stripe
          gamePoint={gamePoints}
          articlePrice={price}
          articlePicture={photoUrl}
          onClose={() => {
            setRevealed(true);
            setSelectProduct(undefined);
          }}
        />
      );
    }
    return null;
  }, [selectProduct, style]);

  const handleProductClick = useCallback(
    (product: Product) => {
      const isSameProduct = selectProduct?.id === product.id;
      setSelectProduct(() => {
        if (isSameProduct) {
          return undefined;
        }
        return product;
      });
      if (isSameProduct) setRevealed(true);
      else setRevealed(false);
    },
    [selectProduct]
  );

  return (
    <PageLayout
      isDrawer={true}
      isDrawerRevealed={revealed}
      drawerChildren={
        <Container center style={style.mainContainer}>
          <Container style={style.stripe}>{stipe}</Container>
        </Container>
      }
      direction="column"
      justify={undefined}
      align="center"
      pv={40}
      ph={16}
    >
      <Box style={style.container}>
        {products.map((product) => {
          const { id } = product;
          return (
            <ProductCard
              key={id}
              {...product}
              style={{ marginBottom: 20 }}
              onProductClick={handleProductClick}
            />
          );
        })}
      </Box>
    </PageLayout>
  );
};
