import Header from "./Header";

export default function Shell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
