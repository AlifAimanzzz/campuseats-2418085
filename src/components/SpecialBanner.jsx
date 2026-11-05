import { useCountdown, formatCountdown } from "../hooks/useCountdown.js";

// Shown above the menu on VendorPage.
function SpecialBanner({ item, onAdd }) {
  const remaining = useCountdown(item.specialEndsAt);
  const ended = remaining <= 0;

  return (
    <article className="card special-banner">
      <p className="tag">Daily special</p>
      <h3>
        {item.name} · RM {item.price.toFixed(2)}
      </h3>
      <p className="muted">{item.description}</p>
      <p className="special-timer" role="timer">
        {ended ? "Special ended" : `Ends in ${formatCountdown(remaining)}`}
      </p>
      <button className="btn" disabled={ended} onClick={() => onAdd(item)}>
        {ended ? "Special ended" : "Add special to cart"}
      </button>
    </article>
  );
}

export default SpecialBanner;
