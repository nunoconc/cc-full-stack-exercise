import { JSX } from 'react';
import Item from './item';

export default function List(): JSX.Element {
    return (
        <div>
            <h1>List</h1>
            <Item/>
        </div>
    );
}