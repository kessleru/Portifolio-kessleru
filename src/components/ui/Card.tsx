import reactLogo from '../../assets/React.svg';

type CardProps = {
  children: React.ReactNode;
  fileName?: string;
  className?: string;
};

function Card({ children, fileName = 'nome.tsx', className = '' }: CardProps) {
  return (
    <div className={`pt-4 relative ${className}`}>
      <div className="inline-flex items-center gap-2 rounded-t-lg bg-ctp-crust px-4 py-1 text-xs sm:text-sm font-medium text-ctp-text absolute -top-1.5">
        <img src={reactLogo} alt="React Logo" className="h-4 w-4" />
        <span>{fileName}</span>
      </div>

      <div className="rounded-b-lg rounded-tr-lg border-2 border-ctp-crust/20 bg-ctp-mantle p-4 shadow-md min-w-40">
        {children}
      </div>
    </div>
  );
}

export default Card;
