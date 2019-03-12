import NavBar from '../components/NavBar';

const Index = () => (
  <section>
    <NavBar />
    <h1>Hello World from Next</h1>
    <style jsx global>
      {`
        a {
          padding: 10px;
          text-decoration: none;
          color: green;
        }
      `}
    </style>
  </section>
);

export default Index;
