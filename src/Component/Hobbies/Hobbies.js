import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import ReactBodymovin from 'react-bodymovin';
import hobbies from './hobbies.json'

class Hobbies extends React.Component {

    render() {
        const bodymovinOptions = {
            loop: true,
            autoplay: true,
            prerender: true,
            animationData: hobbies
        }    

        return (
        <div>
            <ReactBodymovin options={bodymovinOptions} />
        </div>
        )
    }
}

export default Hobbies; 