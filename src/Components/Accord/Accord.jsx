import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./style.css"

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}></Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Шановні мешканці та гості Вільногірської громади! До вашої уваги
            новий сайт. Він присвячений героїзму і мужності наших земляків,
            увічненню пам'яті про загиблих і живих Героїв російсько-української
            війни.Медіаресурс ще у стані розробки, матеріали не всі. Але ми
            готові до співпраці з рідними наших захисників і захисниць, щоб
            наповнити це джерело інформації достовірними фактами з їхнього
            життя, світлинами, спогадами про них.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Тут ви зможете вносити пропозиції щодо нових матеріалів,
            користуватись інформацією з офіційних джерел щодо алгоритму пошуку
            зниклих безвісти. Матеріали про полеглих воїнів взяті з офіційного
            веб-сайту Вільногірської міської ради Дніпропетровської області,
            всеукраїнської Книги пам'яті, а також написані у процесі спілкування
            з родинами. Війна закінчиться, а пам'ять залишиться. Звертаємось до
            родин учасників АТО/ООС з проханням допомогти у написанні цієї
            символічної Книги Пам'яті нашої громади. Слава Україні! Героям
            слава!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
