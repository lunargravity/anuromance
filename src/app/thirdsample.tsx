import Tags from "@/components/Tags";
import SpiceLevel from "@/components/SpiceLevel";

type SampleProps = {
  onClick: () => void;
};

export default function ThirdSample({ onClick }: SampleProps) {
  return (
    <div id="third-sample" className="draggable-container">
      <div className="draggable-header">
        <p>The Trouble with Lynn</p>
        <button className="close-btn" onClick={() => onClick()}>
          &times;
        </button>
      </div>
      <p className="word-count">~1,200 words</p>
      <Tags tags={["Fantasy Romance", "Enemies to Lovers", "Grumpy Sunshine"]} />
      <SpiceLevel level={3} />
      <div className="sample-content">
        <p>This scene excerpt is written in first person, past tense.</p>
        <br />
        <p>Among the cheering crowd after her championship win, the only person Lynn seeks congratulations from is her new girlfriend, Edith. However, Edith is tired and stressed from continuous healing sessions between matches. After an emotional outburst, Lynn asks for a reward that only Edith can provide.</p>
      </div>
      <button className="coming-soon">Coming Soon</button>
    </div>
  );
}
