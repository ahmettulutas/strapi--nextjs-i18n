// "use client";

// import NextPageTransition from "@gimwa/next-page-transition";

// const RootTemplate = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <NextPageTransition
//       initial={{ opacity: 0, scale: 0.6 }}
//       animate={{ opacity: 1, scale: 1.01 }}
//       exit={{ opacity: 0, scale: 0.6 }}
//     >
//       {children}
//     </NextPageTransition>
//   );
// };

// export default RootTemplate;
"use client";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RootTemplate;
