import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export type LayoutMainProps = {
  children: ReactNode;
};

export default function LayoutMain(props: LayoutMainProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className="container mx-auto flex flex-col items-center h-[100vh] md:py-10 py-3">
          <h1 className="text-4xl mb-3">
            guess<span className="font-bold">master</span>
          </h1>
          {props.children}
        </div>
      </motion.div>
    </>
  );
}
