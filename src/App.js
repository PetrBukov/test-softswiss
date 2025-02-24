import {
  Header,
  Banner,
  OffersList,
  OfferDescription,
  Footer,
} from "./components";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="main-content">
          <OffersList />
          <OfferDescription />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
