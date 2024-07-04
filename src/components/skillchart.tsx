import React, { useEffect } from "react";
import config from "../../config.json";
import * as styles from "./skillchart.module.css";
import Typography from "./typography";

interface Skills {
  [name: string]: number;
}

const SKILLS: Skills = config.skills;
const MAX_RANK = config.max_skill_rank;

const SkillChart: React.FC = () => {
  const isEmpty = Object.keys(SKILLS).length < 1;

  useEffect(() => {
    if (isEmpty) {
      return;
    }
  }, []);

  return isEmpty ? (
    <></>
  ) : (
    <table>
      {Object.entries(SKILLS)
        .toSorted((a, b) => b[1] - a[1])
        .map(([key, value]) => {
          return (
            <tr>
              <td>
                <div className={styles.skillName}>
                  <Typography>{key}</Typography>
                </div>
              </td>
              {Array.from({ length: value }).map((_, index) => (
                <td key={index}>
                  <div className={styles.pointSquare}></div>
                </td>
              ))}
              {Array.from({ length: MAX_RANK - value }).map((_, index) => (
                <td key={value + index}>
                  <div className={styles.pointSquareEmpty}></div>
                </td>
              ))}
            </tr>
          );
        })}
    </table>
  );
};
Object.entries;
export default SkillChart;
