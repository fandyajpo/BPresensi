import Header from "./header";
import Footer from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
