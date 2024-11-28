import { Link, useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="relative" aria-label="breadcrumb">
      <ul className="breadcrumb flex  gap-1 ">
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={to}
              className={`breadcrumb-item font-primary ${
                isLast ? "active" : ""
              }`}
            >
              {!isLast && (
                <Link to={to} className="text-gray-500 block  uppercase">
                  {value}
                </Link>
              )}
              {isLast && <span className="capitalize">/{value}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
