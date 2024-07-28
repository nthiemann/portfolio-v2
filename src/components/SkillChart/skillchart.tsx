import React, { useEffect } from "react";
import config from "../../../config.json";
import * as styles from "./skillchart.module.css";
import Typography from "../Typography/typography";
import { Guid } from "guid-typescript";
import Tooltip from "../Tooltip/tooltip";

interface Skills {
  [name: string]: {
    level: number;
    description: string;
  };
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
      <tbody>
        {Object.entries(SKILLS)
          .toSorted((a, b) => b[1].level - a[1].level)
          .map(([key, value]) => {
            return (
              <tr key={key}>
                <td>
                  <div className={styles.skillName}>
                    <Typography>{key}</Typography>
                  </div>
                </td>
                <Tooltip text={value.description}>
                  {Array.from({ length: value.level }).map((_, index) => (
                    <td key={Guid.create().toString()}>
                      <div className={styles.pointSquare}></div>
                    </td>
                  ))}
                  {Array.from({ length: MAX_RANK - value.level }).map(
                    (_, index) => (
                      <td key={value.level + index}>
                        <div className={styles.pointSquareEmpty}></div>
                      </td>
                    )
                  )}
                </Tooltip>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default SkillChart;
