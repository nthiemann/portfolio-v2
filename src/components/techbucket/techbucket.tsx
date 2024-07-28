import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import * as ICONS from "../../assets/icons/index";
import * as styles from "./techbucket.module.css";
import Tooltip from "../Tooltip/tooltip";

const iconMap = {
  "Amazon Web Services": ICONS.AwsGradientIcon,
  JavaScript: ICONS.JavascriptGradientIcon,
  Python: ICONS.PythonGradientIcon,
  React: ICONS.ReactGradientIcon,
  HTML: ICONS.HtmlGradientIcon,
  CSS: ICONS.CssGradientIcon,
  PostgreSQL: ICONS.PostgresIcon,
  Git: ICONS.GitGradientIcon,
  Docker: ICONS.DockerGradientIcon,
  Gatsby: ICONS.GatsbyIcon,
  Firebase: ICONS.FirebaseIcon,
  Terraform: ICONS.TerraformGradientIcon,
  GraphQL: ICONS.GraphQlIcon,
  Django: ICONS.DjangoGradientIcon,
  SAP: ICONS.SapGradientIcon,
  MySQL: ICONS.MysqlGradientIcon,
  "Raspberry Pi": ICONS.RaspberryPiGradientIcon,
  "Android Studio": ICONS.AndroidStudioGradientIcon,
  Jira: ICONS.JiraGradientIcon,
  Unity: ICONS.UnityGradientIcon,
};

const TechBucketWip = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 300,
        height: 300,
        background: "rgba(255, 0, 0, 0.5)",
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(150, 300, 300, 20, {
      isStatic: true,
      render: {
        fillStyle: "blue",
      },
    });

    const ball = Bodies.circle(150, 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: "yellow",
      },
    });

    World.add(engine.world, [floor, ball]);

    //Engine.run(engine);
    Matter.Runner.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 300,
        height: 300,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

const TechBucket = () => {
  return (
    <div className={styles.icon}>
      {Object.entries(iconMap).map(([key, Value], i) => (
        <Tooltip key={key} text={key}>
          <Value />
        </Tooltip>
      ))}
    </div>
  );
};

export default TechBucket;
