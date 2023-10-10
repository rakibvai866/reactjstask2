const PersonalInfo = (props) => {
  return (
    <div className="personal-info">
      <h1>Bio Data of {props.name}</h1>
      <p>name : {props.name}</p>
      <p>age : {props.age}</p>
      <p>gender : {props.gender}</p>
      <p>address : {props.address}</p>
      {props.phone ? <p>phone : {props.phone}</p> : null}
      <p>email : {props.email}</p>
      <p>religion : {props.religion}</p>
      <p>nationality : {props.nationality}</p>
    </div>
  );
};

export default PersonalInfo;
