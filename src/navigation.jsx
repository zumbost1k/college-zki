import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <p>
        <Link to={'./1'}>1 лаба</Link>
      </p>
      <p>
        <Link to={'./2'}>2 лаба</Link>
      </p>
      <p>
        <Link to={'./3'}>3 лаба</Link>
      </p>
      <p>
        <Link to={'./4'}>4 лаба</Link>
      </p>
      <p>
        <Link to={'./5'}>5 лаба</Link>
      </p>
      <p>
        <Link to={'./6'}>6 лаба</Link>
      </p>
      <p>
        <Link to={'./7'}>7 лаба</Link>
      </p>
    </div>
  );
};

export default Navigation;
