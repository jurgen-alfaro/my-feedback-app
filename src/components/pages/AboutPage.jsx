import Card from "../shared/Card";

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          accusantium neque voluptates, qui fugit consequatur!
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <a href='/'>Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default About;
