import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SessionOne from "@/components/SessionOne/SessionOne";
import SessionThree from "@/components/SessionThree/SessionThree";
import SessionTwo from "@/components/SessionTwo/SessionTwo";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <SessionOne/>
      <SessionTwo/>
      <SessionThree/>
      <Footer/>
    </main>
  );
}
