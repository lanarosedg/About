import photo from './assets/semi-formalPhoto.jpg';

function Photo() {
    return (
        <div className="photo">
            <img className="formalPhoto" src={photo} alt="" />
        </div>
    )
}

export default Photo;