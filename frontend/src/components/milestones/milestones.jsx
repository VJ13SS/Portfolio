import './milestones.css'
import achievements from './myMilestones'

export default function Milestones(){
    return(
        <div className="milestones">
            <h1>Milestones in my Journey</h1>
            <ul className="achivements">
                {achievements.map((achievement,index) => (
                    <li>
                        <span><h3>{achievement.heading}, </h3> {achievement.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}