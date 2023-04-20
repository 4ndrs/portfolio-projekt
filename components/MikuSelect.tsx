import styles from "./MikuSelect.module.css";

type Props = {
  className: string;
  tags: string[];
  checkedTags: string[];
  onChange: (checkedTags: string[]) => void;
};

const MikuSelect = ({ className, tags, checkedTags, onChange }: Props) => {
  const handleChange = (tag: string) => {
    if (checkedTags.includes(tag)) {
      return onChange(checkedTags.filter((checkedTag) => checkedTag !== tag));
    }

    return onChange([...checkedTags, tag]);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLabelElement>,
    tag: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleChange(tag);
    }
  };

  return (
    <>
      <div className={`${className} ${styles.container}`} tabIndex={0}>
        <span className={styles.checkedTagsContainer}>
          Tags:{" "}
          {checkedTags.length === 0 ? (
            "Any"
          ) : (
            <ul>
              {checkedTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </span>
        <div className={styles.triangle} />
        <ul className={styles.tagsContainer}>
          {tags.map((tag) => (
            <li key={tag}>
              <label
                tabIndex={0}
                onKeyDown={(event) => handleKeyDown(event, tag)}
                className={`${styles.tag} ${
                  checkedTags.includes(tag) ? styles.checked : ""
                }`}
              >
                {tag}
                <input
                  checked={checkedTags.includes(tag)}
                  type="checkbox"
                  onChange={() => handleChange(tag)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MikuSelect;
