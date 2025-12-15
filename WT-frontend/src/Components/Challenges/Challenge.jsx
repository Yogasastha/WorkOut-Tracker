import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";



const Challenge = () => {
  
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Daily Pushups",
        eventTime: "2022:02:12:00:00:00",
      },
      {
        id: 2,
        title: "Stop Dom Scrolling",
        eventTime: "2022:02:12:00:00:00",
      },
      {
        id: 3,
        title: "Daily COding",
        eventTime: "2022:02:12:00:00:00",
      },
    ];
  
    setChallenges(data);
  }, []);
  return (
    <section>
      <h1 className="text-3xl font-bold text-center m-5">Our Challenges</h1>
      <div className="grid grid-cols-3 gap-8 m-3 ">
        {challenges.map((item) => (
          <ChallengeCard
            key={item.id}
            title={item.title}
            startTime={item.startTime}
          />
        ))}
      </div>
    </section>
  );
};

export default Challenge;
