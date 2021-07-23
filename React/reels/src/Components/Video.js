import React from 'react'

function Video(props) {
    const hanldeMute = (e) => {
        e.preventDefault();
        // get video mute
        e.target.muted = !e.target.muted
    }
    return (
        <>
            <video className='video-styles' onClick={hanldeMute} controls muted='muted' type='video/mp4'>
                <source src={props.source} type='video/webm' />
            </video>
        </>
    )
}

export default Video
