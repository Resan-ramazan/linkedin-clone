import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Squiirel.js is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: PL updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Is Redux too good ? ", "Code - 1967 readers")}
      {newsArticle("Bitcoin breaks $22k ", "Crypto - 1903 readers")}
      {newsArticle("Next.js 13 ", "Code - 63 readers")}
    </div>
  );
};

export default Widgets;
