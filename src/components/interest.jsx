const Interest = (props) => {
  return (
    <div className="interests">
      <h2>My Interests : </h2>
      <ul>
        {props.interests.map((interest) => (
          <li>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interest;
