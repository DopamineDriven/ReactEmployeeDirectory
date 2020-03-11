import React from 'react';
import data from '../employees.js';

export default function ResultItem(props) {
    return (
        <li className="media">
            <a href={props.item.trackViewUrl} target="_blank"></a>
                <div className="media-left" style={{padding: 5}}>
                    <img src={props.item.picture.thumbnail} alt="artwork"/>
                </div>
                <div className="media-body">
                    <h6 className="media-heading">
                    {props.item.name.first} +{props.item.name.last}
                    </h6>
                    <em>{props.item.artistName}</em>
                    <span className="badge pull-right">
                        {props.item.currency} {props.item.trackPrice}
                    </span>
                </div>
        </li>
    )
}

// {
//     "gender": "female",
//     "name": {
//         "title": "Miss",
//         "first": "Suzy",
//         "last": "Woods"
//     },
//     "location": {
//         "street": {
//             "number": 5585,
//             "name": "Main Road"
//         },
//         "city": "Plymouth",
//         "state": "Surrey",
//         "country": "United Kingdom",
//         "postcode": "T6 3YR",
//         "coordinates": {
//             "latitude": "11.8287",
//             "longitude": "83.3531"
//         },
//         "timezone": {
//             "offset": "+11:00",
//             "description": "Magadan, Solomon Islands, New Caledonia"
//         }
//     },
//     "email": "suzy.woods@example.com",
//     "login": {
//         "uuid": "ef1f86ad-4a5a-4662-ad02-c600e17c063b",
//         "username": "bluepeacock483",
//         "password": "1212",
//         "salt": "NuOAAlzY",
//         "md5": "731aecf639a417ff48b13b99e6b55a55",
//         "sha1": "0dad71054a6ce9425b06c045b48501784a8540e3",
//         "sha256": "4cf77c57029e67c9a2311df8eb97e78245064f424061a0cf20a37c1bc9ce02ab"
//     },
//     "dob": {
//         "date": "1945-11-27T10:40:39.715Z",
//         "age": 75
//     },
//     "registered": {
//         "date": "2002-09-19T02:05:57.183Z",
//         "age": 18
//     },
//     "phone": "015395 65156",
//     "cell": "0723-152-715",
//     "id": {
//         "name": "NINO",
//         "value": "HE 36 32 41 Y"
//     },
//     "picture": {
//         "large": "https://randomuser.me/api/portraits/women/88.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
//     },
//     "nat": "GB"
// },