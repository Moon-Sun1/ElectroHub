import { useParams } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import appleWatchImage from "../assets/Apple_Watch_Ultra_2-removebg-preview.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const data = [
  {
    id: 1,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: appleWatchImage,
    description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings, delivering rich
                    bass and crystal-clear highs. `,
    company: "apple",
    category: "Accessories",
    insert_Date: "2025-01-14",
    rate: 4.5,
  },
  {
    id: 2,
    name: "Xbox series x",
    price: 500,
    image: appleWatchImage,
    description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings,`,
    company: "apple",
    category: "Gaming",
    insert_Date: "2025-01-21",
    rate: 4.5,
  },
  {
    id: 3,
    name: "Samsung gear camera",
    price: 500,
    image: appleWatchImage,
    description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings,`,
    company: "apple",
    category: "Camera",
    insert_Date: "2025-01-7",
    rate: 4.5,
  },
  {
    id: 4,
    name: "Apple Watch Ultra 2",
    price: 500,
    image: appleWatchImage,
    description: `Experience immersive, high-fidelity audio with the Apple HomePod. 
                   This powerful smart speaker adapts to its surroundings, `,
    company: "apple",
    category: "Accessories",
    insert_Date: "2025-01-21",
    rate: 4.5,
  },
];

const SearchPage = () => {
  const { s } = useParams();

  const queryResult = data.filter((p) => {
    return p.name === s || p.category || p.company || [];
  });

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="relative my-10">
        <CardContainer data={queryResult} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SearchPage;
