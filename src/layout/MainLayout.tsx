
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import NavBar from "../components/Navbar";

export default function MainLayout(props:any) {
  return (
    <div className={`bg-darkGray proxima`}>
      <NavBar />
      <Menu isActive={false} />
      <main className="mx-auto xl:w-auto">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
