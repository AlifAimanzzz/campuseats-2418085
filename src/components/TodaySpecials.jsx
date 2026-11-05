import { Link } from "react-router";
import { useCountdown, formatCountdown } from "../hooks/useCountdown.js";

function SpecialCard({ vendor, item }) {
  const remaining = useCountdown(item.specialEndsAt);
  const ended = remaining <= 0;

  return (
    <Link to={`/vendor/${vendor.id}`} className="card special-banner">
      <p className="tag">{vendor.name}</p>
      <h3>
        {item.name} · RM {item.price.toFixed(2)}
      </h3>
      <p className="special-timer">
        {ended ? "Special ended" : `Ends in ${formatCountdown(remaining)}`}
      </p>
    </Link>
  );
}

function TodaySpecials({ vendors }) {
  const specials = vendors.flatMap((vendor) =>
    vendor.menu
      .filter((item) => item.special && item.available)
      .map((item) => ({ vendor, item })),
  );

  if (specials.length === 0) return null;

  return (
    <section>
      <h2 className="section-title">Today’s specials</h2>
      <div className="vendor-grid">
        {specials.map(({ vendor, item }) => (
          <SpecialCard key={item.id} vendor={vendor} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TodaySpecials;
