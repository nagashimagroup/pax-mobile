import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { ProductProvider } from "contexts/product";
import { ProductLayout } from "layouts";
import Case from "components/Case/Case";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id, cs } = router.query;

  return (
    <div>
      <Head>
        <title>PAX | Product</title>
      </Head>

      <main>
        <ProductProvider id={id} caseOrder={cs as string}>
          <ProductLayout>
            <Case />
          </ProductLayout>
        </ProductProvider>
      </main>
    </div>
  );
};

export default ProductPage;
