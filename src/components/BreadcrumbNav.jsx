function BreadcrumbNav({ items }) {
  return (
    <nav aria-label="breadcrumb" className="bg-dark rounded px-3 py-2 mt-2" data-bs-theme="dark">
      <ol className="breadcrumb mb-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast ? (
            <li key={item} className="breadcrumb-item active text-white fw-semibold" aria-current="page">
              {item}
            </li>
          ) : (
            <li key={item} className="breadcrumb-item">
              <a href="#" className="text-light text-decoration-none">{item}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadcrumbNav;
