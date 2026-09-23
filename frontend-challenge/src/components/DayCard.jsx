export default function DayCard(props) {
  return (
    <li className="day-card">
      <img className="day-card__image" src={props.day.url2} alt="" />
      <div className="day-card__body">
        <h4 className="day-card__title">{props.day.title}</h4>
        <p className="day-card__date">{props.day.date}</p>
      </div>
    </li>
  );
}
