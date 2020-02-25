import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function GifItem({ gif: { id, title, url, embed_url } }) {
    return (
        <div className="card card-body mb-3">
            <div className="col-md-9">
                <h4>Gif: { title }</h4>
            </div>
            <div className="col-md-3">
                {/* <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link> */}
            </div>
        </div>
    )
}