export const Cell = (display: [string, string]) => (
  <div>
    <span style={{fontWeight: 'bold'}}>{display[0]}: </span>
    <span>{display[1]}</span>
  </div>
);
