import './events.css'
import my_events from './myEvents'

export default function Events(){
    return(
        <div className="events" id='events'>
            <h1>Featured by Me</h1>
            <div className="my-events">
                {my_events.map((item,index) => {
                    return(
                        <div className="event" key={index}>
                            <div className="image">
                                <img src={item.image} alt="" />
                            </div>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}