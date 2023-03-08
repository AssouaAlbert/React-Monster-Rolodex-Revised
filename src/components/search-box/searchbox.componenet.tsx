import * as React from 'react';
import { ChangeEventHandler, ChangeEvent} from 'react';
import './searchbox.componenet.css';

type SearchBoxProps = {
onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
// Alternative
// onSearchChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({onSearchChange}: SearchBoxProps) => {
        return (
            <input
                className="search-box"
                id="search-box"
                type="search"
                placeholder="Search Monsters"
                onChange={onSearchChange} />
        )
}

// class SearchBox extends Component {

//     render() {
//         let { onSearchChange } = this.props;
//         return (
//             <input
//                 className="search-box"
//                 id="search-box"
//                 type="search"
//                 placeholder="Search Monsters"
//                 onChange={onSearchChange} />
//         )
//     }
// }

export default SearchBox