import PersonalInfo from './PersonalInfo';
import Interest from './interest';
import Skill from './skill';
const BioData = (props) => {
    return (
        <div className="bio-data">
            <PersonalInfo 
            name={props.name}
            age={props.age}
            gender={props.gender}
            address={props.address}
            phone={props.phone}
            email={props.email}
            religion = {props.religion}
            nationality = {props.nationality}
            />
            <Skill 
            skills={props.skills}
            />
            <Interest 
            interests={props.interests}
            />
        </div>
    )

}

export default BioData