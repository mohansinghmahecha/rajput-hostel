import Image from "next/image";
import HomeComponent from "./components/home/Home";
import DummyComponent from "./components/dummy/Dummy";
import InfoPageCompont from "./components/info-page/InfoPageCompont";
import HostelGalleryComponent from "./components/hostal-gallary/HostelGalleryComponent";

export default function Home() {
  return (
    <>    
    <HomeComponent/>
    <InfoPageCompont/>
    <HostelGalleryComponent/>
    {/* <DummyComponent/> */}
    </>
  )
}
