import Tags from "@/components/Tags";
import SpiceLevel from "@/components/SpiceLevel";

type SampleProps = {
  onClick: () => void;
};

export default function FirstSample({ onClick }: SampleProps) {
  return (
    <div id="first-sample" className="draggable-container">
      <div className="draggable-header">
        <p>Third Times The Charm</p>
        <button className="close-btn" onClick={() => onClick()}>
          &times;
        </button>
      </div>
      <p className="word-count">~1,200 words</p>
      <Tags tags={["Rom-Com", "Neighbors to Lovers", "Love at First Sight"]} />
      <SpiceLevel level={2} />
      <div className="sample-content">
        <p>These first three chapters are written in first person, present tense.</p>
        <br />
        <p>Morgan has a plan: knock on the door, borrow flour, and finally get her hot neighbor’s number. But when Miguel, the absurdly gorgeous gym god next door, opens up in all his sweaty, smirking glory, the plan quickly unravels into awkward jokes and flirtation that sizzles more than anything Morgan could pull out of an oven.</p>
      </div>
      <button className="coming-soon">Coming Soon</button>
    </div>
  );
}
