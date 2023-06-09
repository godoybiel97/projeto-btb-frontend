import styles from "../styles.module.scss";
import JavascriptImage from "../../../assets/participant-example.svg";
import { GameParticipantType } from "../../../types/GameParticipantType";
import { ParticipantType } from "../../../types/ParticipantType";

interface IProps {
  gameParticipant: GameParticipantType;
  selected?: boolean;
}

function DashboardParticipantCard({ gameParticipant, selected }: IProps) {
  const { participant } = gameParticipant;
  return (
    <div
      className={
        selected
          ? `${styles.container} ${styles["container--selected"]}`
          : styles.container
      }
      style={{ width: "340px" }}
    >
      <div>
        <h1>{participant.name}</h1>
        {participant.eliminated && (
          <h1>Eliminado(a) {gameParticipant.percent.toFixed(1)} %</h1>
        )}
      </div>
      <img src={JavascriptImage} alt="participant" />
    </div>
  );
}

export default DashboardParticipantCard;
