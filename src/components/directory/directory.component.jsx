import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            section: [
                {
                    title: 'Hats',
                    imageUrl: 'https://th.bing.com/th/id/OIP._eEHB0oscyEFOeSZgW62FwHaF1?pid=ImgDet&rs=1',
                    size: '',
                    linkUrl: 'hats',
                    id: 1
                },{
                    title: 'Jacket',
                    imageUrl: 'https://th.bing.com/th/id/OIP.f44jbdmhT0VvoXW5MEGPZgHaE7?pid=ImgDet&rs=1',
                    size: '',
                    linkUrl: '',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://th.bing.com/th/id/R.f44e3291bc128ba7ec0c36a718fcb436?rik=vkfqdaDxDvAEwg&pid=ImgRaw&r=0',
                    size: '',
                    linkUrl: '',
                    id: 3
                },
                //Also you can send className from our array
                {
                    title: 'Woman',
                    imageUrl: 'https://th.bing.com/th/id/R.56de5b6428bea883d295e928fea44d04?rik=GX1U7rNJs8Ia6g&pid=ImgRaw&r=0',
                    size: 'large',
                    linkUrl: '',
                    id: 4
                },
                {
                    title: 'Man',
                    imageUrl: 'https://th.bing.com/th/id/R.9482c5a7e6caee8977ccf3c495f3c66f?rik=eiKTdw4VHf%2fQyA&pid=ImgRaw&r=0',
                    size: 'large',
                    linkUrl: '',
                    id: 5
                }
            ]
        }
    }
    render(){
        return(
            <div className = "menu-directory" >
                {
                    this.state.section.map(({id,...otherSectionValue})=>(
                        <MenuItem key = {id} {...otherSectionValue} />
                    ))
                }
            </div>
        )
    }

}

export default Directory;