import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import PreviewCard from './components/PreviewCard';

const previewContents = [
  {
    title: 'Declarative',
    text: 'React makes it painless to create interactive UIs.',
    img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'
  },
  {
    title: 'Components',
    text: 'Build encapsulated components that manage their state.',
    img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png'
  },
  {
    title: 'Single-Way',
    text: "A set of immutable values are passed to the component's.",
    img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png'
  },
  {
    title: 'JSX',
    text: 'Statically-typed, designed to run on modern browsers.',
    img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png'
  }
];

function App() {
  return (
    <div className="App">
      <Hero />
      <section className="preview-cards d-flex justify-content-center my-4 flex-wrap">
        {previewContents.map((card, index) => (
          <PreviewCard
            key={index}
            img={card.img}
            title={card.title}
            text={card.text}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
