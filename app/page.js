import OpeningSection from "./components/OpeningSection";
import CountdownTimer from "./components/CountdownTimer";
import EventInfo from "./components/EventInfo";
import RSVPForm from "./components/RSVPForm";
import MapSection from "./components/MapSection";
import Gallery from "./components/Gallery";
import MusicPlayer from './components/MusicPlayer'

const data_tamu = ['dandi', 'deni']

const main_page = () => {
  return (
    <main id="main" className="min-h-screen">
      <MusicPlayer />
      <OpeningSection />
      <div id="main-content">
        <CountdownTimer />
        <EventInfo />
        <MapSection />
        <Gallery />
        <RSVPForm />
      </div>
    </main>
  );
}

const not_found = () => {
  return (
    <main id="main" className="min-h-screen">
      <div id="main-content">
        not found
      </div>
    </main>
  );
}


export default function Home({ searchParams }) {
  let tamu = searchParams?.to?.toLowerCase()
  
  return data_tamu.includes(tamu) ? main_page() : not_found()
}