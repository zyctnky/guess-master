import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";

import Footer from "./Footer";
import Header from "./Header";
import { GameStoreContext } from "@/stores/common";
import GmLoading from "@/components/GmLoading";

export type LayoutMainProps = {
  children: ReactNode;
};

export default function LayoutMain(props: LayoutMainProps) {
  const { gameStartLoading } = useContext(GameStoreContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className="mx-auto flex flex-col items-center h-[100vh] md:py-10 py-3">
          <h1 className="text-4xl mb-3">
            guess<span className="font-bold">master</span>
          </h1>
          <Header />
          {!gameStartLoading ? props.children : <GmLoading text="Loading..." />}
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
