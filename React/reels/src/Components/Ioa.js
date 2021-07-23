import React from 'react';
import { useEffect, useState } from 'react';
import vid1 from './vid1.mp4';
import vid2 from './vid2.mp4';
import vid3 from './vid3.mp4';
import vid4 from './vid4.mp4';
import Video from './Video';
function Ioa() {
    const [sources, setSources] = useState([{ url: vid1 }, { url: vid2 }, { url: vid3 }, { url: vid4 }])
    const callback = entries => {
        entries.forEach(element => {
            console.log(element);

            // Child of video elements
            // Video is Async function 
            // we cannot play the video and pause if as some of the vide outside of the viewport will play
            let el = element.target.childNodes[0];
            el.play().then(() => {
                // If this video is not in viewport then Pause it 
                // Check if the video is not pause and it is intersection the viewport with the threshold value
                if (!el.paused && !element.isIntersecting) {
                    el.pause();
                }
            })
        });
    }
    const observer = new IntersectionObserver(callback, {
        threshold: 0.9
    })


    // ComponentDidMount 
    // adds observer to the every video element
    useEffect(() => {
        console.log('Effect');
        let elements = document.querySelectorAll('.videos')
        elements.forEach(el => {
            observer.observe(el)
        })
    }, [])
    return (
        <div className='video-container'>
            <div className='videos'>
                <Video source={sources[0].url} />
            </div>
            <div className='videos'>
                <Video source={sources[1].url} />
            </div>
            <div className='videos'>
                <Video source={sources[2].url} />
            </div>
            <div className='videos'>
                <Video source={sources[3].url} />
            </div>
        </div>
    )
}

export default Ioa