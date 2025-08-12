import Tags from "@/components/Tags";
import SpiceLevel from "@/components/SpiceLevel";

type SampleProps = {
  onClick: () => void;
};

export default function SecondSample({ onClick }: SampleProps) {
  return (
    <div id="second-sample" className="draggable-container">
      <div className="draggable-header">
        <p>The Boiling Pot</p>
        <button className="close-btn" onClick={() => onClick()}>
          &times;
        </button>
      </div>
      <p className="word-count">~1,200 words</p>
      <Tags tags={["Fake Dating", "Friends to Lovers", "Family Angst"]} />
      <SpiceLevel level={1} />
      <div className="sample-content">
        <p>This scene excerpt is written in third person, past tense.</p>
        <br />
        <p>Ethan’s visit home was supposed to be simple: pretend he has a girlfriend, convince his judgmental grandmother he is still her golden child, and get through the weekend unscathed. As the pressure builds and their act starts to crack, Ethan begins to realize he might be faking more than just a relationship.</p>
      </div>
      <button className="coming-soon">Coming Soon</button>
    </div>
  );
}
