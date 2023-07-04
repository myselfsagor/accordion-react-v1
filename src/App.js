import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion datas={faqs} />
    </div>
  );
}

function Accordion({ datas }) {
  return (
    <div className="accordion">
      {datas.map((data, i) => (
        <AccordionItem data={data} number={i} key={i} />
      ))}
    </div>
  );
}

function AccordionItem({ data, number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <div className="toggler" onClick={() => setIsOpen((open) => !open)}>
        <p className="title">{data.title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen ? <div className="content-box">{data.text}</div> : ""}
    </div>
  );
}
