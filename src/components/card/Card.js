import '../card/Card.css'
import image_profile from '../../static/imgae_perfil.png'
function Card({name, url, description, html_url, last_update}) {

    let image = '../'

    return (
        <>
           <div className="card">
                <div className='cardInto'>
                    <div className='image'>
                        <img src={url ? url : image_profile} alt="img.avatar" />
                    </div>
                    <div className='description'>
                        {
                            name &&
                            <h1>{name}</h1>
                        }
                        <div>
                        {html_url && 
                                 <a href={html_url } target="_blank">Visitar</a>
                            }
                        </div>
                        <div>
                            <a href=""></a>
                            {last_update && 
                                 <span >Last Update at: {last_update.slice(0,10).split('-').reverse().join('/')}</span>
                            }
                       
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
           </div>
        </>
    )


}



export default Card