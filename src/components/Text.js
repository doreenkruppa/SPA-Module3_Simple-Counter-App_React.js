export default function Text({ props }) {
  return (
    <div>
      <p className={props > 5 ? "backgroundOlive" : ""}>
        {props <= 10
          ? `The current count is: ${props}`
          : "Count is bigger than 10"}
      </p>
    </div>
  );
}
