import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/logo.png" 
        alt="Mide&Dara Motors Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
}