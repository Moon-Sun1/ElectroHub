const DashboardCard = ({ children, style , gradient = false }) => {
  const baseClasses = "rounded-xl p-4 shadow-lg h-auto" +" " + style;
  const cardClasses = gradient 
    ? `${baseClasses} ${gradient}`
    : `${baseClasses} bg-white`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default DashboardCard;