type TagsProps = {
  tags: string[];
};

export default function Tags({ tags }: TagsProps) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}